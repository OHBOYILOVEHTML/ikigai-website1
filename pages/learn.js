import Head from "next/head";

import Header from "../components/Header";
import LearnPage from "../components/LearnPage";
import Footer from "../components/Footer";

export default function Learn() {
  return (
    <div>
      <Head>
        <title>Ikigai</title>
        <meta name="description" content="Charity Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="gradientbackground font-sans content-center overflow-x-hidden">
        <div>
          <Header />
        </div>
        <div>
          <LearnPage />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
