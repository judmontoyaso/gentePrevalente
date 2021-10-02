import Head from "next/head";
import { Navbar } from "components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gente Prevalente</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/0888d5f4dd.js" crossorigin="anonymous"></script>
      </Head>
      <Navbar />
      <div>Hello World</div>
    </div>
  );
}
