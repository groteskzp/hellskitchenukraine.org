import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Collapse, IconButton, MenuItem } from '@mui/material';
import classnames from 'classnames';

import { MENU_ROUTES } from '../../../Router/constants';
import { ABOUT_SUBMENU } from '../constants';
import { NavLink } from '../NavLink';

import styles from './styles.module.css';

interface AboutNavItemProps {
  layout: 'desktop' | 'mobile';
  onNavigate?: () => void;
  onOpenChange?: (open: boolean) => void;
  paragraphStyles?: React.CSSProperties;
}

const submenuLinkStyles: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 500,
  lineHeight: 1.25,
};

export const AboutNavItem: React.FC<AboutNavItemProps> = ({
  layout,
  onNavigate,
  onOpenChange,
  paragraphStyles,
}) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pinnedRef = useRef(false);
  const suppressFocusOpen = useRef(false);
  const submenuId = 'about-submenu';

  useEffect(() => {
    if (layout === 'mobile') onOpenChange?.(visible);
  }, [layout, onOpenChange, visible]);

  const closeMenu = () => {
    pinnedRef.current = false;
    setVisible(false);
  };

  useEffect(() => {
    if (layout !== 'desktop') return undefined;

    const node = itemRef.current;
    if (!node) return undefined;

    const onEnter = () => setVisible(true);

    const onLeave = () => {
      if (pinnedRef.current) return;
      if (node.contains(document.activeElement)) return;
      setVisible(false);
    };

    const onFocusIn = () => {
      if (suppressFocusOpen.current) {
        suppressFocusOpen.current = false;
        return;
      }
      setVisible(true);
    };

    const onFocusOut = (event: FocusEvent) => {
      if (!node.contains(event.relatedTarget as Node)) {
        pinnedRef.current = false;
        setVisible(false);
      }
    };

    const focusLink = (offset: number) => {
      window.requestAnimationFrame(() => {
        const links = Array.from(menuRef.current?.querySelectorAll('a') ?? []);
        if (!links.length) return;
        const index = links.indexOf(
          document.activeElement as HTMLAnchorElement,
        );
        let nextIndex = 0;
        if (index === -1) {
          nextIndex = offset < 0 ? links.length - 1 : 0;
        } else {
          nextIndex = (index + offset + links.length) % links.length;
        }
        links[nextIndex].focus();
      });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        pinnedRef.current = false;
        suppressFocusOpen.current = true;
        setVisible(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;

      event.preventDefault();
      setVisible(true);
      focusLink(event.key === 'ArrowDown' ? 1 : -1);
    };

    node.addEventListener('mouseenter', onEnter);
    node.addEventListener('mouseleave', onLeave);
    node.addEventListener('focusin', onFocusIn);
    node.addEventListener('focusout', onFocusOut);
    node.addEventListener('keydown', onKeyDown);

    return () => {
      node.removeEventListener('mouseenter', onEnter);
      node.removeEventListener('mouseleave', onLeave);
      node.removeEventListener('focusin', onFocusIn);
      node.removeEventListener('focusout', onFocusOut);
      node.removeEventListener('keydown', onKeyDown);
    };
  }, [layout]);

  useEffect(() => {
    if (layout !== 'desktop' || !visible) return undefined;

    const onPointerDown = (event: MouseEvent) => {
      if (!itemRef.current?.contains(event.target as Node)) {
        pinnedRef.current = false;
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [layout, visible]);

  const togglePinned = () => {
    if (visible && pinnedRef.current) {
      pinnedRef.current = false;
      setVisible(false);
      return;
    }
    pinnedRef.current = true;
    setVisible(true);
  };

  const submenuStyles: React.CSSProperties = {
    ...paragraphStyles,
    whiteSpace: 'normal',
  };

  if (layout === 'mobile') {
    return (
      <Box sx={{ maxWidth: '100%', mb: 2, minWidth: 0, width: '100%' }}>
        <MenuItem
          component="div"
          disableRipple
          sx={{
            alignItems: 'center',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'flex-start',
            maxWidth: '100%',
            minHeight: { xs: 48, sm: 'auto' },
            minWidth: 0,
            px: 2,
            py: '6px',
            width: 'auto',
            '& a': { marginRight: 0 },
          }}
        >
          <NavLink
            onClick={onNavigate}
            paragraphStyles={paragraphStyles}
            path={MENU_ROUTES.About}
          />
          <IconButton
            aria-controls={submenuId}
            aria-expanded={visible}
            aria-label={t('navigation.aboutSubmenu')}
            onClick={() => setVisible((open) => !open)}
            onMouseDown={(event) => event.stopPropagation()}
            size="small"
            sx={{
              color: 'inherit',
              flexShrink: 0,
              height: 24,
              ml: '2px',
              p: 0,
              width: 24,
            }}
          >
            <ExpandMoreIcon
              sx={{
                fontSize: 24,
                transform: visible ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease',
              }}
            />
          </IconButton>
        </MenuItem>
        <Collapse in={visible}>
          <Box
            component="ul"
            id={submenuId}
            sx={{ listStyle: 'none', m: 0, pl: 4, py: 1 }}
          >
            {ABOUT_SUBMENU.map((path) => (
              <Box component="li" key={path} sx={{ mb: 1.5 }}>
                <NavLink
                  onClick={onNavigate}
                  paragraphStyles={submenuLinkStyles}
                  path={path}
                />
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
    );
  }

  return (
    <li className={styles.listItem} ref={itemRef}>
      <div className={styles.row}>
        <NavLink
          onClick={closeMenu}
          paragraphStyles={paragraphStyles}
          path={MENU_ROUTES.About}
        />
        <button
          ref={buttonRef}
          aria-controls={submenuId}
          aria-expanded={visible}
          aria-haspopup="true"
          aria-label={t('navigation.aboutSubmenu')}
          className={styles.chevron}
          onClick={togglePinned}
          type="button"
        >
          <ExpandMoreIcon
            className={visible ? styles.chevronOpen : undefined}
            fontSize="small"
          />
        </button>
      </div>
      <div
        className={classnames(styles.submenu, {
          [styles.submenuHidden]: !visible,
        })}
        id={submenuId}
        ref={menuRef}
      >
        <ul className={styles.submenuList}>
          {ABOUT_SUBMENU.map((path) => (
            <li key={path}>
              <NavLink
                onClick={closeMenu}
                paragraphStyles={submenuStyles}
                path={path}
              />
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
