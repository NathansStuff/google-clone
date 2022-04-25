import { Results } from '../types'

interface Props {
  results: Results
}

export default function SearchResults({ results }: Props) {
  console.log(results)
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-md mb-5 mt-3 text-gray-600">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items.map((result) => (
        <div key={result.link} className="mb-8 max-w-xl">
          <div className="group">
            <a href={result.snippet} className="text-sml">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="truncate text-xl font-medium text-blue-800 group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  )
}
