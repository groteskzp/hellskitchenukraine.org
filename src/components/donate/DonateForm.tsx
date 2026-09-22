import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NorthEastRounded } from '@mui/icons-material';
import { Box, CircularProgress, Stack } from '@mui/material';

import { PaymentStatus } from '../../../types/wayforpay';
import { createWayForPayPayment } from '../../services/wayforpay';
import { getPaymentErrorMessage } from '../../utils/paymentErrors';
import { redirectToWayForPay } from '../../utils/wayforpayRedirect';
import { DonateAmountField } from './DonateAmountField';
import { DonateButton } from './DonateButton';

const PRESET_AMOUNTS = [100, 300, 500] as const;

export const DonateForm: React.FC = () => {
  const { t } = useTranslation();

  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState<PaymentStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const numericAmount = Number(amount);
  const isValidAmount = numericAmount > 0 && numericAmount <= 100000;
  const hasAmountError = !isValidAmount && amount !== '';

  const getSubmitLabel = () => {
    if (status === 'loading') return t('donatePage.form.loading');
    if (status === 'redirecting') return t('donatePage.form.redirecting');
    return t('donatePage.form.submit');
  };

  const getEndIcon = () => {
    if (status === 'loading' || status === 'redirecting') {
      return <CircularProgress size={18} color="inherit" thickness={5} />;
    }

    return (
      <NorthEastRounded
        sx={{
          fontSize: '1.2rem',
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '.MuiButton-root:hover &': {
            transform: 'translate(4px, -4px)',
          },
        }}
      />
    );
  };

  const handleDonate = async () => {
    if (!isValidAmount) return;
    setStatus('loading');
    setErrorMessage(null);

    try {
      const paymentData = await createWayForPayPayment(numericAmount, 'UAH');
      setStatus('redirecting');

      setTimeout(() => {
        redirectToWayForPay(paymentData);
      }, 400);
    } catch (error) {
      setErrorMessage(getPaymentErrorMessage(error));
      setStatus('error');
    }
  };

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        p: { xs: 3, sm: 5 },
        borderRadius: 6,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.06)',
        width: '100%',
        maxWidth: { xs: '100%', sm: 420 },
        minWidth: 0,
        mx: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          transform: 'translateY(-5px)',
        },
        '&:focus-within': {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
          // scale on xs caused horizontal overflow / right shift
          transform: 'none',
        },
      }}
    >
      <DonateAmountField
        amount={amount}
        currency="UAH"
        onAmountChange={setAmount}
        error={hasAmountError}
      />

      <Stack direction="row" spacing={1.5} mb={4} flexWrap="wrap" useFlexGap>
        {PRESET_AMOUNTS.map((value) => (
          <DonateButton
            key={value}
            variant={amount === String(value) ? 'contained' : 'outlined'}
            onClick={() => setAmount(String(value))}
            sx={{
              flexGrow: 1,
              borderRadius: 3,
              py: 1,
            }}
          >
            + {value} ₴
          </DonateButton>
        ))}
      </Stack>

      {errorMessage && (
        <Box
          mb={2}
          color="error.main"
          sx={{ textAlign: 'center', fontSize: 14 }}
        >
          {errorMessage}
        </Box>
      )}

      <DonateButton
        fullWidth
        size="large"
        variant="contained"
        disabled={!isValidAmount || status !== 'idle'}
        onClick={handleDonate}
        endIcon={getEndIcon()}
        sx={{
          py: 2,
          borderRadius: 3,
          fontSize: '1.1rem',
          fontWeight: 700,
          backgroundColor: 'common.black',
          color: 'common.white',
          '&:hover': { backgroundColor: '#222' },
          '&.Mui-disabled': { backgroundColor: '#eee' },
        }}
      >
        {getSubmitLabel()}
      </DonateButton>
      <Stack
        spacing={1.5}
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 3, mb: 2, width: '100%' }}
      >
        <Box
          component="img"
          src="payment-icons/payment-icons-whiteback.png"
          alt="Методи оплати: Visa, Mastercard, WayForPay"
          sx={{
            height: 32,
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
        />
      </Stack>
    </Box>
  );
};
