import AuthLayout from '@/components/layout/AuthLayout';
import { getTodos, login, selectUser, userSlice } from '@/libs/redux/slices';
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
  const userGState = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <div>
      <br />
      <strong>
        {userGState.accessToken ? (
          <div>You enter: {userGState.accessToken}</div>
        ) : (
          <div>Not input</div>
        )}
      </strong>
      <br />
      <input
        placeholder="username"
        value={userGState.accessToken}
        autoFocus
        onChange={(e) => dispatch(userSlice.actions.update(e.target.value))}
      ></input>
      <br />
      <br />
      <button onClick={() => dispatch(getTodos())}>
        {userGState.getTodoStatus === RequestState.request && 'Loading...'}
        {userGState.getTodoStatus !== RequestState.request && 'Get todos'}
      </button>

      <ul>
        {userGState.todos.map((todo) => {
          return <li>{todo.title}</li>;
        })}
      </ul>
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
