import { appConsole, appRequest } from "@/app-configs";

type Repo = {
  name: string;
  stargazers_count: number;
};

export default async function Home() {
  const repo: Repo = await appRequest.get<Repo>(
    "https://api.github.com/repos/vercel/next.js",
    {},
    { isFullPath: true }
  );
  appConsole.log(repo.stargazers_count);
  return <div>Main page</div>;
}
