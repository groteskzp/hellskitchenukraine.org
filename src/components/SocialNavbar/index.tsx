import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, List, useTheme } from '@mui/material';
import classnames from 'classnames';

import { IconSize } from '../IconComponent';

import styles from './styles.module.css';

interface SocialNavbarProps {
  isVertical?: boolean;
  isWhite?: boolean;
  instagramLink?: string;
  iconSize?: IconSize;
  facebookLink?: string;
  linkedInLink?: string;
  youTubeLink?: string;
}

interface SOCIAL {
  link?: string;
  icon: React.ReactNode;
}

export const SocialNavbar: React.FC<SocialNavbarProps> = ({
  isVertical,
  isWhite,
  instagramLink,
  facebookLink,
  linkedInLink,
  youTubeLink,
}) => {
  const theme = useTheme();

  const listClasses = classnames(styles.list, {
    [styles.verticalList]: isVertical,
  });

  const SOCIAL_MAP: SOCIAL[] = [
    { link: instagramLink, icon: <InstagramIcon /> },
    { link: facebookLink, icon: <FacebookOutlinedIcon /> },
    { link: linkedInLink, icon: <LinkedInIcon /> },
    { link: youTubeLink, icon: <YouTubeIcon /> },
  ];

  const renderIcon = ({ link, icon }: SOCIAL) =>
    link ? (
      <IconButton
        className={styles.icon}
        component="a"
        href={link}
        key={link}
        size="small"
        style={{ color: isWhite ? theme.palette.white : theme.palette.black }}
        target="_blank"
      >
        {icon}
      </IconButton>
    ) : null;

  return (
    <nav>
      <List className={listClasses}>{SOCIAL_MAP.map(renderIcon)}</List>
    </nav>
  );
};
