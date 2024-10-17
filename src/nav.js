import React from 'react';
import { AppBar, Avatar, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardContent, Typography } from '@mui/material';
import { Widgets, SwitchAccount } from '@mui/icons-material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import StarIcon from '@mui/icons-material/Star';
import logo3 from './assets/logo3.png';

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ backgroundColor: '#f7f8fb' }}>
      <AppBar position="static" sx={{ p: 2, backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography>
            Welcome,<br />
            <span style={{ display: 'block', marginTop: '8px', fontWeight: 600 }}>Sarveshwara!</span>
          </Typography>
          <Avatar sx={{ width: 40, height: 40 }} src="/path/to/avatar.jpg" alt="Avatar" />
        </Box>
      </AppBar>

      <Box sx={{ p: 2 }}>
        <Card sx={{ display: 'flex', alignItems: 'center', padding: '16px', borderRadius: '12px', backgroundColor: '#fff' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Typography variant="body2" color="textSecondary" sx={{ fontSize: '12px' }}>
              Current workspace
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
              <img
                src={logo3}
                alt="Workspace Logo"
                style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1979A114', marginRight: '12px' }}
              />
              <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                Workspace 1
              </Typography>
            </Box>
          </Box>
          <Button
            startIcon={<SwitchAccount />}
            sx={{
              textTransform: 'none',
              borderRadius: '20px',
              padding: '6px 16px',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #ddd',
              color: '#000',
            }}
          >
            Switch
          </Button>
        </Card>


        <Box sx={{ display: 'flex', mt: 3, mb: 3, flexDirection: 'column' }}>
          <Box
            sx={{
              borderTop: '2px dotted #d3d3d3',
              width: '100%',
              flexDirection: 'column'
            }}
          />
          <Box sx={{ flexDirection: 'row', display: 'flex' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#EE3D4A',
                marginRight: '8px',
                marginTop: '20px',
              }}
            >
              <StarIcon sx={{ color: 'gold', fontSize: '14px' }} />
            </Box>
            <Box sx={{ marginTop: '20px' }}>
              List of items on your plate today!
            </Box>
          </Box>
        </Box>

        <Card sx={{ mb: 2, borderRadius: 2, height: '212px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80%' }}>
            <Typography variant="body2" sx={{ color: '#888' }}>
              Widget 01
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2, borderRadius: 2, height: '125px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Typography variant="body2" sx={{ color: '#888' }}>
              Widget 02
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          position: 'fixed',
          padding: '7px',
          bottom: 0,
          width: '97%',
          backgroundColor: '#00204A',
          borderRadius: '50px',
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon sx={{ fontSize: '24px' }} />}
          sx={{
            borderRadius: '50px',
            '&.Mui-selected': {
              backgroundColor: '#00B7A8',
              color: 'white',
              borderRadius: '50px',
            },
            '&:hover': {
              backgroundColor: '#00B7A8',
              color: 'white',
            },
          }}
        />
        <BottomNavigationAction
          label="Goals"
          icon={<TrackChangesIcon sx={{ fontSize: '24px' }} />}
          sx={{
            borderRadius: '50px',
            '&.Mui-selected': {
              backgroundColor: '#00B7A8',
              color: 'white',
              borderRadius: '50px',
            },
            '&:hover': {
              backgroundColor: '#00B7A8',
              color: 'white',
            },
          }}
        />
        <BottomNavigationAction
          label="Actions"
          icon={<WhatshotIcon sx={{ fontSize: '24px' }} />}
          sx={{
            borderRadius: '50px',
            '&.Mui-selected': {
              backgroundColor: '#00B7A8',
              color: 'white',
              borderRadius: '50px',
            },
            '&:hover': {
              backgroundColor: '#00B7A8',
              color: 'white',
            },
          }}
        />
        <BottomNavigationAction
          label="Chat"
          icon={<ForumIcon sx={{ fontSize: '24px' }} />}
          sx={{
            borderRadius: '50px',
            '&.Mui-selected': {
              backgroundColor: '#00B7A8',
              color: 'white',
              borderRadius: '50px',
            },
            '&:hover': {
              backgroundColor: '#00B7A8',
              color: 'white',
            },
          }}
        />
        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsNoneIcon sx={{ fontSize: '24px' }} />}
          sx={{
            borderRadius: '50px',
            '&.Mui-selected': {
              backgroundColor: '#00B7A8',
              color: 'white',
              borderRadius: '50px',
            },
            '&:hover': {
              backgroundColor: '#00B7A8',
              color: 'white',
            },
          }}
        />
      </BottomNavigation>
    </Box>
  );
}