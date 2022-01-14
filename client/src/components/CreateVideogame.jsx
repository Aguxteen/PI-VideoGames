import React from "react";
import { Link } from "react-router-dom";
import { postVideogames, getGenres, getPlatforms } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { validar } from "./Validar";
import {DivCentral,ButtonMini,Textazo,MyInput,Cuestionario,Error,DivExplicativo,Conteiner,THEFORGEBUTTON} from "./StyledComponents"


export default function CreateVideogames(){
const dispatch = useDispatch()
const genres= useSelector(state=>state.genres)
const platform= useSelector(state=>state.plataformas)
const [errors,setErrors]= useState({})
const [input,setInput] = useState({
    name:"",
    released:"",
    background_image:"",
    rating:"",
    description_raw:"",
    genres: [],
    platforms:[]})
const handleOnChange=(e)=>{
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    setErrors(validar({
        ...input,
        [e.target.name]: e.target.value
    }))
    
    console.log(errors)

}
const handleTick=async (e)=>{
    if(e.target.checked){
        setInput({
            ...input,
            [e.target.name]: [...input[e.target.name],e.target.value]
        })
    }else{
       let alo = input[e.target.name].filter(ev=>ev!==e.target.value)
        setInput({
            ...input,
            [e.target.name]: alo
        })
    }
    setErrors(validar({
        ...input,
        [e.target.name]: e.target.value
    }))
    console.log(input)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("juego:",input)
    dispatch(postVideogames(input))
    setInput({
        name:"",
        released:"",
        background_image:"",
        description_raw:"",
        rating:"",
        genres: [],
        platforms:[]})
        alert("Personaje creado")
}
    useEffect(()=>{
        dispatch(getPlatforms())
        dispatch(getGenres())
        
    },[dispatch])
    return(
    <DivCentral>
        <Link to="/home"><ButtonMini>HOME</ButtonMini></Link>
        
        <h1>THE FORGE</h1>
        <form onSubmit={e=>handleSubmit(e)} >
        <Cuestionario>
            <div>
            <div>
            <div>
                <label>Name:</label>
                <MyInput type="text"
                value={input.name}
                name="name"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"
                placeholder="Name..."
                />
            {errors.name&& <Error>{errors.name}</Error>}
            </div>
            <div>
                <label>Realised:</label>
                <MyInput type="text"
                value={input.released}
                name="released"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"
                placeholder="Released..."
                />
            </div>
            
            <div>
                <label>Desription:</label>
                <Textazo type="text"
                value={input.description_raw}
                name="description_raw"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"
                placeholder="Description..."
                />
            {errors.description_raw&& <Error>{errors.description_raw}</Error>}
            </div>
            <div>
                <label>URL image:</label>
                <MyInput type="text"
                value={input.background_image}
                name="background_image"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"
                placeholder="Url..."
                />
            </div>
            

            <div>
                <label>rating:</label>
                <MyInput type="text"
                value={input.rating}
                name="rating"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"
                placeholder="Rating number..."
                />
            {errors.rating&& <Error>{errors.rating}</Error>}
            </div>
            </div>
                <h3>Genres:</h3>
            <Conteiner>
            {genres.map(e=>
               <label> <MyInput 
                type="checkbox"
                name="genres"
                value={e.name}
                onChange={e=>handleTick(e)}
                />{e.name}</label>
            )}
            </Conteiner>
            {errors.genres&& <Error>{errors.genres}</Error>}
            </div>
            <DivExplicativo>
                <h2>Rules of THE FORGE:</h2>
                <ul>
                    <li>THE FORGE will not create games without names, a rating and a description</li>
                    <li>The qualification must be a number greater than 1 and less than 101 to be accepted by THE FORGE</li>
                    <li>THE FORGE requires a minimum of a platform and a gender to create a new entity</li>
                    <li>Creating an entity with THE FORGE implies giving part of your soul to THE FORGE</li>
                    {(!errors.rating&&!errors.name&&!errors.description_raw&&input.name!==""&&!errors.platforms&&!errors.genres )
                && <THEFORGEBUTTON type="submit">CREATE</THEFORGEBUTTON>}
                </ul>
            </DivExplicativo>
        
            </Cuestionario>
            <div>
                <h3>Platforms:</h3>
            {platform.map(e=>
               <label> <MyInput 
                type="checkbox"
                name="platforms"
                value={e.name}
                onChange={e=>handleTick(e)}
                />{e.name}</label>
            )}
            {errors.platforms&& <Error>{errors.platforms}</Error>}
            </div>
                
            </form>
    </DivCentral>)
}