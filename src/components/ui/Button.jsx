const Button = ({ children, secondary = false }) => (
  <button className={`btn ${secondary ? '' : 'btn-primary'}`}>{children}</button>
)

export default Button
