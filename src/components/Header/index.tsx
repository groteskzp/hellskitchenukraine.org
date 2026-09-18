import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { LINKS } from '../../assets/constants';
import { ButtonComponent, ButtonSize } from '../ButtonComponent';
import { LanguageSelect } from '../LanguageSelect';
import { Logo } from '../Logo';
import { Navbar } from '../Navigation/Navbar';
import { NavbarLarge } from '../Navigation/NavbarLarge';
import { SocialNavbar } from '../SocialNavbar';

interface HeaderProps {
  isBlue?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isBlue }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  // Desktop (md ≥1024): horizontal NavbarLarge. Below: hamburger only.
  // Previously gated at xl (≥1680), which hid the menu on typical laptops.
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const renderLogo = () => (
    <Box
      style={{
        marginRight: isDesktop ? '0' : 'auto',
        width: isDesktop ? '164px' : '90px',
        minWidth: isDesktop ? '164px' : '90px',
      }}
    >
      <Logo />
    </Box>
  );

  return (
    <AppBar
      position="static"
      style={{
        background: isBlue
          ? theme.palette.blueGradient
          : theme.palette.yellowBlueGradient,
        backgroundColor: 'transparent',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar style={{ minHeight: isDesktop ? '98px' : '60px', padding: 0 }}>
          {renderLogo()}
          {isDesktop && <NavbarLarge />}
          {isDesktop && (
            <SocialNavbar
              instagramLink={LINKS.instagramLink}
              facebookLink={LINKS.facebookLink}
            />
          )}
          {isDesktop && <LanguageSelect />}
          {isDesktop && (
            <Box sx={{ ml: 1, mr: 0, flexShrink: 0 }}>
              <ButtonComponent
                size={ButtonSize.small}
                textButton={t('navigation.support')}
              />
            </Box>
          )}
          {!isDesktop && <Navbar />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
