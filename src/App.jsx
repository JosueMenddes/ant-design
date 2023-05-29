import React, {useState} from "react";
import PKModal from "./components/Modal"
import PKTabs from './components/Tabs';
import PKButton from "./components/Button";

const App = ()=> {
    const [status, setStatus] = useState(false)

    const openModal = ()=> setStatus(true)
    const closeModal = ()=> setStatus(false)

    return (
        <>
            <PKButton type="primary" click={openModal}>open</PKButton>
            <PKTabs />
            <PKModal visible={status} close={closeModal}>
                <p>Default activate first tab.</p>
            </PKModal>
            {console.log(status)}
        </>
    )
}

export default App