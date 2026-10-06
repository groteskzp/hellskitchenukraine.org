import React from 'react';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  Dialog,
  Grid,
  IconButton,
  MenuItem,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { LINKS } from '../../../assets/constants';
import { MENU_ROUTES } from '../../../Router/constants';
import { ButtonComponent, ButtonSize } from '../../ButtonComponent';
import { IconComponent } from '../../IconComponent';
import { LanguageToggle } from '../../LanguageToggle';
import { Logo } from '../../Logo';
import { SocialNavbar } from '../../SocialNavbar';
import { AboutNavItem } from '../AboutNavItem';
import { NAVIGATION_MENU } from '../constants';
import { NavLink } from '../NavLink';
import { Transition } from './Transition';

import styles from './styles.module.css';

interface NavbarProps {}

// Each route is one xs=6 peer: Головна|Звітність, Проєкти|Задонатити, Про нас|(empty).
const tabletNavCells = (): Array<{ key: string; path: MENU_ROUTES | null }> => {
  const left = NAVIGATION_MENU.slice(0, 3);
  const right = NAVIGATION_MENU.slice(3);
  const rowCount = Math.max(left.length, right.length);

  return Array.from({ length: rowCount }, (_, row) => [
    {
      key: left[row] ?? `tablet-nav-empty-left-${row}`,
      path: left[row] ?? null,
    },
    {
      key: right[row] ?? `tablet-nav-empty-right-${row}`,
      path: right[row] ?? null,
    },
  ]).flat();
};

export const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const theme = useTheme();
  const { t } = useTranslation();

  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  let menuMaxHeight = 'none';
  if (isTablet) menuMaxHeight = aboutOpen ? '92vh' : '440px';

  const iconStyles = {
    color: theme.palette.icon,
    border: `2px solid ${theme.palette.icon}`,
    borderRadius: '10px',
    p: { xs: 0.25, md: 1 },
    '& .MuiSvgIcon-root': {
      fontSize: '30px!important',
    },
  };

  const paragraphStyles = {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderNavEntry = (path: MENU_ROUTES) => {
    if (path === MENU_ROUTES.About) {
      return (
        <AboutNavItem
          key={path}
          layout="mobile"
          onNavigate={handleClose}
          onOpenChange={setAboutOpen}
          paragraphStyles={paragraphStyles}
        />
      );
    }

    return (
      <MenuItem key={path} onClick={handleClose} sx={{ mb: 2 }}>
        <NavLink paragraphStyles={paragraphStyles} path={path} />
      </MenuItem>
    );
  };

  const renderMobileMenu = () => {
    if (isTablet) return null;

    return (
      <>
        <Grid item xs={9}>
          {NAVIGATION_MENU.map((path) => renderNavEntry(path))}
          <Box sx={{ mt: 5 }} />
          <Box sx={{ ml: 2 }}>
            <ButtonComponent
              size={ButtonSize.small}
              textButton={t('navigation.support')}
              withRightArrow
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <LanguageToggle isVertical />
              <Box sx={{ mt: 4 }} />
              <SocialNavbar
                isVertical
                instagramLink={LINKS.instagramLink}
                facebookLink={LINKS.facebookLink}
              />
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  const renderTabletMenu = () => {
    if (!isTablet) return null;

    return (
      <>
        <Grid item xs={2}>
          <SocialNavbar
            isVertical
            instagramLink={LINKS.instagramLink}
            facebookLink={LINKS.facebookLink}
          />
        </Grid>
        <Grid item xs={8}>
          <Grid container>
            {tabletNavCells().map((cell) =>
              cell.path ? (
                <Grid item key={cell.key} xs={6} zeroMinWidth>
                  {renderNavEntry(cell.path)}
                </Grid>
              ) : (
                <Grid item key={cell.key} xs={6} />
              ),
            )}
          </Grid>
          <Box sx={{ mt: 2 }} />
          <Grid container justifyContent="center">
            <ButtonComponent
              size={ButtonSize.small}
              textButton={t('navigation.support')}
              withRightArrow
            />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <LanguageToggle isVertical />
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <nav className={styles.component}>
      <IconButton aria-label="menu" onClick={handleClickOpen} sx={iconStyles}>
        <IconComponent Icon={MenuIcon} />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        style={{ maxHeight: menuMaxHeight }}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            background: theme.palette.blueGradient,
            overflowY: 'auto',
          },
        }}
      >
        <AppBar position="relative" style={{ background: theme.palette.white }}>
          <Container maxWidth="lg">
            <Toolbar
              style={{
                minHeight: isDesktop ? '98px' : '60px',
                padding: 0,
              }}
            >
              <Box
                sx={{ mr: { xs: 'auto', xl: 0 } }}
                style={{
                  minWidth: isDesktop ? '164px' : '90px',
                  width: isDesktop ? '164px' : '90px',
                }}
              >
                <Logo />
              </Box>
              <IconButton
                aria-label="close"
                color="inherit"
                edge="start"
                onClick={handleClose}
                sx={iconStyles}
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <Container>
          <Grid container spacing={2} sx={{ my: 4 }}>
            {renderMobileMenu()}
            {renderTabletMenu()}
          </Grid>
        </Container>
      </Dialog>
    </nav>
  );
};
