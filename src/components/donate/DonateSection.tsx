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
        // Wider horizontal separation so form and QR column do not feel stuck together
        gap: { xs: 4, md: 10 },
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
          // Drop form so its top lines up with QR cards (below the QR section title)
          pt: { xs: 0, md: 8 },
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
