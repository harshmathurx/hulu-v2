import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import MovieDetails from "../../components/MovieDetails";
import Navbar from "../../components/Navbar";

export const getServerSideProps = async (context) => {
    const id = context.query.id;
    const requestURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
    const result = await fetch(requestURL).then((res) => res.json());
    console.log(requestURL);
    return {
        props: {
            result
        },
    };
}

const Details = ({result}) => {
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
            <MovieDetails movie={result}/>
        </div>
    )
}
export default Details