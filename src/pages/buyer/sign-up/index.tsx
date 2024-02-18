import AuthLayout from '@/components/layout/AuthLayout';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from '../../../pages/_app';
import Link from 'next/link';
import { useAppSelector } from '@/libs/redux/store/hook';
import { selectUser } from '@/libs/redux/slices';

const SignupPage: NextPageWithLayout = () => {
  const user = useAppSelector(selectUser);
  return (
    <div>
      <strong>{user ? <div>Your name is: {user.accessToken}</div> : <div>Not logined</div>}</strong>
      SignUp
      <br />
      <Link href="/buyer/login">Login</Link>
    </div>
  );
};

SignupPage.getLayout = (page: ReactElement) => {
  return (
    <AuthLayout>
      <div>{page}</div>
    </AuthLayout>
  );
};

export default SignupPage;
