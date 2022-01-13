import React from "react";
import { Link } from "react-router-dom";
import { postVideogames, getGenres, getPlatforms } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { validar } from "./Validar";



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
    return(<div>
        <Link to="/home"><button>HOME</button></Link>
        <form onSubmit={e=>handleSubmit(e)} >
            <div>
                <label>Name:</label>
                <input type="text"
                value={input.name}
                name="name"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"

                />
            </div>
            {errors.name&& <p>{errors.name}</p>}
            <div>
                <label>Realised:</label>
                <input type="text"
                value={input.released}
                name="released"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"

                />
            </div>
            
            <div>
                <label>Desription:</label>
                <br/>
                <textarea type="text"
                value={input.description_raw}
                name="description_raw"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"/>
            </div>
            {errors.description_raw&& <p>{errors.description_raw}</p>}
            <div>
                <label>URL image:</label>
                <input type="text"
                value={input.background_image}
                name="background_image"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"

                />
            </div>
            

            <div>
                <label>rating:</label>
                <input type="text"
                value={input.rating}
                name="rating"
                onChange={e=>handleOnChange(e)}
                autocomplete ="off"
                />
            </div>
            {errors.rating&& <p>{errors.rating}</p>}
            <div>
                <label>Genres:</label>
            {genres.map(e=>
               <label> <input 
                type="checkbox"
                name="genres"
                value={e.name}
                onChange={e=>handleTick(e)}
                />{e.name}</label>
            )}
            </div>
            {errors.genres&& <p>{errors.genres}</p>}

            <br/>
            <div>
                <label>Platforms:</label>
            {platform.map(e=>
               <label> <input 
                type="checkbox"
                name="platforms"
                value={e.name}
                onChange={e=>handleTick(e)}
                />{e.name}</label>
            )}
            </div>
            {errors.platforms&& <p>{errors.platforms}</p>}

                {(!errors.rating&&!errors.name&&!errors.description_raw&&input.name!==""&&!errors.platforms&&!errors.genres )
                && <button type="submit">CREATE</button>}
        </form>
    </div>)
}