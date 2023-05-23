import React, { Children, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterLoginForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    mobile: '',
    terms: false
  }
  
  const { user, setUser} = useContext(UserContext)
  const [ users, setUsers] = useState(localStorage.getItem('registeredUsers') ? JSON.parse(localStorage.getItem('registeredUsers')) : []) 
  // ^ if localstorage contains registered user then parse it and get the data, if not, initializate into an empty array ^
  const navigate = useNavigate()
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm( {mode:"onChange"},
    {defaultValues: initialValues}
  ); // "onBlur" is another good option
  

  const onSubmit = (e) => { 
    const data = { username: e.username ,
                   email: e.email,
                   password: e.password,
                   mobile: e.mobile, 
                   terms: e.terms }
    setUsers(JSON.parse(localStorage.getItem("registeredUsers")))
    users.push(data) // might be better to use spread operator??? 
    localStorage.setItem("registeredUsers", JSON.stringify(users))
    console.log(JSON.stringify(data))
    console.log(user)
    console.log(users)
    navigate('/profile')
  }

  // Context testing
  console.log(`saludo desde el login ${useContext(UserContext)}`)

  return (
    <>
      <section className="registro">
        <form className="formulario-registro" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            placeholder="Username"
            name='username'
            id='username'
            {...register("username", {
              required: {
                value: true,
                message: "Se debe rellenar el campo",
              },
              maxLength: {
                value: 15,
                message: "Username debe tener como máximo 15 caracteres",
              },
            })}
          />
          {errors.username && (
            <p className="error">{errors.username.message}</p>
          )}

          <label htmlFor="Email">Email: </label>
          <input
            type="text"
            placeholder="Email"
            name = 'email'
            id = 'email'
            onChange={e => setUserName(e.target.value)}
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
            type="password"
            placeholder="Password"
            name = "password"
            id ="password"
            {...register("password", {
              required: {
                value: true,
                message: "Se debe rellenar el campo",
              },
              maxLength: {
                value: 30,
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

          <label htmlFor="mobile">Teléfono móvil: </label>
          <input
            type="tel"
            placeholder="Teléfono móvil "
            name = "mobile"
            id = "mobile"
            {...register("mobile", {
              required: {
                value: true,
                message: "Se debe rellenar el campo",
              },
              pattern: {
                value: /^\d{9}$/,
                message: "Debe ser un número de 9 dígitos."
              }
            })}
          />
          {errors.mobile && (
            <p className="error">{errors.mobile.message}</p>
          )}

          <label htmlFor="terms">Acepto los terminos y condiciones: </label>
          <input
            type="checkbox"
            name = "terms"
            id = "terms"
            {...register("terms", {
              required: {
                value: true,
                message: "Se deben aceptar los terminos y condiciones",
              }
            })}
          />
          {errors.terms && (
            <p className="error">{errors.terms.message}</p>
          )}
          <Button text="Registrarse" type='submit'/>
        </form>
      </section>
    </>
  );
};

export default RegisterLoginForm;
