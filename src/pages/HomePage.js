import MainLayout from "../components/layouts/MainLayout"
import Search from "../components/Search"
import Section from "../components/Section"
import MainNav from "../features/MainNav"
import Carousel from "../features/Carousel"
import MainNavItem from "../features/MainNav/components/MainNavItem"

const HomePage = () => {
  return (
    <MainLayout>
      <Section className="bg-purple-100 container py-8">
        <Search>
          Resources For You
        </Search>
      </Section>
      <MainNav />
      <Carousel />
      <Section className="container mt-6">
        <h3 className="text-primary-white font-bold text-xl">You might be interested...</h3>
      </Section>
    </MainLayout>
  )
}

export default HomePage