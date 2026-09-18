import React from 'react';
import { Box, CardMedia, useMediaQuery, useTheme } from '@mui/material';

interface MediaDeskProps {
  alt: string;
  imageUrl: string;
  withBorderBLRadius?: boolean;
  withBorderBRRadius?: boolean;
  withBorderTLRadius?: boolean;
  withBorderTRRadius?: boolean;
  /** Standalone card (swiper slide): all corners rounded, no grid overlap. */
  standalone?: boolean;
  lnk?: string;
}

const MediaDesk: React.FC<MediaDeskProps> = ({
  alt,
  imageUrl,
  withBorderBLRadius,
  withBorderBRRadius,
  withBorderTLRadius,
  withBorderTRRadius,
  standalone,
  lnk,
}) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  const borderStyle = `2px solid ${theme.palette.gray}`;
  const borderRadius = '10px';

  const getWidth = () => {
    if (isLarge) return '210px';

    if (isDesktop) return '234px';

    return '167px';
  };

  const radius = (flag?: boolean) =>
    standalone || flag ? borderRadius : 0;

  return (
    <Box
      sx={{
        border: borderStyle,
        borderBottomLeftRadius: radius(withBorderBLRadius),
        borderBottomRightRadius: radius(withBorderBRRadius),
        borderTopLeftRadius: radius(withBorderTLRadius),
        borderTopRightRadius: radius(withBorderTRRadius),
        height: isDesktop ? '160px' : '104px',
        marginLeft: standalone ? 0 : -0.25,
        marginTop: standalone ? 0 : -0.25,
        overflow: 'hidden',
        position: 'relative',
        width: getWidth(),
      }}
    >
      <a href={lnk} target="_blank" rel="noopener noreferrer">
        <CardMedia
          alt={alt}
          component="img"
          image={imageUrl}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isDesktop ? '178px' : '122px',
            height: '56px',
            objectFit: 'cover',
          }}
        />
      </a>
    </Box>
  );
};

export default MediaDesk;
