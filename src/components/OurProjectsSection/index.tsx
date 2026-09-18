import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { ImageCard } from '../ImageCard';

interface OurProjectSectionProps {}

interface CardContent {
  imageUrl: string;
  localizationPath: string;
}

const cardContent: CardContent[] = [
  {
    imageUrl: '/images/ourProjectsSection/card1.jpg',
    localizationPath: 'homePage.ourProjects.card1',
  },
  {
    imageUrl: '/images/ourProjectsSection/card2.jpg',
    localizationPath: 'homePage.ourProjects.card2',
  },
  {
    imageUrl: '/images/ourProjectsSection/card3.jpg',
    localizationPath: 'homePage.ourProjects.card3',
  },
];

export const OurProjectSection: React.FC<OurProjectSectionProps> = () => {
  const { t } = useTranslation();
  const theme: Theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const getTitleVariant = () => {
    if (isDesktop) return 'h1';

    return 'h2';
  };

  const renderCard: FC<CardContent> = ({
    imageUrl,
    localizationPath,
  }: CardContent) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={t(`${localizationPath}.title`)}
      sx={{ display: 'flex' }}
    >
      <Box
        sx={{
          borderRadius: '10px',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <ImageCard
          buttonText={t(`${localizationPath}.buttonText`)}
          imageUrl={imageUrl}
          title={t(`${localizationPath}.title`)}
          text={t(`${localizationPath}.copy`)}
          withIndent
        />
      </Box>
    </Grid>
  );

  return (
    <Box sx={{ py: 15 }} style={{ background: theme.palette.blueGradient }}>
      <Container maxWidth="lg" style={{ overflow: 'hidden' }}>
        <Typography gutterBottom sx={{ mb: 5 }} variant={getTitleVariant()}>
          {t('homePage.ourProjects.projectsSectionTitle')}
        </Typography>
        <Grid container spacing={2} alignItems="stretch">
          {cardContent.map(renderCard)}
        </Grid>
      </Container>
    </Box>
  );
};
