import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Dele from '@material-ui/icons/DeleteSweep';




function Listitem({ item,index, removeItem }) {
    const [isClicked, setIsClicked] = useState(false)
    // const iconstyle={"&:hover": { Color: "yellow" }}
    return (
        <li className={clsx({ isliClicked: isClicked })} onClick={() => setIsClicked(!isClicked)} key={item.id}>{item.name}
            <IconButton style={{ color: 'white' }} aria-label="delete" 
            onClick={() => removeItem(index, item.id,item.name)}
            // onClick={() => removeItem(index, item.id)}
            >
                <Dele />
            </IconButton>
        </li>
    )
}

export default Listitem