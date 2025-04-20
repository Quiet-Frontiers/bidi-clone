import { Box, Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const Notifications = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          알림
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="새로운 메시지"
              secondary="새로운 메시지가 도착했습니다."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="시스템 알림"
              secondary="시스템 업데이트가 완료되었습니다."
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Notifications; 