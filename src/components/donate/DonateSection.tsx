import React from 'react';
import { Box, Stack } from '@mui/material';

import { DonateForm } from './DonateForm';
import { DonateQrBlock } from './DonateQrBlock';

/** Match WayForPay form width; QR row can widen for two cards on desktop. */
const DONATE_FORM_MAX_WIDTH = 420;
const DONATE_QR_MAX_WIDTH = { xs: '100%', md: 880 };

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
    <Stack
      spacing={{ xs: 4, md: 6 }}
      alignItems="center"
      sx={{
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
          minWidth: 0,
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          mx: 'auto',
        }}
      >
        <DonateForm />
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: DONATE_QR_MAX_WIDTH,
          minWidth: 0,
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          mx: 'auto',
          overflow: 'visible',
          py: 1,
        }}
      >
        <DonateQrBlock />
      </Box>
    </Stack>
  </Box>
);
