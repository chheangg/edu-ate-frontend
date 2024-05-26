import { useQueries } from "@tanstack/react-query";
import { getCategories } from "./api/getCategories";
import { getLocations } from "./api/getLocations";
import { getTags } from "./api/getTags";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Filter = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const results = useQueries({
    queries: [
      { queryKey: ['category', 1], queryFn: getCategories },
      { queryKey: ['location', 1], queryFn: getLocations },
      { queryKey: ['tags', 1], queryFn: getTags },
    ]
  })

  const isLoading = results.some(result => result.isLoading)
  const errors = results.some(result => result.error)
  
  if (errors) {
    return errors;
  }

  if (isLoading) {
    return "skeleton"
  }

  const categories = results[0].data.data
  const locations = results[1].data.data
  const countries = locations.map((l) => l.country).reduce(
    (a, c) => { 
      if (!a.find((aO) => aO === c)) {
        a.push(c);
      }

      return a;
    },[])

  const cities = locations.map((l) => l.city).reduce(
    (a, c) => { 
      if (!a.find((aO) => aO === c)) {
        a.push(c);
      }

      return a;
    },[])
    

  const tags = results[2].data.data

  const params = {};

  for(let entry of searchParams.entries()) {
    params[entry[0]] = entry[1]
  }

  
  return (
    <div className="px-4 pt-4 grid grid-cols-[auto,auto,1fr] justify-items-end"> 
      <div className="dropdown">
        <div tabIndex={0} role="button" className="m-1 inline-block px-4 rounded bg-purple-400 text-purple-100">Country</div>
        <ul tabIndex={0} className="p-0 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 bg-purple-400 text-purple-100">
          {
            countries.map((c) =>
              <li className="bg-purple-400" 
                onClick={() => setSearchParams({ ...params, country: c })} 
                key={c}>
              <a className="capitalize">{c}</a></li>
            )
          }
        </ul>
      </div>
      <div className="dropdown">
        <div tabIndex={0} className="m-1 inline-block px-4 rounded bg-purple-400 text-purple-100">City</div>
        <ul tabIndex={0} className="p-0 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 bg-purple-400 text-purple-100">
          {
            cities.map((c) =>
              <li className="bg-purple-400" 
                onClick={() => setSearchParams({ ...params, city: c })} 
                key={c}>
              <a className="capitalize">{c}</a></li>
            )
          }
        </ul>
      </div>
      <div className="dropdown">
        <div tabIndex={0} className="m-1 inline-block px-4 rounded bg-purple-400 text-purple-100">Category</div>
        <ul tabIndex={0} className="p-0 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 bg-purple-400 text-purple-100">
          {
            categories.map((c) => 
              <li className="bg-purple-400" key={c}>
              <a className="capitalize" onClick={() => navigate(`/category/${c.id}`)}>{c.name}</a></li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Filter