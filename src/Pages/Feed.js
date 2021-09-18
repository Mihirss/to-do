import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card'

function Feeditem() {
    const [feedData, setFeedsdata] = useState([])
    // const [myData, setMyData] = useState([])

    useEffect(() => {
        async function getDAta() {
            const resource = await axios.get('https://reqres.in/api/users');
            console.log(resource)
            // const myData = resource
            setFeedsdata(resource.data.data)
            console.log(feedData)
        }
        getDAta();
    },[])
    return (
        <>
        {feedData.map((item)=>(
            <Card item={item}/>
        ))}
        </>
    )
}

export default Feeditem
