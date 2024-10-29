import React, { useState } from 'react';
import { Container, Typography, Button, Stack } from '@mui/material';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    if (error) setError(null); // Clear error when incrementing
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    } else {
      setError('Counter cannot go below zero');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ textAlign: 'center', padding: 4, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>Counter</Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>Count: {count}</Typography>

      {/* Error message */}
      {error && (
        <Typography color="error" variant="body2" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {/* Button group for increment and decrement */}
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" onClick={increment}>
          Increment
        </Button>
        <Button variant="contained" color="secondary" onClick={decrement}>
          Decrement
        </Button>
      </Stack>
    </Container>
  );
};

export default Counter;
