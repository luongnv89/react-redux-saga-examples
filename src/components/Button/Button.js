import React from 'react';
import './Button.css';

const loadButton = ({ handleOnClick, isLoading, label }) => (
  <button onClick={handleOnClick}>{isLoading ? 'Loading...' : label}</button>
);

export default loadButton;
