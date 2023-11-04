import { Link } from 'react-router-dom'

const CreateListButton = () => {
  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
    <CreateListButton>
    <Link to="/createlist">
    <div className="create-list-button">
    <button className="btn btn-success shadow-lg rounded-pill px-4 border-0">
    <i className="fa fa-list px-3"></i>Create List
    </button>
    </div>
    </Link>
    </CreateListButton>
    </div>
  )
}

export default CreateListButton