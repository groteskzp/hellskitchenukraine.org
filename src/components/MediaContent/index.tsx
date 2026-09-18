import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import MediaDesk from '../MediaDesk';

interface MediaContent {
  alt: string;
  imageUrl: string;
  lnk?: string;
  withBorderBLRadius?: boolean;
  withBorderBRRadius?: boolean;
  withBorderTLRadius?: boolean;
  withBorderTRRadius?: boolean;
}

export const MediaContent: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down(540));
  const isSmallTablet = useMediaQuery(theme.breakpoints.between(540, 709));
  const isTablet = useMediaQuery(theme.breakpoints.between(709, 894));
  const isLargeTablet = useMediaQuery(theme.breakpoints.between(894, 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.between('md', 1228));
  const isBigDesktop = useMediaQuery(theme.breakpoints.between(1228, 'lg'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  // Outer-corner radii for the 8-logo grid after removing logos without links.
  // Approx columns: mobile 2, smallTablet 3, tablet/desktop/lg 4, largeTablet/bigDesktop 5.
  const mediaContents: MediaContent[] = [
    {
      alt: 'Накипіло',
      imageUrl: '/images/media/Nakypilo.png',
      withBorderTLRadius: true,
      lnk: 'https://nakypilo.ua/foto/vid-pryhotuvannia-yizhi-do-zabyvannia-vikon-pekelne-volonterstvo-v-kharkovi/',
    },
    {
      alt: 'Kharkiv Today',
      imageUrl: '/images/media/Kharkiv_today.png',
      withBorderTRRadius: isMobile,
      lnk: 'https://2day.kh.ua/ua',
    },
    {
      alt: 'TVP info',
      imageUrl: '/images/media/tvp_info.png',
      withBorderTRRadius: isSmallTablet,
      lnk: 'https://www.youtube.com/watch?v=rNza1XUjbK4',
    },
    {
      alt: 'AHT',
      imageUrl: '/images/media/AHT.png',
      withBorderTRRadius: isTablet || isDesktop || isLarge,
      lnk: 'https://www.youtube.com/watch?v=Eii4EB5TyIs',
    },
    {
      alt: 'Berlin',
      imageUrl: '/images/media/Berlin.png',
      withBorderTRRadius: isLargeTablet || isBigDesktop,
      withBorderBLRadius: isTablet || isDesktop || isLarge,
      lnk: 'https://www.berlin.de/ba-steglitz-zehlendorf/politik-und-verwaltung/beauftragte/partnerstaedte/artikel.1474356.php',
    },
    {
      alt: 'Media TCH',
      imageUrl: '/images/media/tch.png',
      withBorderBLRadius: isLargeTablet || isBigDesktop,
      lnk: 'https://tsn.ua/video/video-novini/goduyut-lyudey-iz-pershiy-obstriliv-yak-pekelna-kuhnya-u-harkovi-ryatuye-viyskovih-ditey-i-poranenih.html',
    },
    {
      alt: 'Media Suspilne Kharkiv',
      imageUrl: '/images/media/suspilne_kharkiv.png',
      withBorderBLRadius: isMobile || isSmallTablet,
      lnk: 'https://suspilne.media/kharkiv/298630-pekelna-kuhna-ak-harkivski-volonteri-gotuut-dla-medikiv-ta-vijskovih/',
    },
    {
      alt: 'Media Freedom',
      imageUrl: '/images/media/freedom.png',
      withBorderBRRadius: true,
      lnk: 'https://uatv.ua/uk/pekelna-kuhnya-u-harkovi-z-pershogo-dnya-vijny-volontery-gotuyut-dlya-ukrayinskyh-vijskovyh-video/',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 40, mb: 20 }}>
      <Grid container>
        <Grid item xs={12} lg={4}>
          <Typography variant="h2" sx={{ mb: { xs: 5, md: 10 } }}>
            {t('homePage.mediaSection.title')}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Grid container sx={{ ml: 0.25, mt: 0.25, pr: { xs: 0.1, sm: 0 } }}>
            {mediaContents.map((media) => (
              <Grid item key={media.alt}>
                <MediaDesk
                  alt={media.alt}
                  imageUrl={media.imageUrl}
                  withBorderBLRadius={media.withBorderBLRadius}
                  withBorderBRRadius={media.withBorderBRRadius}
                  withBorderTLRadius={media.withBorderTLRadius}
                  withBorderTRRadius={media.withBorderTRRadius}
                  lnk={media.lnk}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
