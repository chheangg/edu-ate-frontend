const OpportunitySkeleton = () => {
  <div className="card card-side shadow-xl grid grid-cols-[1fr,2fr]">
    <figure> <div className="skeleton h-32 w-full"></div></figure>
    <div className="card-body bg-gradient-to-br from-primary-white to-purple-400 rounded-br-xl rounded-tr-xl py-4">
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
    </div>
  </div>
}

export default OpportunitySkeleton