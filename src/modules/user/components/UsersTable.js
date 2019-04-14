import React from "react";

const UsersTable = ({users}) => (
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
            return <tr>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{username}</td>
                <td><button className= "btn btn-primary">Delete</button></td>
            </tr>
        })}
        </tbody>
    </table>
);

export default UsersTable;