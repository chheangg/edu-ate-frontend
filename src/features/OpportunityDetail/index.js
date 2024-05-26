import { useQuery } from "@tanstack/react-query"
import { getOpportunity } from "./api/getOpportunity";
import { useState } from "react";
import Tag from "../../components/Tag/Tag";
import ButtonAlternative from "../../components/Button/ButtonAlternative";
import Button from "../../components/Button/Button";


const OpportunityDetail = ({id}) => {
  const [opportunity, setOpportunity] = useState({})
  const { isPending, error, data } = useQuery({
    queryKey: [`opportunity-${id}`],
    queryFn: async () => {
      const data = await getOpportunity(id);
      setOpportunity(data.data);
      return data;
    }
  })

  if (isPending) return "skeleton"

  if (error) return 'An error has occurred: ' + error.message
  console.log(opportunity)

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 z-[1] p-8 flex flex-col">
          <h1 className="text-primary-white text-3xl font-bold text-center">{opportunity.name}</h1>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {opportunity.tags.map((t) => <Tag className='border-purple-400 bg-purple-400 text-purple-100'>{t.name}</Tag>)}
          </div>
          <ButtonAlternative className='text-2xl text-purple-400 mt-6 self-center'>Enroll Now!</ButtonAlternative>
        </div>
        <img className="w-full object-cover h-[30vh] brightness-75" src={opportunity.image}></img>
      </div>
      <div className="container">
        <div className="grid grid-cols-3 gap-8 py-8">
          <button className="outline-none bg-purple-400 text-xl text-purple-100 rounded-lg px-2">
            Overview
          </button>
          <button className="outline-none bg-primary-white text-xl text-purple-100 rounded-lg px-2">
            Schedule
          </button>
          <button className="outline-none bg-primary-white text-xl text-purple-100 rounded-lg px-2">
            Review
          </button>
        </div>
        <p className="rounded-xl text-lg bg-primary-white p-4 break-words">
          {opportunity.body}
        </p>
        <p className="capitalize text-lg bg-primary-white mt-8 p-2 rounded-xl inline-block">
          📍 {opportunity.location.city}, {opportunity.location.country}
        </p>
      </div>
    </div>
  )
}

export default OpportunityDetail