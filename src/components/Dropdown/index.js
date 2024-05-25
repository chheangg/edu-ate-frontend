const DropDown = ({ children, className }) => (
  <select
    className={"outline-none rounded-lg border-primary-white border-2 bg-purple-400 text-purple-100 text-xl !py-[0] w-full " + className}
    type='text' 
  >
    <option disabled selected>{children}</option>
  </select>
)

export default DropDown