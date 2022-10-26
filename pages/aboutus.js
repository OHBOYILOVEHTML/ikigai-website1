import Head from 'next/head';

import NavBar from '../components/NavBar';
import AboutUsHero from '../components/AboutusHero'
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Ikigai</title>
        <meta name="description" content="Charity Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='content-center bg-teal-200 font-mono'>
        <div><NavBar /></div>
        <div>
          <AboutUsHero />
        </div>
        <div>
          <Footer />
        </div>

      </main>
    </div>
  )
}
