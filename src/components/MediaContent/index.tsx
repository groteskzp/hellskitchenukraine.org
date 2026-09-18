import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Grid, Typography } from '@mui/material';
/* eslint-disable import/no-unresolved */
import { SwiperSlide } from 'swiper/react';

/* eslint-enable import/no-unresolved */
import MediaDesk from '../MediaDesk';
import SwiperSlider, { CONTINUOUS_SPEED } from '../Slider';

import styles from './styles.module.css';

interface MediaItem {
  alt: string;
  imageUrl: string;
  lnk: string;
}

const mediaContents: MediaItem[] = [
  {
    alt: 'Накипіло',
    imageUrl: '/images/media/Nakypilo.png',
    lnk: 'https://nakypilo.ua/foto/vid-pryhotuvannia-yizhi-do-zabyvannia-vikon-pekelne-volonterstvo-v-kharkovi/',
  },
  {
    alt: 'Kharkiv Today',
    imageUrl: '/images/media/Kharkiv_today.png',
    lnk: 'https://2day.kh.ua/ua',
  },
  {
    alt: 'TVP info',
    imageUrl: '/images/media/tvp_info.png',
    lnk: 'https://www.youtube.com/watch?v=rNza1XUjbK4',
  },
  {
    alt: 'AHT',
    imageUrl: '/images/media/AHT.png',
    lnk: 'https://www.youtube.com/watch?v=Eii4EB5TyIs',
  },
  {
    alt: 'Berlin',
    imageUrl: '/images/media/Berlin.png',
    lnk: 'https://www.berlin.de/ba-steglitz-zehlendorf/politik-und-verwaltung/beauftragte/partnerstaedte/artikel.1474356.php',
  },
  {
    alt: 'Media TCH',
    imageUrl: '/images/media/tch.png',
    lnk: 'https://tsn.ua/video/video-novini/goduyut-lyudey-iz-pershiy-obstriliv-yak-pekelna-kuhnya-u-harkovi-ryatuye-viyskovih-ditey-i-poranenih.html',
  },
  {
    alt: 'Media Suspilne Kharkiv',
    imageUrl: '/images/media/suspilne_kharkiv.png',
    lnk: 'https://suspilne.media/kharkiv/298630-pekelna-kuhna-ak-harkivski-volonteri-gotuut-dla-medikiv-ta-vijskovih/',
  },
  {
    alt: 'Media Freedom',
    imageUrl: '/images/media/freedom.png',
    lnk: 'https://uatv.ua/uk/pekelna-kuhnya-u-harkovi-z-pershogo-dnya-vijny-volontery-gotuyut-dlya-ukrayinskyh-vijskovyh-video/',
  },
];

export const MediaContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ mt: 40, mb: 20 }}>
      <Grid container>
        <Grid item xs={12} lg={4}>
          <Typography variant="h2" sx={{ mb: { xs: 5, md: 10 } }}>
            {t('homePage.mediaSection.title')}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={8} className={styles.sliderCol}>
          <SwiperSlider
            className={styles.slider}
            continuous
            loop
            navigation
            slidesPerView="auto"
            spaceBetween={12}
            speed={CONTINUOUS_SPEED}
          >
            {mediaContents.map((media) => (
              <SwiperSlide key={media.alt} className={styles.slide}>
                <MediaDesk
                  alt={media.alt}
                  imageUrl={media.imageUrl}
                  lnk={media.lnk}
                  standalone
                />
              </SwiperSlide>
            ))}
          </SwiperSlider>
        </Grid>
      </Grid>
    </Container>
  );
};
