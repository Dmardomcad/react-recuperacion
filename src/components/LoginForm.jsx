import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm( {mode:"onChange"});

  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [logedUser, setLogedUser] = useState([])
  const [data, setData ] = useState((localStorage.getItem('registeredUsers') ? JSON.parse(localStorage.getItem('registeredUsers')) : []))  




  const onSubmit = (e) => {
    const loginData  = {
      email: e.email,
      password: e.password
    }

    data.map( userData =>{
      if(loginData.email === userData.email && loginData.password === userData.password){
        setLogedUser(userData)
        logedUser.push(userData)
        window.localStorage.setItem('logedUser', JSON.stringify(logedUser))
        setUser(true)
        navigate('/profile')
      }
      else {
        console.log('error usuario no encontrado')
      }
    })
  }

  return (
    <>
      <section className="registro">
        <form className="formulario-registro"  onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="Email">Email: </label>
          <input
            type ="text"
            placeholder ="Email"
            name = 'email'
            id = 'id'
            {...register("email", {
              required: {
                value: true,
                message: "Se debe rellenar el campo",
              },
              maxLength: {
                value: 30,
                message: "El email puede tener como máximo 30 caracteres.",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Debe ser un email valido",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <label htmlFor="Password">Password: </label>
          <input
            type = "password"
            placeholder = "Password"
            name = 'password'
            id = 'password'
            {...register("password", {
              required: {
                value: true,
                message: "Se debe rellenar el campo",
              },
              maxLength: {
                value: 25,
                message: "La password puede tener como máximo 25 caracteres.",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: 'La password debe tener como mínimo 8 caracteres y al menos una letra y un número.'
              }
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
          
          <NavLink to="/register"><p>¿No tienes cuenta?...</p></NavLink>
          <Button text="Login" />
        </form>
      </section>
    </>
  );
};

export default LoginForm;
