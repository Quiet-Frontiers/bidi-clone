import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          홈
        </Typography>
        <Typography variant="body1">
          환영합니다! 여기는 홈 페이지입니다.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 