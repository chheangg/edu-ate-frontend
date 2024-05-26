import MainLayout from "../components/layouts/MainLayout"
import Section from "../components/Section"
import Search from "../features/Search"
import OpportunityList from "../features/OpportunityList"
import { useParams, useSearchParams } from "react-router-dom"
import Filter from "../features/Filter/Filter"

const CategoryPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { category_id } = useParams()

  const params = {};

  for(let entry of searchParams.entries()) {
    params[entry[0]] = entry[1]
  }

  const query = {...params, category_id}

  return (
    <MainLayout>
      <Section className="bg-purple-100 container py-8">
        <Search>
          Courses
        </Search>
      </Section>
      <Filter />
      <OpportunityList query={query} />
    </MainLayout>
  )
}

export default CategoryPage