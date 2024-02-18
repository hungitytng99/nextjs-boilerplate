import DemoComponents from '@/components/homepage/DemoComponents';
import AppLayout from '@/components/layout/AppLayout';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

const HomePage = () => {
  return (
    <AppLayout>
      Home Page
      <br />
      <DemoComponents />
      <Link href="/buyer/login">Login</Link>
      <br />
      <Link href="/search">Search</Link>
    </AppLayout>
  );
};

export default HomePage;
