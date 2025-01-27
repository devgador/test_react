import React from "react"
import useForm from "../../hooks/useForm.js"

const FormLoginWithHook = ({ titleForm }) => {
  const { formData, handleChange } = useForm({
    username: "",
    email: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("datos del formulario", formData)
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

export default FormLoginWithHook

