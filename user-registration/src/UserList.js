import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { getUsers} from './api'

export const UserList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const users = await getUsers()
            setItems(users)
        }
        fetchItems()
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map( user => (
                            <tr key={user._id}>
                                 <td>
                                     {user.Lname}, {user.Fname} {user.Mname}
                                 </td>
                                 <td>
                                     <Link to={`/edit/${user._id}`}> Edit </Link>
                                 </td>
                                 <td>
                                     <Link to={`/view/${user._id}`}> View </Link>
                                 </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>

        </div>
    )} 
