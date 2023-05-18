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
    birthyear: '',
    terms: false
  }

  const { username, setUserName} = useState('')


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm( {mode:"onChange"},
    {defaultValues: initialValues}
  ); // "onBlur" is another good option
  


  const onSubmit = (data, e) => {
    e.preventDefault()
    let { username, email, password, mobile, terms } = data
    window.localStorage.setItem('username', username)
    window.localStorage.setItem('email', email)
    window.localStorage.setItem('password', password)
    window.localStorage.setItem('mobile', mobile)
    window.localStorage.setItem(terms, terms)
    setUser(true)
    console.log(JSON.stringify(data))
    console.log(user)
    navigate('/profile')
  }

  const { user, setUser} = useContext(UserContext)
  const { users, setUsers } = useState([])

  const navigate = useNavigate()
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
            onChange={e => setUserName(e.target.value)}
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
                value: /^\S+@\S+$/i,
                message: "Debe ser un email",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <label htmlFor="Password">Password: </label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "Se debe rellenar el campo",
              },
              maxLength: {
                value: 30,
                message: "La password puede tener como máximo 25 caracteres.",
              },
              minLength: {
                value: 8,
                pattern: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
                message:
                  "La password debe tener como mínimo 8 caracteres y al menos una letra y un número.",
              },
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}

          <label htmlFor="birthyear">Teléfono móvil: </label>
          <input
            type="tel"
            placeholder="Teléfono móvil "
            {...register("mobile", {
              required: {
                value: true,
                message: "Se debe rellenar el campo",
              },
              maxLength: {
                value: 9,
                message: "El número de teléfono debe tener como máximo 9 caracteres.",
              },
              minLength: {
                value: 9,
                message:
                  "El año de nacimiento debe tener como mínimo 9 caracteres.",
              },
            })}
          />
          {errors.mobile && (
            <p className="error">{errors.mobile.message}</p>
          )}

          <label htmlFor="terms">Acepto los terminos y condiciones: </label>
          <input
            type="checkbox"
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
