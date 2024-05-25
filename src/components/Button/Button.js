const Button = ({ children, className, onClick }) => (
  <button onClick={onClick} className={"btn br border border-primary-white bg-purple-400 "+ className}>
    {children}
  </button>
)

export default Button;