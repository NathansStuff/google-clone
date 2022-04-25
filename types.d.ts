export type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

type ItemResult = {
 kind: string;
 title: string;
 htmlTitle: string;
 link: string;
 displayLink: string;
 snippet: string;
 htmlSnippet: string;
 cacheId: string;
 formattedUrl: string;
 htmlFormattedUrl: string;
}

export type Results = {
  searchInformation: {
   formattedSearchTime: string;
   formattedTotalResults: string
  }
  items: ItemResult[];
}
