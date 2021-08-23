import React from 'react'
import { UserForm } from './UserForm';
import { createUser } from './api';
import { useHistory } from 'react-router-dom';


export const CreateUser = () => {
  const history = useHistory()

      const onSubmit = async (data) => {
       await createUser(data)
        history.push('/')
      };

    return(
        <div className="container text-dark bg-info rounded">
        <div className="mt-3 p-3">
            <h3>Creating a User</h3>
            <UserForm onSubmit={onSubmit}/>
        </div>
        </div>
    )
}