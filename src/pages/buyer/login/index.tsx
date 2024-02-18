import AuthLayout from '@/components/layout/AuthLayout';
import { useAppDispatch, useAppSelector } from '@/libs/redux/store/hook';
import { getRandomUserAsync, selectUser, userSlice } from '@/libs/redux/slices';
import { NextPageWithLayout } from '@/pages/_app';
import Link from 'next/link';
import type { ReactElement } from 'react';
import { RequestState } from '@/shared/configs/app.contants';

const LoginPage: NextPageWithLayout = () => {
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

export default LoginPage;
