import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import {
  DRIVE_FOLDERS,
  driveEmbedUrl,
  type DriveFolderKey,
  driveFolderUrl,
} from '../../assets/driveFolders';
import { withHeaderFooter } from '../../hoc/withHeaderFooter';

interface DriveFolderPageProps {
  isBlue?: boolean;
  folder: Exclude<DriveFolderKey, 'site'>;
}

const DriveFolderPage: React.FC<DriveFolderPageProps> = ({ folder }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const folderId = DRIVE_FOLDERS[folder];
  const title = t(`drivePages.${folder}.title`);

  return (
    <Box sx={{ background: theme.palette.yellowBlueGradient }}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ py: { xs: 4, md: 6 } }}>
          <Box>
            <Typography component="h1" variant="h3" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t(`drivePages.${folder}.description`)}
            </Typography>
            {folder === 'other' && (
              <Typography variant="body1" sx={{ mt: 2 }}>
                {t('drivePages.other.emptyNote')}
              </Typography>
            )}
          </Box>

          <Button
            component="a"
            href={driveFolderUrl(folderId)}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              alignSelf: 'flex-start',
              borderRadius: '10px',
              borderWidth: 2,
              borderColor: theme.palette.black,
              color: theme.palette.black,
              textTransform: 'none',
              fontWeight: 500,
              px: 2.5,
              '&:hover': {
                borderWidth: 2,
                borderColor: theme.palette.black,
                backgroundColor: 'rgba(20, 23, 27, 0.04)',
              },
            }}
          >
            {t('drivePages.openInDrive')}
          </Button>

          <Box
            sx={{
              bgcolor: theme.palette.white,
              borderRadius: '12px',
              overflow: 'hidden',
              lineHeight: 0,
            }}
          >
            <Box
              component="iframe"
              title={t('drivePages.iframeTitle')}
              src={driveEmbedUrl(folderId)}
              sx={{
                border: 0,
                display: 'block',
                width: '100%',
                height: { xs: '70vh', md: '75vh' },
                minHeight: { xs: 420, md: 560 },
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default withHeaderFooter(DriveFolderPage);
