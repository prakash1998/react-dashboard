import React, { useState, useEffect } from 'react'

const Widget1 = ({ refreshHook }) => {
    const [value, setvalue] = useState(1)

    useEffect(() => {
        setvalue(value => value + 1)
    }, [refreshHook])

    return (
        <div> {value} </div>
    )
}

export default Widget1

export const Comp1Widget = {
    id: 'item1',
    Component : Widget1,
    refreshInterval : 2000,
    backgroundColor : 'yellow',
    preferedY : 30,

}