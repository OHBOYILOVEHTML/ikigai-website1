import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Ikigai Project</title>
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
