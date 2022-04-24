import { QueryHelper } from '../utils/queryHelper';

export default function Search() {
  const searchQuery = QueryHelper();
  console.log(searchQuery);

  return <div>Search</div>;
}
