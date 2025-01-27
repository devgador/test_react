import { useState } from "react"
import ModalDialog from "../Modals/ModalDialog.jsx";

const Logout = ({ visible, userName }) => {
    if (!visible) {
        return null;
    }
    const [showModal, setModal] = useState(false)
    const logout = () => {
        setModal(true)

    }
    const onClosModal = () => {
        setModal(false);
    }

    return (
        <>
            <ModalDialog visible={showModal} onClose={onClosModal}></ModalDialog>
            <span className="navbar-text">{userName} &nbsp;</span>
            <button className="button" onClick={logout}>
                Logout
            </button>
        </>
    )

}

export default Logout 