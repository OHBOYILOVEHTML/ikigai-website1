import Head from 'next/head';

import NavBar from '../components/NavBar';
import InitialHero from '../components/InitialHero';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Ikigai</title>
        <meta name="description" content="Charity Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='content-center'>
        <NavBar />
        <div>
          <InitialHero />
        </div>
        <div>
          
        </div>

      </main>
    </div>
  )
}
