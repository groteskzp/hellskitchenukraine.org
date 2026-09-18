import React from 'react';
import { Box, Stack } from '@mui/material';

import { DonateForm } from './DonateForm';
import { DonateQrBlock } from './DonateQrBlock';

/** Match WayForPay form width so Privat QR aligns consistently. */
const DONATE_COLUMN_MAX_WIDTH = 420;

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
          maxWidth: DONATE_COLUMN_MAX_WIDTH,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <DonateForm />
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: DONATE_COLUMN_MAX_WIDTH,
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
