import React, { useState, useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getUser, updateUser } from './api';
import { UserForm } from './UserForm'

export const EditUser = () => {
    const match = useRouteMatch()
    const history = useHistory()
    const [user, setUser] = useState();

    useEffect(() => { 
        const fetchUser = async () =>{
            const user = await getUser(match.params.id)
            setUser(user)
        }
        fetchUser()
    },[match])

    const onSubmit = async (data) => {
        await updateUser(data, match.params.id)
        history.push("/")
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