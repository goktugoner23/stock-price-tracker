// pages/dashboard.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import getServerSidePropsWithTokenData from '../utils/getServerSidePropsWithTokenData';

export default function Dashboard({ user }) {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user && <p>Welcome, {user.email}!</p>}
    </div>
  );
}

export const getServerSideProps = getServerSidePropsWithTokenData();
