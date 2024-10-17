import React from 'react';
import { BottomNavigationAction } from '@mui/material';

const BottomNavAction = ({ label, icon, value }) => {
  return (
    <BottomNavigationAction
      label={label}
      icon={icon}
      value={value}
    />
  );
};

export default BottomNavAction;
