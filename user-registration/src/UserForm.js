import React from 'react'
import { useForm } from 'react-hook-form';

export const UserForm = ({ user, onSubmit }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: { Lname: user ? user.Lname :""  },
    });

      const SubmitHandler = handleSubmit((data) => {
        onSubmit(data)
      });

    return(
        <div className="container text-dark bg-info rounded">
        <div className="mt-3 p-3">

            <h3>PERSONAL INFORMATION</h3>
            <form onSubmit={SubmitHandler}>
                <h5>Full Name:</h5>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <input className="form-control " {...register("Fname",)} type="text" id="Fname"/>
                        <label class="text-secondary"  htmlFor="Fname">First Name</label>
                    </div>
                    <div className="col">
                        <input className="form-control " {...register("Mname",)} type="text" id="Mname"/>
                        <label class="text-secondary" htmlFor="Mname">Middle Name</label>
                    </div>
                    <div className="col">
                        <input className="form-control " {...register("Lname",)} type="text" id="Lname"/>
                        <label class="text-secondary" htmlFor="Lname">Last Name</label>
                    </div>
                </div>
                <br/>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <label htmlFor="Birthday"><h5>Birthday:</h5></label>
                        <input className="form-control " {...register("Birthday",)} type="date" id="Birthday"/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="Age"><h5>Age:</h5></label>
                        <input className="form-control " {...register("Age",)} type="text" id="Age"/>
                    </div>
                </div>
                <br/>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <label htmlFor="EmailAdd"><h5>Email Address:</h5></label>
                        <input className="form-control " {...register("EmailAdd",)} type="text" id="EmailAdd"/>
                    </div>
                    <div className="col">
                        <label htmlFor="CellNumber"><h5>Phone Number:</h5></label>
                        <input className="form-control " {...register("CellNumber",)} type="text" id="CellNumber"/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="Gender"><h5>Gender:</h5></label>
                        <select class="form-select" id="Gender" {...register("Gender",)}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <br/>
                <h5>Address:</h5>
                <div className="row g-3 align-items-center">
                    <div className="col-12">
                        <input className="form-control " {...register("SAddress",)} type="text" id="SAddress"/>
                        <label class="text-secondary"  htmlFor="SAddress">Street Address</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " {...register("City",)} type="text" id="City"/>
                        <label class="text-secondary" htmlFor="City">City</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " {...register("Province",)} type="text" id="Province"/>
                        <label class="text-secondary" htmlFor="Lname">Province</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " {...register("zipcode",)} type="text" id="zipcode"/>
                        <label class="text-secondary" htmlFor="zipcode">Zip Code</label>
                    </div>
                    <div className="col-12">
                        <input className="form-control " {...register("country",)} type="text" id="country"/>
                        <label class="text-secondary" htmlFor="country">Country</label>
                    </div>
                </div>
                <br/>
                <div className="form-group">
                    <button  type="submit" className="btn btn-primary ">
                        Submit
                    </button>
                </div>
            <br/>
            </form>
        </div>
    </div>
        
    )
}