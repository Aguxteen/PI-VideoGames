import React from "react"
import { DivCard,ButtonMini,Imagen } from "./StyledComponents"
import { Link } from "react-router-dom"

export default function Card({name,image,genres, id}){
    let generos=[]
    console.log("ASIIIII", genres)
    for(let x=0;x<genres.length;x++){
        if(x===genres.length-1){
            generos.push(genres[x])
        }else{

            generos.push(genres[x]+", ")
        }
    }
    return(
        <DivCard>
             <Link  to= {"/Game/"+id}><ButtonMini>
            <h3>{name}</h3>
            <p>{generos}</p>
            <Imagen src={image}  alt="404 not found" width="240px" height="200px"/>
            <br/>
           </ButtonMini> </Link>  
        </DivCard>
    )
}