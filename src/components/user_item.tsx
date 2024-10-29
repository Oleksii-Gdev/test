import React from 'react';
import { ListItem, ListItemText, Typography } from '@mui/material';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <ListItem divider>
      <ListItemText
        primary={<Typography variant="h6">{user.name}</Typography>}
        secondary={
          <>
            <Typography variant="body2" color="textSecondary">
              Email: {user.email}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: {user.phone}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default UserItem;
