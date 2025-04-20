import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Notifications, Person } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = useMemo(() => {
    switch (location.pathname) {
      case '/':
        return 0;
      case '/notifications':
        return 1;
      case '/profile':
        return 2;
      default:
        return 0;
    }
  }, [location.pathname]);

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        {children}
      </Box>
      <BottomNavigation
        value={activeTab}
        onChange={(_, newValue) => {
          switch (newValue) {
            case 0:
              navigate('/');
              break;
            case 1:
              navigate('/notifications');
              break;
            case 2:
              navigate('/profile');
              break;
          }
        }}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid #E0E0E0',
        }}
      >
        <BottomNavigationAction label="홈" icon={<Home />} />
        <BottomNavigationAction label="알림" icon={<Notifications />} />
        <BottomNavigationAction label="프로필" icon={<Person />} />
      </BottomNavigation>
    </Box>
  );
};

export default Layout; 