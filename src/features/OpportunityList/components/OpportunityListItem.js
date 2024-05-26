import Tag from "./Tag"

const OpportunityListItem = ({ name, image, description, location, tags }) => (
  <div className="card card-side shadow-xl grid grid-cols-[1fr,2fr]">
    <figure><img className="w-full h-full object-cover" src={image}/></figure>
    <div className="card-body bg-gradient-to-br from-primary-white to-purple-400 rounded-br-xl rounded-tr-xl py-4">
      <h2 className="card-title text-purple-100 text-sm">{name}</h2>
      <p className="text-xs">{description.slice(0,50) + '...'}</p>
      <div className="flex flex-wrap gap-2 items-start">
        {tags.map((t) => <Tag>{t.name}</Tag>)}
      </div>
      <div className="card-actions justify-start">
        <button className="text-xl font-bold text-purple-100">View</button>
      </div>
    </div>
  </div>
)

export default OpportunityListItem