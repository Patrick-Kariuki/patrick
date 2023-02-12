import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main>
        <h1> This is Patrick's page</h1>
        <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="index"
              //target="_blank"
            >
              <h3 className="text-2xl font-bold">Go to Homepage page →</h3>
              <div className="text-lg">
                Go to homepage page.
              </div>
            </Link>
      </main>

    </>
  );
};

export default Home;
