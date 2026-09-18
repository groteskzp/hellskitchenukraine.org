import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
/* eslint-disable import/no-unresolved */
import { SwiperSlide } from 'swiper/react';

/* eslint-enable import/no-unresolved */
import { ImageComponent } from '../ImageComponent';
import SwiperSlider, { CONTINUOUS_SPEED } from '../Slider';

import styles from './styles.module.css';

interface PhotosGalleryProps {}

interface ContentItem {
  alt: string;
  src: string;
  srcMob: string;
  width: number;
  widthMob: number;
}

const content: ContentItem[] = [
  {
    alt: 'flag',
    src: 'images/photosGallery/web/Slideshow01.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow01.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-02',
    src: 'images/photosGallery/web/Slideshow02.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow02.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-03',
    src: 'images/photosGallery/web/Slideshow03.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow03.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-04',
    src: 'images/photosGallery/web/Slideshow04.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow04.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-05',
    src: 'images/photosGallery/web/Slideshow05.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow05.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-06',
    src: 'images/photosGallery/web/Slideshow06.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow06.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-07',
    src: 'images/photosGallery/web/Slideshow07.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow07.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-08',
    src: 'images/photosGallery/web/Slideshow08.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow08.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-09',
    src: 'images/photosGallery/web/Slideshow09.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow09.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-10',
    src: 'images/photosGallery/web/Slideshow10.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow10.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-11',
    src: 'images/photosGallery/web/Slideshow11.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow11.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-12',
    src: 'images/photosGallery/web/Slideshow12.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow12.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-13',
    src: 'images/photosGallery/web/Slideshow13.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow13.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-14',
    src: 'images/photosGallery/web/Slideshow14.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow14.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-15',
    src: 'images/photosGallery/web/Slideshow15.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow15.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-16',
    src: 'images/photosGallery/web/Slideshow16.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow16.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'gallery-17',
    src: 'images/photosGallery/web/Slideshow17.jpg',
    srcMob: 'images/photosGallery/mob/Slideshow17.jpg',
    width: 468,
    widthMob: 258,
  },
];

export const PhotosGallery: React.FC<PhotosGalleryProps> = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const slideHeight = isDesktop ? 320 : 186;
  const overlapMargin = isDesktop ? '-160px' : '-94px';

  return (
    <Box className={styles.gallery} style={{ margin: `${overlapMargin} 0` }}>
      <SwiperSlider
        className={styles.slider}
        continuous
        loop
        slidesPerView="auto"
        spaceBetween={20}
        speed={CONTINUOUS_SPEED}
      >
        {content.map(({ alt, src, srcMob, width, widthMob }) => {
          const slideWidth = isDesktop ? width : widthMob;

          return (
            <SwiperSlide
              key={src}
              className={styles.slide}
              style={{ width: slideWidth }}
            >
              <Box
                style={{
                  height: slideHeight,
                  position: 'relative',
                  width: slideWidth,
                }}
              >
                <ImageComponent
                  alt={alt}
                  className={styles.slideImage}
                  src={isDesktop ? src : srcMob}
                  style={{
                    height: 'calc(100% - 20px)',
                  }}
                  withBorder
                />
              </Box>
            </SwiperSlide>
          );
        })}
      </SwiperSlider>
    </Box>
  );
};
