import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <section className="login">
        <form className="formulario-login" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="Email">Email: </label>
          <input
            type="text"
            placeholder="Email"
            {...login("email", {
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
            {...login("password", {
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

          {/*           <label htmlFor="repeat-password">Repeat Password:</label>
          <input
            type="password"
            onChange={(e) => {
              lastName.onChange(e);
              setError("repeat-password", {
                types: {
                  required: "This is required",
                  minLength: "This is minLength",
                },
              });
            }}
          />
          {errors.password && errors.password.types && (
            <span>{errors.password.types.required}</span>
          )} */}

          <Button text="Login" />
        </form>
      </section>
    </>
  );
};

export default LoginForm;
