import React from "react";
import { Link } from "react-router-dom";
import { postVideogames, getGenres, getPlatforms } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { validar } from "./Validar";
import {DivCentral,ButtonMini,Textazo,MyInput,Cuestionario,Error,DivExplicativo,Conteiner,ConteinerEnc} from "./StyledComponents"
import gif from "../ShovelSmith.gif"

export default function CreateVideogames(){
const dispatch = useDispatch()
const genres= useSelector(state=>state.genres)
const platform= useSelector(state=>state.plataformas)
const register= useSelector(state=>state.register)

const [Excuse, setExcuse] = useState("")
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
    setExcuse("")
    

}
const handleExcuse= (e)=>{
    setExcuse(e.target.value)
    setErrors(validar(input))
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
    setExcuse("")
    console.log(input)
    console.log(errors)
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
        alert("The materials were sent to the forge")
}
    useEffect(()=>{
        dispatch(getPlatforms())
        dispatch(getGenres())
        
    },[dispatch])
    return(
    <DivCentral >
        <Link to="/home"><ButtonMini>HOME</ButtonMini></Link>
        
        <h1>THE FORGE</h1>
        <form onSubmit={e=>handleSubmit(e)} >
        <Cuestionario>
            <div>
            <ConteinerEnc>
            <div>
            <h3>Name:</h3>
                <MyInput type="text"
                value={input.name}
                name="name"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"
                placeholder="Name..."
                />
            </div>
            <div>
            <h3>Released:</h3>
                <MyInput type="text"
                value={input.released}
                name="released"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"
                placeholder="Released..."
                />
            </div>
            
            <div>
            <h3>Description:</h3>
                <Textazo type="text"
                value={input.description_raw}
                name="description_raw"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"
                placeholder="Description..."
                />
            
            </div>
            <div>
            <h3>Image:</h3>
                <MyInput type="text"
                value={input.background_image}
                name="background_image"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"
                placeholder="Url..."
                />
            </div>
            

            <div>
            <h3>Rating:</h3>
                <MyInput type="text"
                value={input.rating}
                name="rating"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"
                placeholder="Rating number..."
                />
            
            </div>
            </ConteinerEnc>
                {errors.name&& <Error>{errors.name}</Error>}
                {errors.description_raw&& <Error>{errors.description_raw}</Error>}
                {errors.rating&& <Error>{errors.rating}</Error>}
                {errors.released&& <Error>{errors.released}</Error>}
                <h3>Genres:</h3>
            <Conteiner>
            {genres.map(e=>
               <label> <MyInput 
                key={e.name}
                type="checkbox"
                name="genres"
                value={e.name}
                onChange={e=>handleTick(e)}
                />{e.name}</label>
            )}
            </Conteiner>
            {errors.genres&& <Error>{errors.genres}</Error>}
            
            </div>
            <div>
            <DivExplicativo>
                <h2>Rules of THE FORGE:</h2>
                <ul>
                    <li>THE FORGE will not create games without names, a rating and a description</li>
                    <li>The qualification must be a number greater than 1 and less than 101 to be accepted by THE FORGE</li>
                    <li>THE FORGE requires a minimum of a platform and a gender to create a new entity</li>
                    <li>Creating an entity with THE FORGE implies giving part of your soul to THE FORGE</li>
                    <li>Give your signature to THE FORGE to accept the conditions</li>
                    
                <MyInput type="text"
                value={Excuse}
                name="Excuse"
                onChange={e=>handleExcuse(e)}
                autocomplete ="off"
                placeholder="Your signature here..."
                />
                    <br/>
                    {(!errors.rating&&!errors.name&&!errors.description_raw&&input.name!==""&&!errors.platforms&&!errors.genres&&Excuse )
                && <ButtonMini type="submit">FORGE</ButtonMini>}
                    <br/>
                </ul>
                {register && <p>Last Forge Result: {register}</p>} 
            </DivExplicativo>
                <img src={ gif } alt=""/>
            </div>
        
            </Cuestionario>
                <h3>Platforms:</h3>
            <Conteiner>
            {platform.map(e=>
               <label> <MyInput 
                key={e.name}
                type="checkbox"
                name="platforms"
                value={e.name}
                onChange={e=>handleTick(e)}
                />{e.name}</label>
            )}
            </Conteiner>
            {errors.platforms&& <Error>{errors.platforms}</Error>}
                
            </form>
            
    </DivCentral>)
}