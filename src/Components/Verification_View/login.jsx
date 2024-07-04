import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdHotel } from "react-icons/md";
import './verification.css'

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate("/");
  const submitFun = (data) => {
    let user_data = JSON.parse(localStorage.getItem(data.email));
    if (user_data && user_data.password === data.password) {
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="verify-container">
      <h1>Login</h1>
      <MdHotel className="icon" />
      <form action="" onSubmit={handleSubmit(submitFun)}>
        <input
          type="text"
          name="username"
          placeholder="Email"
          {...register("email")}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <span><Link to="/register">Register</Link></span>  here?
      </p>
    </div>
  );
};
