import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>CCAS</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
