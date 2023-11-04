import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const CreateListButton = () => {
  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
    <Link to="/createlist">
    <div className="create-list-button">
    <Button className="btn btn-success shadow-lg rounded-pill px-4 border-0">
    <i className="fa fa-list px-3"></i>Create List
    </Button>
    </div>
    </Link>
    </div>
  )
}

export default CreateListButton