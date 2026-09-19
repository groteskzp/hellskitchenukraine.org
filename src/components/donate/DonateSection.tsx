import React from 'react';
import { Box, Stack } from '@mui/material';

import { DonateForm } from './DonateForm';
import { DonateQrBlock } from './DonateQrBlock';

/** Match WayForPay form width; QR row can widen for two cards. */
const DONATE_FORM_MAX_WIDTH = 420;
const DONATE_QR_MAX_WIDTH = { xs: 420, md: 880 };

export const DonateSection = () => (
  <Box
    sx={{
      py: { xs: 4, md: 10 },
      px: { xs: 1.5, sm: 4 },
      maxWidth: 1400,
      mx: 'auto',
      width: '100%',
    }}
  >
    <Stack
      spacing={{ xs: 4, md: 6 }}
      alignItems="center"
      sx={{ width: '100%' }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: DONATE_FORM_MAX_WIDTH,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <DonateForm />
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: DONATE_QR_MAX_WIDTH,
          display: 'flex',
          justifyContent: 'center',
          mx: 'auto',
        }}
      >
        <DonateQrBlock />
      </Box>
    </Stack>
  </Box>
);
