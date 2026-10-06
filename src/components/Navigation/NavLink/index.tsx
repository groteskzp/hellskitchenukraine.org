import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Typography, useTheme } from '@mui/material';

import { MENU_ROUTES, ROUTES_PATH } from '../../../Router/constants';
import { InternalLink } from '../../InternalLink';

interface NavLinkProps {
  onClick?: () => void;
  paragraphStyles?: React.CSSProperties;
  path: MENU_ROUTES;
  withActive?: boolean;
  isWhite?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  onClick,
  paragraphStyles,
  isWhite,
  path,
  withActive,
}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const theme = useTheme();

  const getParagraphStyle = () => {
    if (paragraphStyles) return paragraphStyles;

    return undefined;
  };

  const getColor = () => {
    if (isWhite) return theme.palette.white;

    if (!withActive || location.pathname === ROUTES_PATH[path]) {
      return theme.palette.black;
    }

    return theme.palette.black;
  };

  return (
    <InternalLink
      key={path}
      onClick={onClick}
      style={{
        color: getColor(),
      }}
      to={path}
    >
      <Typography style={getParagraphStyle()} variant="body1">
        {t(`navigation.${path}`)}
      </Typography>
    </InternalLink>
  );
};
