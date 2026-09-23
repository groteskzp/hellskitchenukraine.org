import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

import { QrCard } from './QrCard';

/** NBU payment QR payload from `public/qr/privat.png` (same target as scanning). */
const PRIVAT_PAYMENT_URL =
  'https://bank.gov.ua/qr/QkNECjAwMgoyClVDVAoKwc4gwdQgz8XKxcvczcAgytPVzd8KVUEzNDMwNTI5OTAwMDAwMjYwMDkwNDU5MTI5NzUKVUFICjQ0NjYyMDMwCgoKCg==';

/** NBU payment QR payload from `public/qr/mono.png` (same target as scanning). */
const MONO_PAYMENT_URL =
  'https://bank.gov.ua/qr/QkNECjAwMgoxClVDVAoK0JHQpCDQkdC-INCf0LXQutC10LvRjNC90LAg0JrRg9GF0L3RjwpVQTM0MzA1Mjk5MDAwMDAyNjAwOTA0NTkxMjk3NQpVQUgwCjQ0NjYyMDMwCgoK0JHQu9Cw0LPQvtC00ZbQudC90LAg0LTQvtC_0L7QvNC-0LPQsAoK';

export const DonateQrBlock = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        minWidth: 0,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // Room under the column for the card shadow; lift uses the title gap.
        overflow: 'visible',
        pb: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 3 },
          textAlign: 'center',
          fontWeight: 800,
          fontSize: { xs: '1.5rem', md: '1.75rem' },
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          px: { xs: 1, md: 0 },
        }}
      >
        {t('donatePage.qr.title')}
      </Typography>

      {/* Always column: Privat above Mono (desktop side panel + mobile).
          Shared title band in QrCard keeps both cards the same height. */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 3, md: 3 },
          alignItems: 'stretch',
          width: '100%',
          maxWidth: '100%',
          minWidth: 0,
          boxSizing: 'border-box',
          overflow: 'visible',
          // 8px lift fits in the title margin / card gap; keep a little extra
          // so a clipping ancestor cannot crop the raised edge.
          pt: 1,
          pb: 1,
        }}
      >
        <QrCard
          href={PRIVAT_PAYMENT_URL}
          img="/qr/privat.png"
          title={t('donatePage.qr.privat')}
        />
        <QrCard
          href={MONO_PAYMENT_URL}
          img="/qr/mono.png"
          title={t('donatePage.qr.mono')}
        />
      </Box>
    </Box>
  );
};
