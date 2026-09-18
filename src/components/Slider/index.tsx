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
} from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import classnames from 'classnames';
import SwiperCore from 'swiper';
/* eslint-disable import/no-unresolved */
import { A11y, Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { AutoplayOptions } from 'swiper/types/modules/autoplay';
import { FreeModeOptions } from 'swiper/types/modules/free-mode';
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

/** After click/pointer/touch pause, resume continuous autoplay. */
const INTERACTION_RESUME_MS = 3000;

/** Nudge distance for continuous freeMode arrows (keeps ribbon smooth, still responds). */
const CONTINUOUS_NUDGE_MS = 450;

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
  const swiperRef: MutableRefObject<SwiperCore | null> = useRef(null);
  const resumeTimerRef = useRef<number | null>(null);
  const theme: Theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const clearResumeTimer = () => {
    if (resumeTimerRef.current != null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const pauseAndScheduleResume = () => {
    if (!continuous) return;
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;

    swiper.autoplay.pause();
    clearResumeTimer();
    resumeTimerRef.current = window.setTimeout(() => {
      swiperRef.current?.autoplay?.resume();
      resumeTimerRef.current = null;
    }, INTERACTION_RESUME_MS);
  };

  useEffect(() => () => clearResumeTimer(), []);

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

    if (pagination) {
      modules.push(Pagination);
    }

    return modules;
  }, [autoplayOptions, freeModeOptions, pagination]);

  const paginationOptions: PaginationOptions | undefined = pagination
    ? {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-custom-bullet',
        bulletActiveClass: 'swiper-custom-bullet-active',
      }
    : undefined;

  const swiperSpeed = speed ?? (continuous ? CONTINUOUS_SPEED : 800);

  const nudgeContinuous = (direction: 1 | -1) => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const space =
      typeof swiper.params.spaceBetween === 'number'
        ? swiper.params.spaceBetween
        : 0;
    const activeSize = swiper.slidesSizesGrid?.[swiper.activeIndex] ?? 0;
    const delta =
      activeSize > 0
        ? activeSize + space
        : Math.max(swiper.width * 0.75, 160);

    swiper.autoplay?.pause();
    swiper.setTransition(CONTINUOUS_NUDGE_MS);
    swiper.setTranslate(swiper.getTranslate() - direction * delta);
    swiper.updateProgress();
    swiper.updateActiveIndex();
    if (swiper.params.loop) {
      swiper.loopFix();
    }

    window.setTimeout(() => {
      swiper.autoplay?.resume();
    }, CONTINUOUS_NUDGE_MS + 50);
  };

  const handlePrev = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (continuous) {
      nudgeContinuous(-1);
      return;
    }
    swiperRef.current?.slidePrev();
  };

  const handleNext = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (continuous) {
      nudgeContinuous(1);
      return;
    }
    swiperRef.current?.slideNext();
  };

  const navButtonStyle = {
    color: theme.palette.icon,
    border: `2px solid ${theme.palette.icon}`,
    borderRadius: '10px',
    padding: isMobile ? '16px' : '14px',
    minWidth: isMobile ? 48 : undefined,
    minHeight: isMobile ? 48 : undefined,
    position: 'relative' as const,
    zIndex: 3,
    pointerEvents: 'auto' as const,
    touchAction: 'manipulation' as const,
    WebkitTapHighlightColor: 'transparent',
  };

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
                onClick={handlePrev}
                type="button"
                style={{
                  ...navButtonStyle,
                  marginRight: '24px',
                }}
              >
                <ArrowBack />
              </IconButton>
              <IconButton
                aria-label="next"
                onClick={handleNext}
                type="button"
                style={navButtonStyle}
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
        onClick={continuous ? pauseAndScheduleResume : undefined}
        onSwiper={(swiper: SwiperCore) => {
          swiperRef.current = swiper;
        }}
        onTouchEnd={continuous ? pauseAndScheduleResume : undefined}
        onTouchStart={continuous ? pauseAndScheduleResume : undefined}
        pagination={paginationOptions}
        slidesPerView={slidesPerView || 'auto'}
        spaceBetween={spaceBetween || 0}
        speed={swiperSpeed}
        touchStartPreventDefault={false}
        watchOverflow={false}
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
