import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import classnames from 'classnames';
/* eslint-disable import/no-unresolved */
import { SwiperSlide } from 'swiper/react';

import { LINKS } from '../../assets/constants';
import { ButtonComponent, ButtonSize } from '../ButtonComponent';
import { IconSize } from '../IconComponent';
/* eslint-enable import/no-unresolved */
import { InfoComponent, InfoComponentSize } from '../InfoComponent';
import SwiperSlider from '../Slider';
import { SocialNavbar } from '../SocialNavbar';
import ResultContent from './ResultContent';
import { ResultsData } from './types';

import styles from './styles.module.css';

const results: ResultsData[] = [
  {
    data: '>1,7 млн',
    description: 'homePage.resultsSection.mealsPrepared',
    imageUrl: 'images/resultsSection/meals.png',
  },
  {
    data: '>1 млн ',
    description: 'homePage.resultsSection.peopleFed',
    imageUrl: 'images/resultsSection/people.png',
  },
  {
    data: '>65,8 млн. грн',
    description: 'homePage.resultsSection.projectCompleted',
    imageUrl: 'images/resultsSection/projects.png',
  },
];

export const ResultsSection: FC = () => {
  const { t } = useTranslation();
  const theme: Theme = useTheme();
  const isDesktop: boolean = useMediaQuery(theme.breakpoints.up('md'));
  const localizationPath: string = 'homePage.resultsSection';

  return (
    <Container
      maxWidth="lg"
      sx={{ py: isDesktop ? 16 : 8 }}
      style={{ overflow: 'hidden' }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4} sx={{ alignSelf: { lg: 'flex-start' } }}>
          <InfoComponent
            copies={[t(`${localizationPath}.seeInteresting`)]}
            title={t(`${localizationPath}.title`)}
            size={InfoComponentSize.big}
          />
          <SocialNavbar
            iconSize={IconSize.S40}
            instagramLink={LINKS.instagramLink}
            facebookLink={LINKS.facebookLink}
          />
        </Grid>
        <Grid item xs={0} lg={1} />
        <Grid item xs={12} lg={7}>
          {isDesktop ? (
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td className={styles.td} aria-label={results[0].data}>
                    <ResultContent
                      data={results[0].data}
                      description={results[0].description}
                      imageUrl={results[0].imageUrl}
                    />
                  </td>
                  <td className={styles.td} aria-label={results[1].data}>
                    <ResultContent
                      data={results[1].data}
                      description={results[1].description}
                      imageUrl={results[1].imageUrl}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={styles.td} aria-label={results[2].data}>
                    <ResultContent
                      data={results[2].data}
                      description={results[2].description}
                      imageUrl={results[2].imageUrl}
                    />
                  </td>
                  <td className={classnames(styles.td, styles.supportBlock)}>
                    <Typography paragraph variant="body1">
                      {t('homePage.resultsSection.joinInToHelp')}
                    </Typography>
                    <ButtonComponent
                      size={ButtonSize.large}
                      textButton={t(`${localizationPath}.supportBtn`)}
                      withRightArrow
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <SwiperSlider
              breakpoints={{
                [theme.breakpoints.values.xs]: {
                  slidesPerView: 1.3,
                },
                [theme.breakpoints.values.sm]: {
                  slidesPerView: 1.7,
                },
                [theme.breakpoints.values.md]: {
                  slidesPerView: 2.5,
                },
              }}
              loop
              initialSlide={1}
              pagination
              spaceBetween={0}
            >
              {results.map((result: ResultsData) => (
                <SwiperSlide key={result.data} className={styles.resultMobile}>
                  <Box>
                    <ResultContent {...result} />
                  </Box>
                </SwiperSlide>
              ))}
              <SwiperSlide key="support" className={styles.resultMobile}>
                <Box className={styles.supportBlockMobile}>
                  <Box>
                    <Typography paragraph variant="body1">
                      {t('homePage.resultsSection.joinInToHelp')}
                    </Typography>
                    <ButtonComponent
                      size={ButtonSize.large}
                      textButton={t(`${localizationPath}.supportBtn`)}
                      withRightArrow
                    />
                  </Box>
                </Box>
              </SwiperSlide>
            </SwiperSlider>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
export default ResultsSection;
