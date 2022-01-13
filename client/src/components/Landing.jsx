import React from "react"
import {Link} from "react-router-dom"
import { BigDiv, Butonn } from "./StyledComponents"

export default function Landing(){

    return(
        <BigDiv > 
            <h1>PI Pedro Peyon Videogames</h1>
            <Link to="/home" >
                <Butonn>Llamar juegos</Butonn>
            </Link>
        </BigDiv>

    )

}