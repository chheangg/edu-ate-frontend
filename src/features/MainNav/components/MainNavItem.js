const MainNavItem = ({ children, img }) => (
  <button className="btn btn-ghost text-primary-white py-4">
    <img src={img} />
    <div>{children}</div>
  </button>
)

export default MainNavItem