import { useParams } from "react-router-dom"
import MainLayout from "../components/layouts/MainLayout"
import OpportunityDetail from "../features/OpportunityDetail"

const OpportunityPage = () => {
  const { opportunity_id } = useParams()

  return (
    <MainLayout>
      <OpportunityDetail id={opportunity_id} />
    </MainLayout>
  )
}

export default OpportunityPage