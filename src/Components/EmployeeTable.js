import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { deleteEmployeeData, getEmployeeData } from '../Actions/CrudApiActions';


function EmployeeTable(props) {

    const [getData, setGetData] = useState([]);

    const dispatch = useDispatch();
    const reducerState = useSelector((state) => (state));
    const crudReducer = reducerState.crudApiReducer;
    const { postEmployeeResponse, getEmployeeResponse, deleteEmployeeResponse, editEmployeeResponse, } = crudReducer;

    console.log("test123", getEmployeeResponse)

    //GET EMPLOYEE DATA  , 2 nd method get the data witiout refreshing only passing value in [deleteEmployeeResponse..etc], This method used when redux saga use.it user friendly.
    useEffect(() => {
        dispatch(getEmployeeData.start());
    }, [postEmployeeResponse, deleteEmployeeResponse, editEmployeeResponse])


    useEffect(() => {
        setGetData(getEmployeeResponse)
    }, [getEmployeeResponse])


    //DELETE EMPLOYEE DATA
    const deleteHandler = (id) => {
        console.log(id);
        dispatch(deleteEmployeeData.start(id));
    }

    //EDIT(UPDATED) EMPLOYEE DATA
    useEffect(() => {
        setGetData(props.updatedData)
    }, [props.updatedData])
    return (
        <>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getData && getData[0] && getData.map((item, index) => {
                            return <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.contact}</td>
                                <td>
                                    <button type='button' className='btn btn-success btn-sm' onClick={() => props.editForm(item)} >
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </button>
                                    ||
                                    <button type='button' className='btn btn-danger btn-sm' onClick={() => deleteHandler(item.id)} >
                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default EmployeeTable
