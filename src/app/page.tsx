import DemoComponents from '@/components/homepage/DemoComponents';
import AppLayout from '@/components/layout/AppLayout';
import Link from 'next/link';

const HomePage = () => {
  return (
    <AppLayout>
      <div>Home Page</div>
      <br />
      <DemoComponents />
      <Link href="/buyer/login" className="text-sky-700 underline">
        Login
      </Link>
      <br />
      <Link href="/search" className="text-sky-700 underline">
        Search
      </Link>
    </AppLayout>
  );
};

export default HomePage;
