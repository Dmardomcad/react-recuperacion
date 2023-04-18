import React from 'react'

const Contact = () => {
  return (
    <>
      <section className='contacto'>
        <h3>CONTACTE CON NOSOTROS</h3>
        <form className='formulario-contacto'>
          <ul>
            <li>
              <label htmlFor="nombre">Nombre: </label>
              <input type="text" placeholder='Nombre' />
            </li>
            <li>
              <label htmlFor="email">Email: </label>
              <input type="text" placeholder='Email' />
            </li>
            <li>
              <textarea className="espacio-mensaje" cols="30" rows="10" placeholder='Por favor introduzca su mensaje'></textarea>
              <button className='btn-registro' type='submit'>Enviar</button>
            </li>
          </ul>
        </form>
      </section>
    </>
  )
}

export default Contact