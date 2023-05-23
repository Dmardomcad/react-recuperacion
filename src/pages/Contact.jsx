import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [contactEmail, setContactEmail] = useState("")
  const [contactName, setContactName] = useState("")

  const handleSend = (e) => {
    e.preventDefault();
    setMessage("");
    setContactEmail("")
    setContactName("")
  };

  return (
    <>
      <section className="contacto">
        <h3>CONTACTE CON NOSOTROS</h3>
        <form className="formulario-contacto">
          <ul>
            <li>
              <label htmlFor="nombre">Nombre: </label>
              <input type="text"
               placeholder="Nombre"
               value={contactName}
               onChange={(e) => setContactName(e.target.value)} />
            </li>
            <li>
              <label htmlFor="email">Email: </label>
              <input type="text"
               placeholder="Email"
               value={contactEmail}
               onChange={(e) => setContactEmail(e.target.value)} />
            </li>
            <li>
              <textarea
                className="espacio-mensaje"
                cols="30"
                rows="10"
                placeholder="Por favor introduzca su mensaje"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </li>
          </ul>
          <button className="btn-registro" onClick={handleSend}>
            Enviar
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
