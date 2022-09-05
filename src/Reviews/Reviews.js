import React, { useEffect, useState } from 'react';
import User from '../User/User';
import AddUser from "./../AddUser/AddUser";
import './Reviews.css'

const Reviews = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err);
            })
    }
    const onAdd = async (name, email) => {
        await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'post',
            body: JSON.stringify({
                name: name,
                email: email,
            }),
            headers: {
                "content-type": "application/json; charset=UTf-8",

            },
        })
            .then((res) => {
                if (res.status !== 201) {
                    return;
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setUsers((users) => [...users, data]);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const onDelete = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.status !== 200) {
                    return;
                }
                else {
                    setUsers(
                        users.filter((user) => {
                            return user.id !== id;
                        })
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>

            <br />
            {users.length}
            <AddUser onAdd={onAdd}></AddUser>
            <div>
                {
                    users.slice(0, 6).map((user) => (
                        <User
                            id={user.id}
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            onDelete={onDelete}
                        ></User>
                    ))
                }
            </div>
        </div>
    );
};

export default Reviews;