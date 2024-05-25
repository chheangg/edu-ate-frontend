const Button = ({ children, className, onClick }) => (
  <button onClick={onClick} className={"btn rounded-xl border border-2 border-primary-white bg-purple-400 "+ className}>
    {children}
  </button>
)

export default Button;