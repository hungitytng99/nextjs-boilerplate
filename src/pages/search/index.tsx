import AppLayout from '@/components/layout/AppLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Link from 'next/link';

const SearchPage: NextPageWithLayout = () => {
  return <div>Search Page</div>;
};

SearchPage.getLayout = (page: ReactElement) => {
  return (
    <AppLayout>
      <div>{page}</div>
      <br />
      <Link href="/">Homepage</Link>
    </AppLayout>
  );
};

export default SearchPage;
