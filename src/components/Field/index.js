const Field = ({ children }) => (
  <input 
    className="outline-none rounded-lg border border-2 border-primary-white bg-none !bg-purple-400 w-full py-1" 
    type='text' 
    value={children} 
    disabled
  />
)

export default Field;