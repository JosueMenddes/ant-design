import React, {useState} from "react";
import {Button} from 'antd'
import PKModal from "./components/Modal";


const App = ()=> {
    const [status, setStatus] = useState(false)

    const closeModal = ()=> setStatus(false)
    const openModal = ()=> setStatus(true)

    return (
        <>
            <h1>Hedding</h1>
            <Button onClick={openModal}>open</Button>
            <PKModal visible={status} cls={closeModal} />
            {console.log(status)}
        </>
    )
}

export default App