import MainLayout from "../components/layouts/MainLayout"
import Search from "../components/Search"
import Section from "../components/Section"

const HomePage = () => {
  return (
    <MainLayout>
      <Section className="bg-purple-100 container py-8">
        <Search>
          Resources For You
        </Search>
      </Section>
    </MainLayout>
  )
}

export default HomePage