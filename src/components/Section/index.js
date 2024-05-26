const Section = ({children, className}) => (
  <section className={`min-w-full ${className}`}>
    {children}
  </section>
)

export default Section