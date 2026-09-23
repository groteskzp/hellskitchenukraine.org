import React from 'react';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import { Box, Link, Paper, Typography } from '@mui/material';

interface QrCardProps {
  title: string;
  img?: string;
  isPlaceholder?: boolean;
  href?: string;
}

/** Fixed caption band so Privat (2 lines) and Mono (1 line) share one QR baseline. */
const TITLE_BAND_HEIGHT = { xs: 56, sm: 64 };

export const QrCard: React.FC<QrCardProps> = ({
  title,
  img,
  isPlaceholder,
  href,
}) => {
  const card = (
    <Paper
      elevation={0}
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: 0,
        height: '100%',
        p: { xs: 2, sm: 3 },
        borderRadius: 6,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.04)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: href ? 'pointer' : 'default',
        '&:hover': {
          transform: 'translateY(-8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
        },
      }}
    >
      <Typography
        variant="overline"
        sx={{
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: TITLE_BAND_HEIGHT,
          minHeight: TITLE_BAND_HEIGHT,
          flexShrink: 0,
          mb: 2,
          px: 0.5,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'common.black',
          opacity: 0.5,
          fontSize: { xs: '0.65rem', sm: '0.75rem' },
          lineHeight: 1.35,
          textAlign: 'center',
          overflow: 'hidden',
          whiteSpace: 'normal',
          wordBreak: 'break-word',
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          boxSizing: 'border-box',
          backgroundColor: '#FFFFFE',
          p: { xs: 1.5, sm: 2 },
          borderRadius: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          aspectRatio: '1 / 1',
          width: '100%',
          maxWidth: '100%',
          minWidth: 0,
          flexShrink: 0,
          boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.02)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {isPlaceholder ? (
          <Box sx={{ textAlign: 'center', opacity: 0.15 }}>
            <QrCode2RoundedIcon sx={{ fontSize: { xs: 60, sm: 80, md: 100 } }} />
            <Typography
              variant="caption"
              sx={{ display: 'block', fontWeight: 800, mt: 1, letterSpacing: 1 }}
            >
              COMING SOON
            </Typography>
          </Box>
        ) : (
          <Box
            component="img"
            src={img}
            alt={title}
            sx={{
              display: 'block',
              boxSizing: 'border-box',
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              mixBlendMode: 'multiply',
            }}
          />
        )}
      </Box>
    </Paper>
  );

  const shellSx = {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    alignSelf: 'stretch',
    flex: '1 1 auto',
    width: '100%',
    height: '100%',
    minWidth: 0,
    maxWidth: '100%',
    // visible so Paper hover translateY is not clipped by the shell
    overflow: 'visible',
    color: 'inherit',
    textDecoration: 'none',
  } as const;

  if (!href) {
    return <Box sx={shellSx}>{card}</Box>;
  }

  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      underline="none"
      sx={shellSx}
    >
      {card}
    </Link>
  );
};
