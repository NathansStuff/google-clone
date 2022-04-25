import Head from 'next/head'
import { GetServerSideProps } from 'next'

import Header from '../components/Header'
import Response from '../Response'

interface Props {
  results: {}
}

export default function Search({ results }: Props) {
  console.log( results )
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>
      <Header />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = true

  const data = useDummyData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}`
  ).then((response) => response.json())

  // After SSR, pass props to client
  return {
    props: {
      results: data,
    },
  }
}

// https://www.googleapis.com/customsearch/v1?key=AIzaSyCwEYovkISzQ2iyOB9SILK6qm1WDwnpum8&cx=43ba6fb1e515b2873&q=testing