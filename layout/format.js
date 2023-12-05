import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>CCAS</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
