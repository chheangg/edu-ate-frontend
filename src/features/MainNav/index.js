import { data } from "./data"
import MainNavItem from "./components/MainNavItem"
console.log(data)
const MainNav = () => (
  <div className="grid grid-cols-4 gap-3 container">
    { data.map((d) => <MainNavItem key={d.id} img={d.icon}>{d.name}</MainNavItem>)}
  </div>
)

export default MainNav