import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdHotel } from "react-icons/md";
import './verification.css'

export const Register =()=> {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const submitFun =(data)=> {
        localStorage.setItem(data.email, JSON.stringify({password: data.password, username:data.username})); 
        navigate('/login'); 
    }
    return(
        <div className='verify-container'>
            <h1>Create Account</h1>
            <MdHotel className='icon' />
            <form onSubmit={handleSubmit(submitFun)}>
                <input type="text" name="name" placeholder="User_Name" {...register('username')} />
                <input type="text" name="email" placeholder="Email" {...register('email')} />
                <input type="password" name="password" placeholder="Password" {...register('password')} />
                <button type="submit">Create</button>
            </form>
            <p>
               Already have an account? <span><Link to="/login">Login</Link></span>!
            </p>
        </div>
    )
}