import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './Loader.module.css';

function Loader() {
  return (
    <div className="loader">
      <ThreeDots 
        height="80" 
        width="80" 
        color="#4fa94d" 
        ariaLabel="loading-indicator" 
      />
    </div>
  );
}

export default Loader;