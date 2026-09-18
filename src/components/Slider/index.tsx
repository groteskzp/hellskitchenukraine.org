// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  MutableRefObject,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { IconButton, Theme, Typography, useTheme } from '@mui/material';
import classnames from 'classnames';
import SwiperCore from 'swiper';
/* eslint-disable import/no-unresolved */
import { A11y, Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { AutoplayOptions } from 'swiper/types/modules/autoplay';
import { FreeModeOptions } from 'swiper/types/modules/free-mode';
import { NavigationOptions } from 'swiper/types/modules/navigation';
import { PaginationOptions } from 'swiper/types/modules/pagination';
import { SwiperModule } from 'swiper/types/shared';
import { SwiperOptions } from 'swiper/types/swiper-options';

import 'swiper/css';
/* eslint-enable import/no-unresolved */
import styles from './styles.module.css';

SwiperCore.use([A11y]);

const DEFAULT_AUTOPLAY: AutoplayOptions = {
  delay: 2800,
  disableOnInteraction: true,
  pauseOnMouseEnter: true,
};

/** Continuous ribbon: freeMode + delay 0 + linear easing (no discrete slide jumps). */
export const CONTINUOUS_AUTOPLAY: AutoplayOptions = {
  delay: 0,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};

export const CONTINUOUS_FREE_MODE: FreeModeOptions = {
  enabled: true,
  momentum: false,
};

export const CONTINUOUS_SPEED = 6000;

export interface SwiperSliderProps {
  initialSlide?: number;
  navigation?: boolean;
  children?: ReactNode;
  title?: ReactNode;
  slidesPerView?: number | 'auto';
  loop?: boolean;
  freeMode?: boolean | FreeModeOptions;
  autoplay?: boolean | AutoplayOptions;
  breakpoints?: SwiperOptions['breakpoints'];
  pagination?: boolean;
  className?: string;
  spaceBetween?: number;
  /** Transition duration in ms. Use ~6000 with continuous autoplay for a smooth ribbon. */
  speed?: number;
  /** freeMode + linear wrapper easing for infinite continuous scroll. */
  continuous?: boolean;
}
export const SwiperSlider: FC<SwiperSliderProps> = ({
  initialSlide,
  breakpoints,
  navigation,
  pagination,
  slidesPerView,
  spaceBetween,
  title,
  loop,
  freeMode,
  autoplay,
  children,
  className,
  speed,
  continuous,
}: SwiperSliderProps) => {
  const [pendingRefInit, setPendingRefInit] = useState(true);
  const nextEl: MutableRefObject<HTMLButtonElement | null> = useRef(null);
  const prevEl: MutableRefObject<HTMLButtonElement | null> = useRef(null);
  const theme: Theme = useTheme();

  useEffect(() => {
    if (pendingRefInit) {
      setPendingRefInit(false);
    }
  }, [pendingRefInit]);

  const autoplayOptions: AutoplayOptions | undefined = useMemo(() => {
    if (continuous) {
      if (autoplay === false) return undefined;
      if (autoplay && typeof autoplay === 'object') {
        return { ...CONTINUOUS_AUTOPLAY, ...autoplay };
      }
      return CONTINUOUS_AUTOPLAY;
    }
    if (!autoplay) return undefined;
    if (autoplay === true) return DEFAULT_AUTOPLAY;

    return { ...DEFAULT_AUTOPLAY, ...autoplay };
  }, [autoplay, continuous]);

  const freeModeOptions: boolean | FreeModeOptions | undefined = useMemo(() => {
    if (continuous) {
      if (freeMode && typeof freeMode === 'object') {
        return { ...CONTINUOUS_FREE_MODE, ...freeMode };
      }
      return CONTINUOUS_FREE_MODE;
    }
    return freeMode;
  }, [continuous, freeMode]);

  const modules: SwiperModule[] = useMemo(() => {
    const modules: SwiperModule[] = [];

    if (autoplayOptions) {
      modules.push(Autoplay);
    }

    if (freeModeOptions) {
      modules.push(FreeMode);
    }

    if (navigation) {
      modules.push(Navigation);
    }

    if (pagination) {
      modules.push(Pagination);
    }

    return modules;
  }, [autoplayOptions, freeModeOptions, navigation, pagination]);

  const navigationOptions: NavigationOptions | undefined = navigation
    ? {
        nextEl: nextEl.current,
        prevEl: prevEl.current,
        lockClass: 'locked',
      }
    : undefined;

  const paginationOptions: PaginationOptions | undefined = pagination
    ? {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-custom-bullet',
        bulletActiveClass: 'swiper-custom-bullet-active',
      }
    : undefined;

  const swiperSpeed = speed ?? (continuous ? CONTINUOUS_SPEED : 800);

  return (
    <div
      className={classnames(
        styles.wrapper,
        continuous && styles.continuous,
        className,
      )}
    >
      {(navigation || title) && (
        <div className={styles.header}>
          {title && <Typography variant="h2">{title}</Typography>}
          {navigation && (
            <div className={styles.navigation}>
              <IconButton
                aria-label="previous"
                ref={prevEl}
                style={{
                  color: theme.palette.icon,
                  border: `2px solid ${theme.palette.icon}`,
                  borderRadius: '10px',
                  marginRight: '24px',
                  padding: '14px',
                }}
              >
                <ArrowBack />
              </IconButton>
              <IconButton
                aria-label="next"
                ref={nextEl}
                style={{
                  color: theme.palette.icon,
                  border: `2px solid ${theme.palette.icon}`,
                  borderRadius: '10px',
                  padding: '14px',
                }}
              >
                <ArrowForward />
              </IconButton>
            </div>
          )}
        </div>
      )}
      <Swiper
        autoplay={autoplayOptions}
        breakpoints={breakpoints}
        children={Children.map(children, (child: ReactNode) => {
          if (!isValidElement(child)) {
            throw new Error(`Swiper children can't be ${typeof child} type.`);
          }
          return cloneElement(child);
        })}
        className={styles.swiper}
        freeMode={freeModeOptions}
        initialSlide={initialSlide}
        loop={loop}
        modules={modules}
        navigation={navigationOptions}
        pagination={paginationOptions}
        slidesPerView={slidesPerView || 'auto'}
        spaceBetween={spaceBetween || 0}
        speed={swiperSpeed}
      />
      {pagination && (
        <div
          className={classnames(
            styles.paginationContainer,
            'swiper-pagination',
          )}
        />
      )}
    </div>
  );
};
export default SwiperSlider;
