import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import Response from '../Response'
import SearchResults from '../components/SearchResults';
import { Results } from '../types';

interface Props {
  results: Results
}

export default function Search({ results }: Props) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Saved response for testing to stop exceeding daily api call quota
  const useDummyData = true
  // Pagination
  const startIndex = context.query.start || 0

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json())

  // After SSR, pass props to client
  return {
    props: {
      results: data,
    },
  }
}
