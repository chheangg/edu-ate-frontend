const FullScreenLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-purple-300 to-purple-200 w-full min-h-[100vh] font-main">
      {children}
    </div>
  )
}

export default FullScreenLayout