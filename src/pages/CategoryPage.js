import MainLayout from "../components/layouts/MainLayout"
import Section from "../components/Section"
import Search from "../components/Search"
import OpportunityList from "../features/OpportunityList"
import { useParams } from "react-router-dom"

const CategoryPage = () => {
  const { category_id } = useParams()

  const query = {
    category_id
  }

  return (
    <MainLayout>
      <Section className="bg-purple-100 container py-8">
        <Search>
          Courses
        </Search>
      </Section>
      <OpportunityList query={query} />
    </MainLayout>
  )
}

export default CategoryPage