import React from 'react';
import './search-box.style.css';

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeHolder={placeholder}
      onChange={handleChange}
    />
  );
};
