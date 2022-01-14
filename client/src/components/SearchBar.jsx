import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../actions";
import { Search,ButtonSearch } from "./StyledComponents";
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
    setBusqueda("")
    e.target.value=""
    
}
    return(
        <div >
        <Search type="text" placeholder="Búsqueda..." onChange={e=>handleInputChange(e)}>
        </Search>
        <ButtonSearch type="submit" onClick={e=>habdleSubmit(e)}>Buscar</ButtonSearch>
        </div>
    )
}