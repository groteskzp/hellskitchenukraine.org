import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { MENU_ROUTES, ROUTES_PATH } from '../../Router/constants';

import styles from './styles.module.css';

interface InternalLinkProps {
  children?: ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  to: MENU_ROUTES;
}

export const InternalLink: React.FC<InternalLinkProps> = ({
  children,
  onClick,
  style,
  to,
}) => (
  <Link
    className={styles.link}
    key={to}
    onClick={onClick}
    style={style}
    to={ROUTES_PATH[to]}
  >
    {children}
  </Link>
);
