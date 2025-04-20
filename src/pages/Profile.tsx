import { Box, Typography, Container, Avatar, Button } from '@mui/material';
import { Person } from '@mui/icons-material';

const Profile = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Avatar sx={{ width: 100, height: 100, mb: 2 }}>
            <Person sx={{ fontSize: 50 }} />
          </Avatar>
          <Typography variant="h5" component="h1" gutterBottom>
            사용자 이름
          </Typography>
          <Typography variant="body1" color="text.secondary">
            user@example.com
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button variant="outlined" fullWidth>
            프로필 수정
          </Button>
          <Button variant="outlined" fullWidth>
            비밀번호 변경
          </Button>
          <Button variant="outlined" fullWidth>
            로그아웃
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile; 