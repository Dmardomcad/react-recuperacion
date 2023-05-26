import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    contactmessage: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" }, { defaultValues: initialValues });

  const onSubmit = (e) => {
    reset();
  };

  return (
    <>
      <section className="contacto">
        <h3>CONTACTE CON NOSOTROS</h3>
        <form className="formulario-contacto" onSubmit={handleSubmit(onSubmit)}>
          <ul>
            <li>
              <label htmlFor="nombre">Nombre: </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                {...register("name", {
                  onChange: (e) => {
                    const trimmedValue = e.target.value.trim();
                    e.target.value = trimmedValue;
                  },
                  required: {
                    value: true,
                    message: "Field must be filled.",
                  },
                  maxLength: {
                    value: 15,
                    message: "Name must have a maximum of 15 characters.",
                  },
                })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </li>
            <li>
              <label htmlFor="email">Email: </label>
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
                    message: "Email can have a maximum of 30 characters.",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Must be a valid email",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </li>
            <li>
              <textarea
                className="espacio-mensaje"
                name="contactmessage"
                id="contactmessage"
                cols="30"
                rows="10"
                placeholder="Por favor introduzca su mensaje"
                {...register("contactmessage", {
                  required: {
                    value: true,
                    message: "Please write a message",
                  },
                  maxLength: {
                    value: 70,
                    message:
                      "Your message is too long, you can contact us by Email at example@example.es",
                  },
                })}
              ></textarea>
              {errors.contactmessage && (
                <p className="error">{errors.contactmessage.message}</p>
              )}
            </li>
          </ul>
          <button className="btn-registro" onClick={handleSubmit} type="submit">
            Send
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
