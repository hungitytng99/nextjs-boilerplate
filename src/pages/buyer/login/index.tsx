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
    <div className="ml-3">
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
        placeholder="Enter anything"
        className="border border-zinc-500"
        value={userGState.accessToken}
        autoFocus
        onChange={(e) => dispatch(userSlice.actions.update(e.target.value))}
      ></input>
      <br />
      <br />
      <button className="border border-gray-500" onClick={() => dispatch(getTodos())}>
        {userGState.getTodoStatus === RequestState.request && 'Loading...'}
        {userGState.getTodoStatus !== RequestState.request && 'Click here to get todos'}
      </button>

      <ul>
        {userGState.todos.map((todo) => {
          return <li>{todo.title}</li>;
        })}
      </ul>
      <br />
      <br />
      <Link href="/buyer/sign-up" className="text-sky-700 underline">
        Signup
      </Link>
      <br />
      <Link href="/" className="text-sky-700 underline">
        Homepage
      </Link>
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
