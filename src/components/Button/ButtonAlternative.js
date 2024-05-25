const ButtonAlternative = ({ children, className, onClick }) => (
  <button onClick={onClick} className={"btn rounded-2xl px-6 border border-2 border-primary-white bg-purple-200 "+ className}>
    {children}
  </button>
)

export default ButtonAlternative;