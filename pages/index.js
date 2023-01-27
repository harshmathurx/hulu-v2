import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;
  const requestURL = `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  const request = await fetch(requestURL).then((res) => res.json());
  console.log(requestURL);
  return {
    props: {
      results: request.results,
    },
  };
}

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Harsh makes Hulu 2.0</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta description="Harsh Created Hulu 2.0, this is a side project I created over a weekend in September 2020." />
        <meta property="og:title" content="Harsh makes Hulu 2.0" key="ogtitle" />
        <meta property="og:description" content="Harsh Created Hulu 2.0, this is a side project I created over a weekend in September 2020." key="ogdesc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  )
}
