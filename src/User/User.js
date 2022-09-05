import React from 'react';
import { Button } from 'react-bootstrap';
import './User.css'

const User = ({ id, name, email, onDelete }) => {
    const handleDelete = () => {
        onDelete(id)
    }
    return (

        <div>
            <div className='list'>

                <h6 className='list-name'><small className='list-name-text'>Name: </small> {name}</h6>
                <p className='list-name'><small className='list-name-text'>Email: </small> {email}  </p>
                <span>

                    <Button variant="primary" onClick={handleDelete}>delete</Button>
                </span>
            </div>
        </div>
    );
};

export default User;