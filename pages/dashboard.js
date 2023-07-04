// pages/dashboard.js

import React from 'react';
import CoinList from '../src/components/Coinlist';
import getServerSidePropsWithTokenData from '../utils/getServerSidePropsWithTokenData';

const Dashboard = ({ user }) => {
  if (!user) {
    return null; // or handle the case where the user is not authenticated
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.email}!</p>
      <CoinList />
    </div>
  );
};

export const getServerSideProps = getServerSidePropsWithTokenData();

export default Dashboard;

