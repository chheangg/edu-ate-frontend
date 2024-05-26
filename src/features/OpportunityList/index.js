import { useQuery } from "@tanstack/react-query"
import { getOpportunities } from "./api/getOpportunities"
import OpportunityListItem from "./components/OpportunityListItem";
import { useState } from "react";
import OpportunitySkeleton from "./components/OpportunitySkeleton";

const OpportunityList = ({ children, query = {} }) => {
  const [opportunities, setOpportunities] = useState([])
  const { isPending, error, data }  = useQuery({
    queryKey: ['opportunities'+ `q:${query.q}` + `c:${query.category_id}` + `c:${query.tag_ids}` + `c:${query.location_id}`],
    queryFn: async () => {
      const data = await getOpportunities(query);
      setOpportunities(data.data);
      return data;
    }
  })

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="grid auto-rows-[1fr] gap-8  py-8 px-4">
      { isPending ?
        Array(5).map((i) => <OpportunitySkeleton key={i} />)
        :
        opportunities.map((d) => <OpportunityListItem key={d.id} {...d} />)
      }
    </div>
  )
}

export default OpportunityList