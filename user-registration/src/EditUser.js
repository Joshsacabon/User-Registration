import React, { useState, useEffect } from 'react'
import { UserForm } from './UserForm'

export const EditUser = () => {
    const [user, setUser] = useState();

    useEffect(() => { 
        setUser({
            Lname: "foos"
        })
    },[ ])

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return user ? (
        <div className="container text-dark bg-info rounded">
        <div className="mt-3 p-3">
            <h3>Edit a User</h3>
            <UserForm user={user} onSubmit={onSubmit}/>
        </div>
        </div>
    ): (<div> Loading ....</div>)
}