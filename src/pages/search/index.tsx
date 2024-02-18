import AppLayout from '@/components/layout/AppLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

const SearchPage: NextPageWithLayout = () => {
  return <div>Search Page</div>;
};

SearchPage.getLayout = (page: ReactElement) => {
  return (
    <AppLayout>
      <div>{page}</div>
    </AppLayout>
  );
};

export default SearchPage;
