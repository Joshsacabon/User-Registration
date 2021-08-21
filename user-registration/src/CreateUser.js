import React from 'react'
import { UserForm } from './UserForm';
import { useHistory } from 'react-router';


export const CreateUser = () => {

    const history = useHistory()

      const onSubmit = ((data) => {
        alert(JSON.stringify(data))
        history.push('/')
      });

    return(
        <UserForm onSubmit={onSubmit}/>
    )
}