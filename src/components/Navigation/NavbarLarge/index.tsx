import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

import { NAVIGATION_MENU } from '../constants';
import { NavLink } from '../NavLink';

import styles from './styles.module.css';

interface NavbarLargeProps {}

export const NavbarLarge: React.FC<NavbarLargeProps> = () => {
  const theme = useTheme();
  // body1 is 24px from md — too wide for logo + social + lang + CTA on 1024–1679.
  const isSpacious = useMediaQuery(theme.breakpoints.up('xl'));
  const linkStyles = isSpacious
    ? undefined
    : { fontSize: 15, lineHeight: 1.25, whiteSpace: 'nowrap' as const };

  return (
    <nav className={styles.component}>
      <ul className={styles.list}>
        {NAVIGATION_MENU.map((path) => (
          <li key={path} className={styles.listItem}>
            <NavLink path={path} paragraphStyles={linkStyles} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
