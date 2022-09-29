import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { editEmployeeData, postEmployeeData } from '../Actions/CrudApiActions';
import EmployeeTable from "./EmployeeTable";


function EmployeeForm() {

    const [data, setData] = useState({
        id: '',
        name: '',
        address: '',
        contact: ''
    });

    const dispatch = useDispatch();
    const reducerState = useSelector((state) => (state));
    const crudReducer = reducerState.crudApiReducer;
    const { postEmployeeResponse, getEmployeeResponse, deleteEmployeeResponseeditEmployeeResponse, } = crudReducer;

    const inputChangeHandler = (event) => {
        // 1st method
        // const name = event.target.name;
        // const value = event.target.value;
        // setData({ ...data, [name]: value });

        // 2nd method
        setData({ ...data, [event.target.name]: event.target.value })
        // console.log(data)
    }

    // POST EMPLOYEE DATA
    const submitHandler = (e) => {
        console.log("event.....", data)
        dispatch(postEmployeeData.start(data));
    }

    //EDIT EMPLOYEE DATA
    const editHandler = (item) => {
        setData({ ...item })
    }

    //for updated data
    const [user, setUser] = useState([])

    const updateHandler = (editItem) => {
        console.log("editItemData......", data);
        dispatch(editEmployeeData.start(data));
        setUser(data);
    }




    // destructuring form state Object 
    const { id, name, address, contact } = data;
    return (
        <>
            <form  >
                <div>
                    Employee Id :
                    <input type="text" name='id' onChange={inputChangeHandler} placeholder='Enter employee id' value={id} />
                </div><br />
                <div>
                    Employee name :
                    <input type="text" name='name' onChange={inputChangeHandler} placeholder='Enter employee name' value={name} />
                </div><br />
                <div>
                    Employee address :
                    <input type="text" name='address' onChange={inputChangeHandler} placeholder='Enter employee address' value={address} />
                </div><br />
                <div>
                    Employee contact :
                    <input type="text" name='contact' onChange={inputChangeHandler} placeholder='Enter employee contact' value={contact} />
                </div><br />
                <div>
                    <button type='button' className='btn btn-primary btn-sm' onClick={submitHandler} >Submit</button> ||
                    <button type='button' className='btn btn-primary btn-sm' onClick={() => updateHandler()}  >Update</button>
                </div>
            </form>
            <br></br>
            <div><EmployeeTable editForm={editHandler} updatedData={user} /></div>
        </>
    )
}

export default EmployeeForm
