import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { ButtonComponent, ButtonSize, ButtonVariant } from '../ButtonComponent';

export enum InfoComponentSize {
  small = 'small',
  medium = 'medium',
  big = 'big',
  large = 'large',
}

export enum InfoComponentAlign {
  left = 'left',
  center = 'center',
  right = 'right',
}

export enum InfoComponentVariant {
  dark = 'dark',
  light = 'light',
}

interface InfoComponentProps {
  buttonText?: string;
  buttonVariant?: ButtonVariant;
  copies: string[];
  label?: string;
  size?: InfoComponentSize;
  textAlign?: InfoComponentAlign;
  title?: string;
  variant?: InfoComponentVariant;
}

export const InfoComponent: React.FC<InfoComponentProps> = ({
  buttonText,
  buttonVariant,
  copies,
  label,
  size = InfoComponentSize.medium,
  textAlign = InfoComponentAlign.left,
  title,
  variant = InfoComponentVariant.dark,
}) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isWideScreen = useMediaQuery(theme.breakpoints.up('xl'));

  const getTitleVariant = () => {
    if (size === InfoComponentSize.small) return 'h6';

    if (size === InfoComponentSize.medium) {
      if (isWideScreen) return 'h2';

      return 'h3';
    }

    if (size === InfoComponentSize.big) return 'h2';

    if (size === InfoComponentSize.large) {
      if (isDesktop) return 'h1';

      return 'h2';
    }

    return 'h3';
  };

  const getCopyVariant = () => {
    if (size === InfoComponentSize.large) return 'body1';

    if (size === InfoComponentSize.medium) return 'body2';

    return undefined;
  };

  const renderLabel = () => {
    if (!label) return null;

    return (
      <Typography
        component="span"
        sx={{
          bgcolor: theme.palette.darkYellow,
          borderRadius: 1,
          p: 1,
        }}
        variant="body1"
      >
        {label}
      </Typography>
    );
  };

  const renderButton = () => {
    if (!buttonText) return null;

    return (
      <CardActions sx={{ justifyContent: textAlign, px: 0 }}>
        <ButtonComponent
          size={ButtonSize.large}
          textButton={buttonText}
          variant={buttonVariant}
          withRightArrow
        />
      </CardActions>
    );
  };

  const renderCopies = () =>
    copies.map((copy) => (
      <Typography
        align={textAlign}
        gutterBottom
        key={copy}
        paragraph
        sx={{
          mx: `${isDesktop && textAlign === InfoComponentAlign.center ? '10%' : '0'}`,
        }}
        variant={getCopyVariant()}
      >
        {copy}
      </Typography>
    ));

  const renderTitle = () => {
    if (!title) return null;

    return (
      <Typography align={textAlign} gutterBottom variant={getTitleVariant()}>
        {title}
      </Typography>
    );
  };

  return (
    <>
      {renderLabel()}
      <Card
        sx={{
          background: 'transparent',
          color:
            variant === InfoComponentVariant.light
              ? theme.palette.white
              : theme.palette.black,
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <CardContent sx={{ flex: 1, px: 0 }}>
          {renderTitle()}
          {renderCopies()}
        </CardContent>
        {renderButton()}
      </Card>
    </>
  );
};
