import React from "react"
import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {  getGenres, getVideogames, FilterGenres, FilterCreate, Order, OrderByType } from "../actions"
import Card from "./Card"
import Pages from "./Pages"
import SearchBar from "./SearchBar"
import { MySelect,Barra,ButtonMini,CardConteiner,DivCentral } from "./StyledComponents"
export default function Home(){

const dispatch= useDispatch()
var AllGames=useSelector(state=>state.videogames)
var AllGenres=useSelector(state=>state.genres)


const [CurrentPage, setCurrentPage] = useState(1)
const [NumberOfGames, setNumbreOfGames] = useState(15)
const [Orden, setOrden] = useState("Asc")
const [Excuse, setExcuse] = useState("None")
const indexOfLastGame = CurrentPage * NumberOfGames // calcula el numero del ultimo juego que se va a paginar
const indexOfFirstGame = indexOfLastGame - NumberOfGames // calcula el numero del primer juego que se va a paginar
const currentGames = AllGames.slice(indexOfFirstGame,indexOfLastGame)
console.log("GENEROOOS:",AllGenres)


const pages=(pageNumber)=>{
    setCurrentPage(pageNumber)
}
function HandleGenresOnChange(e){
    e.preventDefault()
    dispatch(FilterGenres(e.target.value))
    setCurrentPage(1)
    
}
function HandleCreateOnChange(e){
    e.preventDefault()
    dispatch(FilterCreate(e.target.value))
    setCurrentPage(1)

}
function HandleOrderOnChange(e){
    e.preventDefault()
    if(e.target.value==="None"){
        dispatch(getVideogames())
    }else{
    dispatch(Order(e.target.value))
    dispatch(OrderByType(Orden))}
    setCurrentPage(1)
    setExcuse(e.target.value)
    

}
function HandleAscOnChange(e){
    dispatch(OrderByType(e.target.value))
    setCurrentPage(1)
    setOrden(e.target.value)
 
}
useEffect(()=>{
    dispatch(getVideogames())
    dispatch(getGenres())
},[dispatch])
    return(
        <div>
           <Barra>
               <div>
            <Link to="/"><ButtonMini>LANDING</ButtonMini></Link>
           <Link  to="Create"><ButtonMini>CREACION</ButtonMini></Link>
            </div>
            <SearchBar />
            </Barra>
            <DivCentral>
            <h3>Filtros:</h3>
            <MySelect onChange={e=>HandleAscOnChange(e)} name="orden">
                <option selected value="Asc">Upward</option>
                <option value="Des">Falling</option>
            </MySelect>
            <MySelect onChange={e=>HandleOrderOnChange(e)} name="rating/alf">
                <option selected value="None">None</option>
                <option value="name">Alphabetical</option>
                <option value="rating">Rating</option>
            </MySelect>
            { <MySelect onChange={e=>HandleGenresOnChange(e)} name="Genres" >
                <option value="All">All</option>
                {AllGenres?.map(e=><option value={e.name}>{e.name}</option>)}
            </MySelect> }
            <MySelect onChange={e=>HandleCreateOnChange(e)} name="creados">
                <option value="Todos">Todos</option>
                <option value="CreatedOnDb">Creados</option>
            </MySelect>
            </DivCentral>
            <DivCentral>
            <h3>Lista de juegos:</h3>
            <Pages pages={pages} videogames={AllGames.length} NumberOfGames={NumberOfGames}/> 
            <CardConteiner >
             {
                 
                 currentGames?.map(e=>{return(
                     <div styles={{flexgrow:1}}>
                 
                 <Card  key={e.name} id={e.id} name={e.name} image={e.background_image? e.background_image: "https://t3.ftcdn.net/jpg/02/96/58/56/360_F_296585661_rCaiPkhfSMLwNJ6dSGsUssblwb5rrU9Z.jpg"} genres={e.genres}/>
                 
                 </div>
                 )})
            }
            </CardConteiner>
            </DivCentral>
        </div>
    )
}