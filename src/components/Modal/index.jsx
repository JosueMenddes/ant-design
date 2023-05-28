import React from "react"
import {Modal} from  "antd"

const PKModal = (prop = {visible: false, cls: ()=> {}})=> {
    return (
        <Modal open={prop.visible} onCancel={prop.cls} >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default PKModal