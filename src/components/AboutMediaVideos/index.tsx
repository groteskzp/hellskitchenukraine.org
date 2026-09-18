import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Typography } from '@mui/material';

interface MediaVideo {
  embedUrl: string;
  title: string;
}

const mediaVideos: MediaVideo[] = [
  {
    title: 'TVP info',
    embedUrl: 'https://www.youtube.com/embed/rNza1XUjbK4',
  },
  {
    title: 'AHT',
    embedUrl: 'https://www.youtube.com/embed/Eii4EB5TyIs',
  },
  {
    title: 'ТСН',
    embedUrl:
      'https://1plus1.video/video/embed/L28mfQ4C?logo=tsn&l=ua&autoplay=0&tl=false&to=true',
  },
];

export const AboutMediaVideos: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 10, md: 20 }, mb: 10 }}>
      <Typography variant="h2" sx={{ mb: { xs: 5, md: 8 } }}>
        {t('homePage.mediaSection.title')}
      </Typography>
      <Grid container spacing={3}>
        {mediaVideos.map((video) => (
          <Grid item key={video.title} xs={12} md={6} lg={4}>
            <Box
              sx={{
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative',
                pt: '56.25%',
                width: '100%',
              }}
            >
              <Box
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                component="iframe"
                frameBorder={0}
                loading="lazy"
                src={video.embedUrl}
                title={video.title}
                sx={{
                  border: 0,
                  height: '100%',
                  left: 0,
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
