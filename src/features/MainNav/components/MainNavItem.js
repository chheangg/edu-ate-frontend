import { useNavigate } from "react-router-dom"

const MainNavItem = ({ children, img, categoryId }) => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(`/category/${categoryId}`)} className="grid p-2 items-center justify-items-center outline-none w-[25%] text-primary-white carousel-item relative">
      <img className="h-full w-auto" src={img} />
      <div>{children}</div>
    </button>
  )
}

export default MainNavItem