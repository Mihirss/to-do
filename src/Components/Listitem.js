import React from 'react';
import clsx from 'clsx';
import { useState } from 'react'



function Listitem({item,removeItem}) {
    const [isClicked, setIsClicked] = useState(false)
    return (
            <li className={clsx({isliClicked:isClicked})} onClick={()=> setIsClicked(!isClicked)} key ={item.id}>{item.name} <button onClick={()=> removeItem(item.id)}>Delete</button> </li>
    )
}

export default Listitem