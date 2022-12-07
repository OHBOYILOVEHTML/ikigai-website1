import Head from "next/head";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlogPage from "../components/BlogPage";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Ikigai</title>
        <meta name="description" content="Charity Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="gradientbackground content-center font-mono overflow-x-hidden">
        <div>
          <NavBar />
        </div>
        <div>
          <BlogPage />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
