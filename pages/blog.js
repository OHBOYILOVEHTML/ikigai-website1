import Head from "next/head";

import Header from "../components/Header";
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
      <main className="gradientbackground font-sans content-center overflow-x-hidden">
        <div>
          <Header />
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
