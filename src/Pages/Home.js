import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {

    //Create the object for storing user information
    const [users,setUsers] = useState([])

    //useEffect-> By using this we can tell the react that component needs to do something
            // after the render

    //we use this useEffect hook to load the user information everytime page is load.
    useEffect(()=>{
        //console.log("This is sample code for crud operations.")
        loadUsers();
    },[]);     //here empty array gives so it will run only when page is load otherwise it will load unlimited times.

    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/users");
        //console.log(result.data);    //it will display data on console
        setUsers(result.data);    //it will display data on webpage
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table class="table border-secondary shadow">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=>(
                                <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-primary mx-2">View</button>

                                    <Link className="btn btn-outline-primary mx-2" 
                                    to={`/edituser/${user.id}`}>Edit</Link>

                                    <button className="btn btn-danger mx-2">Delete</button>
                                </td>
                                </tr>
                                
                            ))
                        }
                        
                    </tbody>
                    </table>
            </div>  
        </div>
    )
}
