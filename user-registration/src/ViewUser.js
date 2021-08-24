import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { getUser, } from './api';


export const ViewUser = () => {
    const match = useRouteMatch()
    const [user, setUser] = useState();

    useEffect(() => { 
        const fetchUser = async () =>{
            const user = await getUser(match.params.id)
            setUser(user)
        }
        fetchUser()
    },[match])


    return user ? (
        <div className="container text-dark bg-info rounded">
        <div className="mt-3 p-3">
            <h3>PERSONAL INFORMATION</h3>
            <h5>Full Name:</h5>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <input className="form-control " value={user.Fname} type="text" id="Fname" readOnly/>
                        <label class="text-secondary"  htmlFor="Fname">First Name</label>
                    </div>
                    <div className="col">
                        <input className="form-control " value={user.Mname} type="text" id="Mname" readOnly/>
                        <label class="text-secondary" htmlFor="Mname">Middle Name</label>
                    </div>
                    <div className="col">
                        <input className="form-control " value={user.Lname} type="text" id="Lname"readOnly/>
                        <label class="text-secondary" htmlFor="Lname">Last Name</label>
                    </div>
                </div>
                <br/>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <label htmlFor="Birthday"><h5>Birthday:</h5></label>
                        <input className="form-control " value={user.Birthday} type="date" id="Birthday"readOnly/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="Age"><h5>Age:</h5></label>
                        <input className="form-control " value={user.Age} type="text" id="Age"readOnly/>
                    </div>
                </div>
                <br/>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <label htmlFor="EmailAdd"><h5>Email Address:</h5></label>
                        <input className="form-control " value={user.EmailAdd} type="text" id="EmailAdd"readOnly/>
                    </div>
                    <div className="col">
                        <label htmlFor="CellNumber"><h5>Phone Number:</h5></label>
                        <input className="form-control " value={user.CellNumber} type="text" id="CellNumber" readOnly/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="Gender"><h5>Gender:</h5></label>
                        <select class="form-select" id="Gender" value={user.Gender} disabled >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <br/>
                <h5>Address:</h5>
                <div className="row g-3 align-items-center">
                    <div className="col-12">
                        <input className="form-control " value={user.SAddress} type="text" id="SAddress"readOnly/>
                        <label class="text-secondary"  htmlFor="SAddress">Street Address</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " value={user.City} type="text" id="City"readOnly/>
                        <label class="text-secondary" htmlFor="City">City</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " value={user.Province} type="text" id="Province"readOnly/>
                        <label class="text-secondary" htmlFor="Province">Province</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " value={user.zipcode} type="text" id="zipcode"readOnly/>
                        <label class="text-secondary" htmlFor="zipcode">Zip Code</label>
                    </div>
                    <div className="col-12">
                        <input className="form-control " value={user.country} type="text" id="country"readOnly/>
                        <label class="text-secondary" htmlFor="country">Country</label>
                    </div>
                </div>
                <br/>
                <div className="form-group">
                    <Link  to={`/edit/${user._id}`} className="btn btn-primary ">
                        Edit
                    </Link>
                </div>
            <br/>
            </div>
        </div>
    ): (<div> Loading ....</div>)
}