import { Box, Button, Checkbox, Container, FormControlLabel, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ImageUploadBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 400,
  borderRadius: 16,
  backgroundColor: '#f5f5f5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.15)',
  cursor: 'pointer',
  backgroundImage: 'url(https://images.pexels.com/photos/8971540/pexels-photo-8971540.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  padding: '16px 0',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
  width: 300,
  fontSize: 16,
  fontWeight: 600,
  backgroundColor: '#000000',
  color: '#FFFFFF',
  textAlign: 'center',
  '&:hover': {
    backgroundColor: '#333333',
  },
}));

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  '&.Mui-checked': {
    color: '#000000',
  },
}));

const Main = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: 36,
          fontWeight: 900,
          mb: 4,
          lineHeight: 1.45,
          whiteSpace: 'pre-line',
          fontFamily: 'Noto Sans KR',
          color: '#000000',
        }}
      >
        {'스타일링할\n자신의 모습을\n보여 주세요.'}
      </Typography>

      <ImageUploadBox />

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <FormControlLabel
          control={<StyledCheckbox />}
          label="정보 제공에 동의합니다"
          sx={{
            '& .MuiTypography-root': {
              fontSize: 12,
              fontFamily: 'Noto Sans KR',
              color: '#000000',
            },
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledButton variant="contained">
          스타일링 시작
        </StyledButton>
      </Box>
    </Container>
  );
};

export default Main; 