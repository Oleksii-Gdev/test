import React from 'react';
import { TextField } from '@mui/material';

interface SearchInputProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search by name..."
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      margin="normal"
    />
  );
};

export default SearchInput;
