import React from 'react';
import { Box } from '@mui/material';

import { AboutMediaVideos } from '../../components/AboutMediaVideos';
import { BannerSection } from '../../components/BannerSection';
import { DonateSection } from '../../components/DonateSection';
import { withHeaderFooter } from '../../hoc/withHeaderFooter';

interface ProjectsProps {
  isBlue?: boolean;
}

const Projects: React.FC<ProjectsProps> = () => (
  <>
    <AboutMediaVideos />
    <Box sx={{ pt: 20, pb: 30 }}>
      <BannerSection
        imageMobPath="images/bannerSection/mob/emblem.jpg"
        imagePath="images/bannerSection/web/emblem.jpg"
        localizationPath="homePage.bannerSection.section2"
      />
    </Box>
    <DonateSection />
  </>
);

export default withHeaderFooter(Projects);
