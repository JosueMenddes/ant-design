import React from "react";
import { Button } from "antd";

const PKButton = (prop = {type: '', click: ()=>{}})=> {
    return <Button type={prop.type} onClick={prop.click}>{prop.children}</Button>
}

export default PKButton