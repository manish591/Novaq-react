import React from 'react';
import './Dashboard.css';
import { Navbar } from 'components';

const Dashboard = () => {
  return (
    <>
      <header className="header grid">
        <Navbar />
      </header>
      <div className="dashboard">
        <div className="dashboard__wrapper">
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  );
};

export { Dashboard };
