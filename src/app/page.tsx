import AppLayout from '@/components/layout/AppLayout';
import Link from 'next/link';

const HomePage = () => {
  return (
    <AppLayout>
      Home Page
      <br />
      <Link href="/buyer/login">Login</Link>
      <br />
      <Link href="/search">Search</Link>
    </AppLayout>
  );
};

export default HomePage;
