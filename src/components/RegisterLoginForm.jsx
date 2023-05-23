import React, { Children, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterLoginForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    mobile: "",
    terms: false,
  };

  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState(
    localStorage.getItem("registeredUsers")
      ? JSON.parse(localStorage.getItem("registeredUsers"))
      : []
  );
  // ^ if localstorage contains registered user then parse it and get the data, if not, initializate into an empty array ^
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" }, { defaultValues: initialValues }); // "onBlur" is another good option

  const onSubmit = (e) => {
    const data = {
      username: e.username,
      email: e.email,
      password: e.password,
      mobile: e.mobile,
      terms: e.terms,
    };
    setUsers(JSON.parse(localStorage.getItem("registeredUsers")));
    users.push(data); // might be better to use spread operator???
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    navigate("/profile");
  };

  return (
    <>
      <section className="registro">
        <form className="formulario-registro" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Field must be filled.",
              },
              maxLength: {
                value: 15,
                message: "Username must have a maximum of 15 characters.",
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
            name="email"
            id="email"
            onChange={(e) => setUserName(e.target.value)}
            {...register("email", {
              required: {
                value: true,
                message: "Field must be filled.",
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
            name="password"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Field must be filled.",
              },
              maxLength: {
                value: 30,
                message: "The password can have a maximum of 25 characters.",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must be at least 8 characters and have at least a letter and a number.",
              },
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}

          <label htmlFor="mobile">Mobile phone: </label>
          <input
            type="tel"
            placeholder="Mobile phone"
            name="mobile"
            id="mobile"
            {...register("mobile", {
              required: {
                value: true,
                message: "Field must be filled.",
              },
              pattern: {
                value: /^\d{9}$/,
                message: "Must be a number of 9 digits.",
              },
            })}
          />
          {errors.mobile && <p className="error">{errors.mobile.message}</p>}

          <label htmlFor="terms">I accept terms & conditions: </label>
          <input
            type="checkbox"
            name="terms"
            id="terms"
            {...register("terms", {
              required: {
                value: true,
                message: "Terms and conditions must be accepted.",
              },
            })}
          />
          {errors.terms && <p className="error">{errors.terms.message}</p>}
          <Button text="Registrarse" type="submit" />
        </form>
      </section>
    </>
  );
};

export default RegisterLoginForm;
