import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

const RegisterLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <section className="registro">
        <form className="formulario-registro" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            placeholder="Username"
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

          <label htmlFor="Nickname">Nickname: </label>
          <input
            type="text"
            placeholder="Nickname"
            {...register("Nickname", { required: true, maxLength: 25 })}
          />
          <label htmlFor="Email">Email: </label>
          <input
            type="text"
            placeholder="Email"
            {...register("Email", {
              required: true,
              maxLength: 60,
              pattern: /^\S+@\S+$/i,
            })}
          />
          
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            onChange={(e) => {
              lastName.onChange(e);
              setError("lastName", {
                types: {
                  required: "This is required",
                  minLength: "This is minLength",
                },
              });
            }}
          />
          {errors.lastName && errors.lastName.types && (
            <p>{errors.lastName.types.required}</p>
          )}
          <Button text="Registrarse" />
        </form>
      </section>
    </>
  );
};

export default RegisterLoginForm;
