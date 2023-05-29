import React from 'react'
import { Tabs } from 'antd'

const PKTabs = ()=> {
    const items = [
        { label: 'Inicio', key: 'item-1', children: 'Content 1' }, // remember to pass the key prop
        { label: 'Minhas consultas', key: 'item-2', children: 'Content 2' },
    ];

    return (<Tabs items={items} />)
}

export default PKTabs