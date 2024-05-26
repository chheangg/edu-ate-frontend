import MainNavItem from "./components/MainNavItem"
import { useQuery } from "@tanstack/react-query"
import { getCategories } from "./api/getCategories"
import { iconData } from "./data"

const MainNav = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  if (isPending) return (
    <div className="flex justify-center py-10">
      <span className="loading loading-spinner loading-lg text-purple-400"></span>
    </div>
  )

  if (error) return 'An error has occurred: ' + error.message

  if (!data.data) return
  console.log(data, "HEY", iconData)

  const formattedData = data.data.map((d) => {
    const { icon } = iconData.find((iD) => iD.name.toLowerCase() === d.name.toLowerCase())
    return {
      ...d,
      icon: icon,
    }
  })

  return (
    <div className="carousel w-full py-8">
      { formattedData.map((d) => <MainNavItem key={d.id} categoryId={d.id} img={d.icon}>{d.name}</MainNavItem>)}
    </div>
  )
}

export default MainNav