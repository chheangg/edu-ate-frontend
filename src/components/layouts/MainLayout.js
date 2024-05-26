import NavBar from '../../features/NavBar'

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-purple-300 to-purple-200 w-full min-h-[100vh] font-main">
      <NavBar />
      {children}
    </div>
  )
}

export default MainLayout