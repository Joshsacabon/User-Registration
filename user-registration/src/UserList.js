import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

export const UserList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems ([
            {Lname: "foo", id: 0},
            {Lname: "bar", id: 1},
            {Lname: "barz", id: 2},
        ])
    },[ ])

    return (
        <div className="container">
        <div className="mt-3">
            <h3>UserList</h3>
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map( user => (
                            <tr key={user.id }>
                                 <td>
                                     {user.Lname}
                                 </td>
                                 <td>
                                     <Link to={`/edit/${user.id}`}> Edit </Link>
                                 </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>

        </div>
    )} 
