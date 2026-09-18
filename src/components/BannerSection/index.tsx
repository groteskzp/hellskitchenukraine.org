import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';

import { ButtonVariant } from '../ButtonComponent';
import {
  InfoComponent,
  InfoComponentSize,
  InfoComponentVariant,
} from '../InfoComponent';

interface BannerSectionProps {
  imageMobPath: string;
  imagePath: string;
  localizationPath: string;
}

export const BannerSection: React.FC<BannerSectionProps> = ({
  imageMobPath,
  imagePath,
  localizationPath,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobileOnly = useMediaQuery(theme.breakpoints.down(540));

  const getBoxStyle = () => {
    const styles: React.CSSProperties = {
      background: `${theme.palette.grayGradient}, url(${isDesktop ? imagePath : imageMobPath}) right center`,
      backgroundSize: 'cover',
      border: `10px solid ${theme.palette.white}`,
      overflow: 'hidden',
      margin: '0 auto',
    };
    if (isMobileOnly) {
      styles.borderLeftWidth = 0;
      styles.borderRightWidth = 0;
    }

    return styles;
  };

  const labelStyle = {
    backgroundColor: theme.palette.darkYellow,
    borderRadius: '0 0 4px 0',
    display: 'inline-block',
    padding: isDesktop ? '12px 16px' : '6px 8px',
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Container
        sx={{
          px: isMobileOnly ? 0 : undefined,
          position: 'relative',
        }}
      >
        <Box style={getBoxStyle()}>
          <Box style={labelStyle}>{t(`${localizationPath}.label`)}</Box>
          <Container sx={{ mt: 8 }}>
            <Grid
              alignItems="center"
              container
              justifyContent="center"
              spacing={2}
            >
              <Grid item xs={11} sx={{ mb: 3 }}>
                <InfoComponent
                  buttonText={t(`${localizationPath}.buttonText`)}
                  buttonVariant={ButtonVariant.yellow}
                  copies={[
                    t(`${localizationPath}.copy`),
                    t(`${localizationPath}.copy2`),
                  ]}
                  size={InfoComponentSize.medium}
                  title={t(`${localizationPath}.title`)}
                  variant={InfoComponentVariant.light}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};
