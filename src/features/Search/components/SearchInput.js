import { useSearchParams } from 'react-router-dom';
import SearchIcon from '../assets/search-icon.svg'
import { useState } from 'react';

const SearchInput = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let [query, setQuery] = useState  (
    searchParams.get("q") || ''
  );

  const params = [];

  for(let entry of searchParams.entries()) {
    params.push(entry);
  }

  const submitEvent = () => {
    setSearchParams({ ...params, q: query });
  }

  return (
    <label className="rounded-lg bg-purple-400 flex items-center border border-2 border-primary-white gap-2 relative">
      <img className='pl-2 h-8' src={SearchIcon} />
      <input 
        type="text" 
        className="grow bg-purple-400 focus:outline-none" 
        value={query} onChange={(e) => setQuery(e.currentTarget.value)} 
        onSubmit={submitEvent}
      />
        <button 
          onClick={submitEvent}
          className='px-2 rounded-lg bg-purple-300 text-primary-white border border-2 border-primary-white text-xl font-thin m-0'
        >
          Search
        </button>
    </label>
  )
}

export default SearchInput