import Link from "next/link";
import { NextPageWithLayout } from "../pages/_app";

const HomePage: NextPageWithLayout = () => {
  return <div>Home Page
    <Link href="/buyer/login">Login</Link>
  </div>;
};

export default HomePage;
