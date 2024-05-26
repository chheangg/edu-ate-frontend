import SearchInput from "./components/SearchInput"

const Search = ({children}) => {
  return (
    <>
      <h3 className="text-3xl text-center text-primary-white mb-3">{children}</h3>
      <SearchInput />
    </>
  )
}

export default Search