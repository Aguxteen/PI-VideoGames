import React from "react"
import {Link} from "react-router-dom"
import { BigDiv, Butonn,Mole ,AnimationZone,Tierra} from "./StyledComponents"
import mole from "../TrollMole.gif"
import rock from "../DirtBlock.png"
export default function Landing(){

    return(
        <div>
            <AnimationZone>
            <BigDiv > 
            <h2>PI Pedro Peyon</h2>
            <Link to="/home" >
                <Butonn>Videogames</Butonn>
            </Link>
        </BigDiv>

        <Tierra src={rock} alto="piedra"/>
            <Mole styles={{height:"300px"}}src={mole} alt="Mole"/>
            
        
        </AnimationZone>
        </div>
    )

}