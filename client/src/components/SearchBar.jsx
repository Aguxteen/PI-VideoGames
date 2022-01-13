import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../actions";

export default function SearchBar(){

    const[busqueda,setBusqueda] = useState("")
    const dispatch=useDispatch()

const handleInputChange =(e)=>{
    e.preventDefault()
    setBusqueda(e.target.value)
    console.log(busqueda)
}
const habdleSubmit = (e)=>{
    e.preventDefault()
    dispatch(getVideogames(busqueda))
    

}
    return(
        <div>
        <input type="text" placeholder="Búsqueda..." onChange={e=>handleInputChange(e)}>
        </input>
        <button type="submit" onClick={e=>habdleSubmit(e)}>Buscar</button>
        </div>
    )
}