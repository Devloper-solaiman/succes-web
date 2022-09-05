import React from 'react';
import './AddUser.css'


const AddUser = ({ onAdd }) => {

    const handleOnSubmit = (e) => {
        e.preventDefault()
        onAdd(e.target.name.value, e.target.email.value);
        e.target.name.value = "";
        e.target.email.value = "";
        console.log('click');

    }

    return (
        <div>
            <form className='' onSubmit={handleOnSubmit}>

                <input className='m-3 p-2 rounded text-white bg-info' placeholder='name' name="name" />
                <input className='m-3 p-2 rounded text-white bg-info' placeholder='Email' name="email" />
                <button className='bt' onSubmit={handleOnSubmit}>add</button>
                <hr />
            </form>
        </div>
    );
};

export default AddUser;