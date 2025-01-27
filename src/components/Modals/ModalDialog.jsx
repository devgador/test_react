import { motion } from "motion/react"
import React from "react";
import { useDispatch } from "react-redux"
import { cleanFormLogin } from "../../store/form/formSlice.js"

// eslint-disable-next-line react/prop-types
const ModalDialog = ({ visible, onClose }) => {
    const dispatch = useDispatch()
    if (!visible) {
        return null;
    }

    const handleLogout = () => {
        try {
            dispatch(cleanFormLogin());
            onClose();

        } catch (e) {
            console.error(e);
            alert("Ocurrió un error al intentar cerrar sesión. Por favor, inténtelo más tarde.");  
        }

    };

    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-dialog"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <p>Estas seeguro que quieres cerrar session? </p>
                    <button type="button"
                        onClick={handleLogout}
                    > Presiona para salir!!!
                    </button>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalDialog;