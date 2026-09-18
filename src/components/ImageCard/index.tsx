import React, { CSSProperties } from 'react';
import { Box, Paper, useMediaQuery, useTheme } from '@mui/material';

import { ImageComponent } from '../ImageComponent';
import { InfoComponent, InfoComponentSize } from '../InfoComponent';

interface ImageCardProps {
  buttonText?: string;
  title: string;
  imageUrl: string;
  text: string;
  withBorder?: boolean;
  withIndent?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  buttonText,
  imageUrl,
  text,
  title,
  withBorder,
  withIndent,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const getPaperStyle = () => {
    if (withBorder) {
      return {
        backgroundColor: 'transparent',
        marginBottom: '20px',
        position: 'relative',
      } as CSSProperties;
    }

    return undefined;
  };

  return (
    <Paper
      elevation={0}
      style={getPaperStyle()}
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        pb: 4,
      }}
    >
      <ImageComponent
        alt={title}
        src={imageUrl}
        style={{ height: isDesktop ? '340px' : '232px' }}
        withBorder={withBorder}
      />
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          px: withIndent ? 4 : 0,
          pt: 4,
        }}
      >
        <InfoComponent
          buttonText={buttonText}
          copies={[text]}
          title={title}
          size={InfoComponentSize.small}
        />
      </Box>
    </Paper>
  );
};
