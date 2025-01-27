
import { motion } from "motion/react"
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setFormLogin } from "../../store/form/formSlice.js"
import useForm from "../../hooks/useForm.js"
import ModalSuccess from "../Modals/ModalSuccess.jsx"
import ModalError from "../Modals/ModalError.jsx"
import { useState } from "react"



const FormWithMotionAndHook = ({ titleForm }) => {
  const dispatch = useDispatch()
  const useLogin = useSelector((state) => state.formRed.loginForm)

  const { formData, handleChange, resetForm } = useForm({
    username: "",
    password: "",
    email: "",
    module: useLogin.module,
  })
  useEffect(() => {
    if (useLogin.module === "") {
      resetForm()
    }
  }, [useLogin.module, resetForm])

  const [showPassword, setShowPassword] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showModalError, setShowModalError] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.password === useLogin.password) {
      dispatch(
        setFormLogin({
          username: formData.username,
          email: formData.email,
        }),
      )
      setShowModal(true)
      setShowModalError(false)
    } else {
      setShowModalError(true)
      setShowModal(false)
    }
  }

  const onCloseModalInfo = () => {
    setShowModal(false)
    setShowModalError(false)
  }

  return (
    <motion.div
      className="form-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModalSuccess
        visible={showModal}
        message={`Bienvenido ${useLogin.username} ${useLogin.email}`}
        onClose={onCloseModalInfo}
      />
      <ModalError visible={showModalError} message="Username/Password Incorrectos!!!" onClose={onCloseModalInfo} />

      <form onSubmit={handleSubmit}>
        <motion.h3 initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          {titleForm}
        </motion.h3>

        <motion.div className="form-group" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <label htmlFor="module">Module:</label>
          <input type="text" id="module" name="module" value={useLogin.module} readOnly />
        </motion.div>

        <motion.div className="form-group" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </motion.div>

        <motion.div className="form-group" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </motion.div>

        <motion.div className="form-group" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <label htmlFor="password">Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button className="button" type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
          <button className="button" type="submit">
            Enviar
          </button>
        </motion.div>
      </form>
    </motion.div>
  )
}

export default FormWithMotionAndHook
