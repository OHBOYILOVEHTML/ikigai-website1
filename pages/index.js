import Head from 'next/head';

import NavBar from '../components/NavBar';
import InitialHero from '../components/InitialHero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Ikigai</title>
        <meta name="description" content="Charity Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='content-center bg-sky-300 font-mono overflow-x-hidden'>
        <div><NavBar /></div>
        <div>
          <InitialHero />
        </div>
        <div>
          <Footer />
        </div>

      </main>
    </div>
  )
}
