import React from "react";
import { useForm } from "react-hook-form";

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
          <label htmlFor="Username">Username: </label>
          <input
            type="text"
            placeholder="Username"
            {...register("Username",
            { required: true,
              maxLength: 20 })
            }
          />
          <label htmlFor="Nickname">Nickname: </label>
          <input
            type="text"
            placeholder="Nickname"
            {...register("Nickname",
            { required: true,
              maxLength: 25 })
            }
          />
          <label htmlFor="Email">Email: </label>
          <input
            type="text"
            placeholder="Email"
            {...register("Email", {
              required: true,
              maxLength: 60,
              pattern: /^\S+@\S+$/i,
            })
          }
          />
          <input type="submit" />
        </form>
      </section>
    </>
  );
};

export default RegisterLoginForm;
