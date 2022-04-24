import { useLocation } from 'react-router-dom';

export function QueryHelper() {
  const location = useLocation();
  // get the first part of the path; eg, /search or /videos
  const searchType = location.pathname;
  // get everything after ( & including) the '?' eg, ?q=iphone
  const searchTerm = location.search;

  // Build the query
  const searchQuery = `${searchType}/${searchTerm}`;
  return searchQuery;
}
