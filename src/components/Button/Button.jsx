import './Button.css'

const Button = ({ text, value, activeFilter, onClick }) => {
  return (
    <button
      type="button"
      className={
        activeFilter === value ? 'button-filter button-filter--active' : 'button-filter'
      }
      onClick={() => onClick(value)}
    >
      {text}
    </button>
  )
}

export default Button
