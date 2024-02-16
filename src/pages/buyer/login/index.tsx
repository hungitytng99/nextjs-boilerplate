import { RequestState } from "@/app-configs/app.configs";
import AuthLayout from "@/components/layout/AuthLayout";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store/hook";
import { getRandomUserAsync, selectUser, userSlice } from "@/lib/redux/slices";
import { NextPageWithLayout } from "@/pages/_app";
import Link from "next/link";
import type { ReactElement } from "react";

const LoginPage: NextPageWithLayout = () => {
  const userLogined = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <div>
      <br />
      <strong>
        {userLogined.name ? (
          <div>Your name is: {userLogined.name}</div>
        ) : (
          <div>Not logined</div>
        )}
      </strong>
      <br />
      <input
        placeholder="username"
        value={userLogined.name}
        autoFocus
        onChange={(e) => dispatch(userSlice.actions.update(e.target.value))}
      ></input>
      <br />
      <br />
      <button onClick={() => dispatch(getRandomUserAsync())}>
        {userLogined.status === RequestState.request && "Loading..."}
        {userLogined.status !== RequestState.request && "Make api call"}
      </button>
      <br />
      <br />
      <Link href="/buyer/sign-up">Signup</Link>
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
