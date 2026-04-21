import './AddButton.css'

const AddButton = ({ text = '+ Add Job', onClick, className = '' }) => {
  return (
    <button
      type="button"
      className={`add-button ${className}`.trim()}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default AddButton
