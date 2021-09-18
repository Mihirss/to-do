import React from 'react'

function Card({item}) {
    return (
        <div>
            <div className="card">
            {/* <img src={feedData.avatar} className="card-img-top" alt="..."> */}
            <div className ="card-body">
            <h5 className ="card-title">Name: {item.first_name}</h5>
            <p className ="card-text">Email:{item.email}</p>
            {/* <a href="#" className ="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
        </div>
    )
}

export default Card
