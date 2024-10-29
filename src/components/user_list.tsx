import React, { useState, useEffect, useMemo } from 'react';
import { Container, Typography, CircularProgress, List } from '@mui/material';
import SearchInput from './search_input';
import UserItem from './user_item';

// Define the structure of user data
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data: User[] = await response.json();
      setUsers(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = useMemo(
    () => users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [users, searchQuery]
  );

  return (
    <Container maxWidth="sm" sx={{ padding: 4, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>User List</Typography>

      {/* Search Input Component */}
      <SearchInput searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {loading && <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />}
      {error && (
        <Typography color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      <List>
        {filteredUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </List>
    </Container>
  );
};

export default UserList;
