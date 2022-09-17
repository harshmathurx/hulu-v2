import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Harsh Created Hulu 2.0</title>
        <meta description="Harsh Created Hulu 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Results results={results}/>
    </div>
  )
}
