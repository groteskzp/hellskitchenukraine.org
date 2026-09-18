import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Theme, useTheme } from '@mui/material';
/* eslint-disable import/no-unresolved */
import { SwiperSlide } from 'swiper/react';

/* eslint-enable import/no-unresolved */
import SwiperSlider from '../Slider';

import styles from './styles.module.css';

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
  const theme: Theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 10, md: 20 },
        mb: { xs: 6, md: 10 },
        overflow: 'hidden',
        pb: { xs: 2, md: 0 },
      }}
    >
      <SwiperSlider
        breakpoints={{
          [theme.breakpoints.values.xs]: {
            slidesPerView: 1,
          },
          [theme.breakpoints.values.sm]: {
            slidesPerView: 1.2,
          },
          [theme.breakpoints.values.md]: {
            slidesPerView: 2,
          },
          [theme.breakpoints.values.lg]: {
            slidesPerView: 2.5,
          },
        }}
        className={styles.slider}
        loop
        navigation
        spaceBetween={24}
        title={t('homePage.mediaSection.title')}
      >
        {mediaVideos.map((video) => (
          <SwiperSlide key={video.title} className={styles.slide}>
            <Box className={styles.videoFrame}>
              <Box
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                component="iframe"
                frameBorder={0}
                loading="lazy"
                src={video.embedUrl}
                title={video.title}
              />
            </Box>
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </Container>
  );
};
