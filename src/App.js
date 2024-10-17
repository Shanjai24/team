import * as React from 'react';
import { Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DescriptionIcon from '@mui/icons-material/Description';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from './assets/logo.png';

const iconStyles = {
  width: '20px',
  height: '20px',
  padding: 1.5,
  borderRadius: '12px',
  backgroundColor: '#FFFFFF29',
  color: 'white',
};

const hoverStyle = {
  '&:hover': {
    backgroundColor: '#00B7A8',
    color: 'white',
  },
};

const textStyle = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  fontSize: '10px',
  lineHeight: '10px',
  textAlign: 'center',
  color: 'white',
};

function DrawerLeft() {
  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: {
          height: '100%',
          overflowY: 'auto',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          backgroundColor: '#0C084C',
        },
      }}
    >
      <List>
        <ListItem sx={{ flexDirection: 'column' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: '45px', height: '45px' }}
          />
        </ListItem>
        <ListItem sx={{ flexDirection: 'column', marginTop: 5 }}>
          <WhatshotIcon sx={{ ...iconStyles, ...hoverStyle }} />
          <ListItemText primary="Actions" sx={textStyle} />
        </ListItem>
        <ListItem sx={{ flexDirection: 'column' }}>
          <TrackChangesIcon sx={{ ...iconStyles, ...hoverStyle }} />
          <ListItemText primary="Goals" sx={textStyle} />
        </ListItem>
        <ListItem sx={{ flexDirection: 'column' }}>
          <DescriptionIcon sx={{ ...iconStyles, ...hoverStyle }} />
          <ListItemText primary="Docs" sx={textStyle} />
        </ListItem>
        <ListItem sx={{ flexDirection: 'column' }}>
          <HourglassEmptyIcon sx={{ ...iconStyles, ...hoverStyle }} />
          <ListItemText primary="Canvas" sx={textStyle} />
        </ListItem>
        <ListItem sx={{ flexDirection: 'column' }}>
          <CelebrationIcon sx={{ ...iconStyles, ...hoverStyle }} />
          <ListItemText primary="Culture" sx={textStyle} />
        </ListItem>
        <ListItem sx={{ flexDirection: 'column' }}>
          <ForumIcon sx={{ ...iconStyles, ...hoverStyle }} />
          <ListItemText primary="Chat" sx={textStyle} />
        </ListItem>
        <Divider
          sx={{
            borderBottom: '2.5px dashed white',
            marginTop: 5,
          }}
        />
        <ListItem sx={{ flexDirection: 'column', marginTop: 3 }}>
          <SettingsIcon sx={{ ...iconStyles, ...hoverStyle }} />
          <ListItemText primary="Settings" sx={{ textAlign: 'center', color: 'white' }} />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default DrawerLeft;
