
import { Button, Image } from 'react-bootstrap';
import './Home.css'
import Footer from "./../Footer/Footer";
import AddUser from "./../AddUser/AddUser";
import { useState, useEffect } from "react";
import User from "./../User/User";
const Home = () => {
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
                email: email
            }),
            headers: {
                "content-type": "application/json; charset=UTf-8",

            }
        })
            .then((res) => {
                if (res.status !== 201) {
                    return
                } else {
                    return res.json()
                }
            })
            .then((data) => {
                setUsers((users) => [...users, data]);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <div>
                        <Image
                            className='home-image'
                            src=
                            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
                            rounded
                        />
                    </div>
                </div>
                <div className="col-md-10 home-text">
                    <h1 className='home-text-1'>I PHONE- <small>10 pro</small> </h1>
                    <h1 className='home-text-2'>Lst phone </h1>
                    <p className='mt-4 text-info fs-5 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Officia explicabo, nulla cum minima magni aspernatur.</p>
                    <hr />
                </div>
                <h3 className='home-comment text-secondary mt-4'>Comment</h3>
                <br />
                <div className="container mt-5 ">
                    <div>
                        <br />
                        <AddUser onAdd={onAdd}></AddUser>
                        <div>
                            {users.slice(0, 3).map((user) => (
                                <User
                                    id={user.id}
                                    key={user.id}
                                    name={user.name}
                                    email={user.email}
                                ></User>
                            ))}
                        </div>
                    </div>
                    <Button><a className='comment-btn' href="./../Reviews"> More Comment</a> </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;