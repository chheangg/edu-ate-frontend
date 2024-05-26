import { useLocation } from "../../../stores/location";

const Location = () => {
  const location = useLocation((store) => store.location)
  return (
    <div className="text-[1.1rem] text-purple-100">📍{location.city}, {location.country}</div>
  )
}

export default Location;