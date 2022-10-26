import Head from 'next/head';

import NavBar from '../components/NavBar';
import Learn from '../components/Learn';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Ikigai</title>
        <meta name="description" content="Charity Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='content-center bg-gradient-to-r from-red-600 to-red-500 font-mono overflow-x-hidden'>
        <div><NavBar /></div>
        <div>
          <Learn />
        </div>
        <div>
          <Footer />
        </div>

      </main>
    </div>
  )
}
