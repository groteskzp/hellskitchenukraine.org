import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ImageComponent } from '../ImageComponent';

interface PartnerSectionProps {}

interface contentItem {
  alt: string;
  src: string;
  srcMob: string;
  link: string;
}

export const PartnerSection: React.FC<PartnerSectionProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  const imagesPath = '/images/partnersSection';

  const content: contentItem[] = [
    {
      alt: 'NOVA Ukraine logo',
      src: `${imagesPath}/web/novaUkraine.png`,
      srcMob: `${imagesPath}/mob/novaUkraine.png`,
      link: `https://novaukraine.org/`,
    },
    {
      alt: 'World Central Kitchen logo',
      src: `${imagesPath}/web/worldCentralKitchen.png`,
      srcMob: `${imagesPath}/mob/worldCentralKitchen.png`,
      link: `https://wck.org/`,
    },
    {
      alt: 'Lion defence team logo',
      src: `${imagesPath}/web/lion.png`,
      srcMob: `${imagesPath}/mob/lion.png`,
      link: `https://liondefenceteam.com/`,
    },
    // {
    //   alt: 'Steglitz-Zehlendorf',
    //   src: `${imagesPath}/web/Steglitz-Zehlendorf.png`,
    //   srcMob: `${imagesPath}/mob/Steglitz-Zehlendorf.png`,
    // },
     {
      alt: 'Нова Пошта',
      src: `${imagesPath}/web/nova_poshta_logo.png`,
      srcMob: `${imagesPath}/mob/nova_poshta_logo.png`,
      link: `https://humanitarian.novaposhta.ua/`,
    },   {
      alt: 'Приправка',
      src: `${imagesPath}/web/Pripravka-Logо.png`,
      srcMob: `${imagesPath}/mob/Pripravka-Logо.png`,
      link: `https://pripravka.ua/uk`,
    },  
    {
      alt: 'XENIA Association ',
      src: `${imagesPath}/web/XENIA-Assiciation.png`,
      srcMob: `${imagesPath}/mob/XENIA-Assiciation.png`,
      link: `https://xeniaassociation.wordpress.com/`,
    },
        {
      alt: 'БФ "Крила Надії"',
      src: `${imagesPath}/web/krylanadiyi.png`,
      srcMob: `${imagesPath}/mob/krylanadiyi.png`,
      link: `https://krylanadiyi.org.ua/`,
    },     {
      alt: 'Аврора',
      src: `${imagesPath}/web/logo_Avrora.png`,
      srcMob: `${imagesPath}/mob/logo_Avrora.png`,
      link: `https://avrora.ua/`,
    },    
    {
      alt: 'Харківські Дріжджі (БАЛЄКС)',
      src: `${imagesPath}/web/kharkiv_yeast.jpg`,
      srcMob: `${imagesPath}/mob/kharkiv_yeast.jpg`,
      link: `https://www.instagram.com/kharkiv_yeast/`,
    },      
    {
      alt: 'ГО "Майстерня Добрих Справ"',
      src: `${imagesPath}/web/maisterniadobryhsprav.png`,
      srcMob: `${imagesPath}/mob/maisterniadobryhsprav.png`,
      link: `https://www.instagram.com/maisterniadobryhsprav/`,
    },  
    {
      alt: 'Austrian Embassy Kyiv',
      src: `${imagesPath}/web/austriainua.png`,
      srcMob: `${imagesPath}/mob/austriainua.png`,
      link: `https://www.instagram.com/austriainua/`,
    }, 
    {
      alt: 'Steglitz-Zehlendorf',
      src: `${imagesPath}/web/de.png`,
      srcMob: `${imagesPath}/mob/de.png`,
      link: `https://www.berlin.de/ba-steglitz-zehlendorf/politik-und-verwaltung/beauftragte/partnerstaedte/artikel.1474356.php`,
    },
  ];

  const gridsSx = { mb: { xs: 5, md: 10 } };

  const renderLogos = () =>
    content.map((item) => (
      <Grid item xs={6} sm={3} md={2.3} key={item.src} sx={gridsSx}>
        <ImageComponent
          alt={item.alt}
          src={isTablet ? item.src : item.srcMob}
          lnk={item.link}
        />
      </Grid>
    ));

  return (
    <Box
      style={{ backgroundColor: theme.palette.lightBlue }}
      sx={{ pt: { xs: 8, md: 15 }, pb: { xs: 28, md: 29, xl: 32 } }}
    >
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: { md: 'space-between' } }}
        >
          <Grid item xs={12} sx={gridsSx}>
            <Typography variant="h2">
              {t('homePage.partnersSection.title')}
            </Typography>
          </Grid>
          {renderLogos()}
        </Grid>
      </Container>
    </Box>
  );
};
