import MainLayout from "../components/layouts/MainLayout"
import Section from "../components/Section"
import Search from "../components/Search"

const CategoryPage = () => {
  return (
    <MainLayout>
      <Section className="bg-purple-100 container py-8">
        <Search>
          Courses
        </Search>
      </Section>
    </MainLayout>
  )
}

export default CategoryPage