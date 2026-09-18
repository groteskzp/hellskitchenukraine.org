import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

import { AboutUsSection } from '../../components/AboutUsSection';
import { BannerSectionJoin } from '../../components/BannerSectionJoin';
import { DonateSection } from '../../components/DonateSection';
import { HelpSection } from '../../components/HelpSection';
import { HPMainSection } from '../../components/HPMainSection';
import { MediaContent } from '../../components/MediaContent';
// import { NewsSection } from '../../components/NewsSection';
import { OurProjectSection } from '../../components/OurProjectsSection';
import { PartnerSection } from '../../components/PartnersSection';
import { PhotosGallery } from '../../components/PhotosGallery';
import { ResultsSection } from '../../components/ResultsSection';
import { withHeaderFooter } from '../../hoc/withHeaderFooter';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <HPMainSection />
      <PhotosGallery />
      <AboutUsSection
        alt="About us"
        buttonText={t('homePage.aboutUs.buttonText')}
        copies={[t('homePage.aboutUs.copy'), t('homePage.aboutUs.copy2')]}
        imagePath="/images/aboutUsSection/web/photo_team.jpg"
        imageMobPath="/images/aboutUsSection/mob/photo_team.jpg"
        label={t('homePage.aboutUs.label')}
        title={t('homePage.aboutUs.title')}
      />
      <OurProjectSection />
      <ResultsSection />
      <PartnerSection />
      <BannerSectionJoin
        imageMobPath="images/bannerSection/mob/window.jpg"
        imagePath="images/bannerSection/web/window.jpg"
        localizationPath="homePage.bannerSection.section1"
      />
      <MediaContent />
      <HelpSection />
      {/* <NewsSection /> */}
      <BannerSectionJoin
        imageMobPath="images/bannerSection/mob/emblem.jpg"
        imagePath="images/bannerSection/web/emblem.jpg"
        localizationPath="homePage.bannerSection.section2"
      />
      <Box sx={{ pt: 38 }} />
      <DonateSection />
    </>
  );
};

export default withHeaderFooter(HomePage);
