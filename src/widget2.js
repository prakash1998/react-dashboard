import React, { useState, useEffect } from 'react'

const Widget2 = ({ refreshHook }) => {
    const [value, setvalue] = useState(1);

    useEffect(() => {
        setvalue(value => value + 1)
    }, [refreshHook])

    return (
        <div > {value} </div>
    )
}

export default Widget2

export const Comp2Widget = {
    id: 'item2',
   Component:Widget2,
}