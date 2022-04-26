import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import axios from 'axios'

import Header from '../components/Header'
import Response from '../Response'
import SearchResults from '../components/SearchResults'
import { Results } from '../types'
import { useEffect } from 'react'

interface Props {
  results: Results
}

export default function Search({ results }: any) {
  console.log(results)
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <Header />
      {/* <SearchResults results={results} /> */}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Saved response for testing to stop exceeding daily api call quota
  const useDummyData = true

  const data = useDummyData
    ? Response
    : await fetch(
        `https://google-search3.p.rapidapi.com/api/v1/search/q=${context.query.term}&num=100`,
        {
          headers: {
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
            'X-RapidAPI-Key': `${process.env.X_RAPID_API_KEY}`,
          },
        }
      ).then((response) => response.json())

  // After SSR, pass props to client
  return {
    props: {
      results: data,
    },
  }
}
