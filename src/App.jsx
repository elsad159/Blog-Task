import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Blogs from './components/Blogs';
import Cards from './components/Cards';
import './styles/app.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Blogs />
      <Cards />
    </div>
  );
};

export default App;
