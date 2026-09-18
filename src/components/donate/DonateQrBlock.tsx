import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

import { QrCard } from './QrCard';

/** NBU payment QR payload from `public/qr/privat.png` (same target as scanning). */
const PRIVAT_PAYMENT_URL =
  'https://bank.gov.ua/qr/QkNECjAwMgoyClVDVAoKwc4gwdQgz8XKxcvczcAgytPVzd8KVUEzNDMwNTI5OTAwMDAwMjYwMDkwNDU5MTI5NzUKVUFICjQ0NjYyMDMwCgoKCg==';

export const DonateQrBlock = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 420,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 4 },
          textAlign: 'center',
          fontWeight: 800,
          fontSize: { xs: '1.75rem', md: '2.125rem' },
          width: '100%',
        }}
      >
        {t('donatePage.qr.title')}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <QrCard
          href={PRIVAT_PAYMENT_URL}
          img="/qr/privat.png"
          title={t('donatePage.qr.privat')}
        />
      </Box>
    </Box>
  );
};
