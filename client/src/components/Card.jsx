import React from "react"



export default function Card({name,image,genres}){

    return(
        <div>
            <h3>{name}</h3>
            <h6>{genres}</h6>
            <img src={image} alt="404 not found" width="200px" height="200px"/>
        </div>
    )
}