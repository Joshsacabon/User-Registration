import React from 'react'
import { UserForm } from './UserForm';


export const CreateUser = () => {

      const onSubmit = ((data) => {
        alert(JSON.stringify(data))
      });

    return(
        <div className="container text-dark bg-info rounded">
        <div className="mt-3 p-3">
            <h3>Creating a User</h3>
            <UserForm onSubmit={onSubmit}/>
        </div>
        </div>
    )
}