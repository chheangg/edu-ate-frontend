import Lang from "./components/Lang"
import Location from "./components/Location"
import LogoBtn from "./components/LogoBtn"

const NavBar = () => {
  return (
    <nav className="navbar bg-primary-white pt-8 pb-4 container">
      <div className="flex-1">
        <Location />
      </div>
      <div className="flex-none flex items-center gap-2">
        <Lang />
        <LogoBtn />
      </div>
    </nav>
  )
}

export default NavBar