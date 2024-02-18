import AuthLayout from '@/components/layout/AuthLayout';
import { getRandomUserAsync, selectUser, userSlice } from '@/libs/redux/slices';
import { useAppDispatch, useAppSelector } from '@/libs/redux/store/hook';
import { NextPageWithLayout } from '@/pages/_app';
import { RequestState } from '@/shared/configs/app.contants';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import type { ReactElement } from 'react';

interface Props {
  repo: string;
}

const LoginPage: NextPageWithLayout<Props> = ({ repo }) => {
  const userLogined = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <div>
      <br />
      <strong>
        {userLogined.accessToken ? (
          <div>Your token is: {userLogined.accessToken}</div>
        ) : (
          <div>Not logined</div>
        )}
      </strong>
      <br />
      <input
        placeholder="username"
        value={userLogined.accessToken}
        autoFocus
        onChange={(e) => dispatch(userSlice.actions.update(e.target.value))}
      ></input>
      <br />
      <br />
      <button onClick={() => dispatch(getRandomUserAsync())}>
        {userLogined.status === RequestState.request && 'Loading...'}
        {userLogined.status !== RequestState.request && 'Make api call'}
      </button>
      <br />
      <br />
      <Link href="/buyer/sign-up">Signup</Link>
      <br />
      <Link href="/">Homepage</Link>
    </div>
  );
};

LoginPage.getLayout = (page: ReactElement) => {
  return (
    <AuthLayout>
      <div>{page}</div>
    </AuthLayout>
  );
};

export const getServerSideProps = (async () => {
  return { props: { repo: '2323' } };
}) satisfies GetServerSideProps<{ repo: string }>;

export default LoginPage;
