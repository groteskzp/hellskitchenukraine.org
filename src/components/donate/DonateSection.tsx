import React from 'react';
import { Box } from '@mui/material';

import { DonateForm } from './DonateForm';
import { DonateQrBlock } from './DonateQrBlock';

/** WayForPay form width; QR column matches on desktop side layout. */
const DONATE_FORM_MAX_WIDTH = 420;
const DONATE_QR_COL_MAX_WIDTH = 420;

export const DonateSection = () => (
  <Box
    sx={{
      py: { xs: 4, md: 10 },
      px: { xs: 0, sm: 2, md: 4 },
      maxWidth: { xs: '100%', md: 1400 },
      mx: 'auto',
      width: '100%',
      minWidth: 0,
      boxSizing: 'border-box',
      overflowX: 'hidden',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        justifyContent: 'center',
        gap: { xs: 4, md: 5 },
        width: '100%',
        maxWidth: '100%',
        minWidth: 0,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: DONATE_FORM_MAX_WIDTH },
          flex: { md: '1 1 0' },
          minWidth: 0,
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <DonateForm />
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', md: DONATE_QR_COL_MAX_WIDTH },
          flex: { md: '1 1 0' },
          minWidth: 0,
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'hidden',
        }}
      >
        <DonateQrBlock />
      </Box>
    </Box>
  </Box>
);
