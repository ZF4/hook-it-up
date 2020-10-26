import React, {useState, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'

const Users = () => {

const [users, setUsers] = useState([]);

const getUsers = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await res.json();
    setUsers(users);
}

useEffect(() => {
    getUsers();
}, []);

return(
    <Fragment>
    <div className="container">
    <h1 className="m-5">JSON Placeholder Users</h1>
    <div className="row">
        {users.map((users, id) => {
            return (
                <Link to={`/details/${users.id}`}>
                    <div className="card bg-dark text mx-5 my-2" style={{ width: "19rem" }} key={id}>
                        <div className="card-body">
                            <h4 className="card-title">{users.name}</h4>
                        </div>
                    </div>
                </Link>
            );
        })}
    </div>
    </div>
  </Fragment>
)
}

export default Users;
