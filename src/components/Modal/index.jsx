import React from "react"
import {Modal} from  "antd"

const PKModal = (prop = {visible: false, close: ()=> {}})=> {
    return (
        <Modal open={prop.visible} onCancel={prop.close} >
            {prop.children}
        </Modal>
    )
}

export default PKModal