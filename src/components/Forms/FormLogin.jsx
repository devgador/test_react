import React, { useState } from "react"

const FormLogin = ({ titleForm }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("datos del formulario", formData)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>{titleForm}</h3>
      <div>
        <label htmlFor="username">UserName:</label>
        <input type="text" id="username" name="username" required value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormLogin

