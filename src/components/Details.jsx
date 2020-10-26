import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, useParams } from 'react-router-dom'


const Details = () => {

    const [users, setUsers] = useState({});
    const { id } = useParams()
    const getUsers = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let users = await res.json();
        setUsers(users);
        console.log(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Fragment>
            <div className="container">
                <h1 className="m-5">JSON Placeholder User Details</h1>
                <div className="row">
                    <div className="card bg-dark mx-5 my-2" style={{ width: "19rem" }} key={id}>
                        <div className="card-body text">
                            <h4 className="card-title">Username: {users.username}</h4>
                            <h4 className="card-title">Email: {users.email}</h4>
                            <h4 className="card-title">Company: {users.company?.bs}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Details;
