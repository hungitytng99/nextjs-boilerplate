import AuthLayout from '@/components/layout/AuthLayout';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from '../../../pages/_app';
import Link from 'next/link';
import { useAppSelector } from '@/libs/redux/store/hook';
import { selectUsername } from '@/libs/redux/slices';

const SignupPage: NextPageWithLayout = () => {
  const name = useAppSelector(selectUsername);
  return (
    <div>
      <strong>{name ? <div>Your name is: {name}</div> : <div>Not logined</div>}</strong>
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
