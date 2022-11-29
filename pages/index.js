import Head from 'next/head';

import NavBar from '../components/NavBar';
import InitialHero from '../components/InitialHero';
import Footer from '../components/Footer';
import SecondHero from '../components/SecondHero';
import ThirdHero from '../components/ThirdHero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ikigai</title>
        <meta name="description" content="Charity Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='content-center bg-gradient-to-r from-red-600 to-red-500 font-mono overflow-x-hidden'>
        <div><NavBar /></div>
        <div>
          <InitialHero />
          <SecondHero />
          <ThirdHero />
        </div>
        <div>
          <Footer />
        </div>

      </main>
    </div>
  )
}
