import React from "react";
import {Link} from "react-router-dom";

const UsersTable = ({users, deleteAction, currentSignInUser}) => (
    <table className="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user, index) => {
            const {name, username} = user;
            return <tr key={index}>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{username}</td>
                <td>
                    {username === currentSignInUser.username
                        ? <Link to="/user/edit" className="btn btn-primary">Edit</Link>
                        : <button className="btn btn-primary" onClick={() => {deleteAction(username)}}>Delete</button>
                    }
                </td>
            </tr>
        })}
        </tbody>
    </table>
);

export default UsersTable;