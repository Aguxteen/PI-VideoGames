import React from "react"
import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {  getGenres, getVideogames, superFilter} from "../actions"
import Card from "./Card"
import Pages from "./Pages"
import SearchBar from "./SearchBar"
import { MySelect,Barra,ButtonMini,CardConteiner,DivCentral,Ruedita,Number } from "./StyledComponents"
import gif from "../ruedita.gif"
import plague from "../plague.gif"

export default function NewHome(){

    const dispatch= useDispatch()
    var AllGames=useSelector(state=>state.videogames)
    var AllGenres=useSelector(state=>state.genres)
    
    const [CurrentPage, setCurrentPage] = useState(1)
    const [NumberOfGames, setNumbreOfGames] = useState(15)
    const indexOfLastGame = CurrentPage * NumberOfGames // calcula el numero del ultimo juego que se va a paginar
    const indexOfFirstGame = indexOfLastGame - NumberOfGames // calcula el numero del primer juego que se va a paginar
    const currentGames = AllGames&&AllGames.slice(indexOfFirstGame,indexOfLastGame)
    
    const [Info , setInfo] = useState({
        Genre: "all", // all - any genre
        OrderedBy: "none", // none-name-rating
        Order: "Asc", // Asc-Des
        Created: "all", // all-created-notCreated
    })
    const [Excusa, setExcusa]=useState("")
    const pages=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    const ActualPage=()=>{
        
        return(<Number>{CurrentPage}</Number>)
    }

    function HandleClick(e){
        e.preventDefault()
        dispatch(getVideogames())
        
    }
    function HandleGenre(e){
        e.preventDefault()
        setCurrentPage(1)
        setInfo({
            ...Info,
            Genre: e.target.value
        })
        
    }
    function HandleCreated(e){
        e.preventDefault()
        setCurrentPage(1)
        setInfo({
            ...Info,
            Created: e.target.value
        })
        
    }
    function HandleOrder(e){
        e.preventDefault()
        setCurrentPage(1)
        setInfo({
            ...Info,
            OrderedBy: e.target.value
        })
        setExcusa(e.target.value)
    }
    function HandleAsc(e){
        e.preventDefault()
        setCurrentPage(1)
        setInfo({
            ...Info,
            Order: e.target.value
        })
        setExcusa(e.target.value) 
    }
    useEffect(()=>{
        dispatch(getVideogames())
        dispatch(getGenres())
    },[dispatch])

    useEffect(()=>{
        dispatch(superFilter(Info))
        
        setExcusa(Info) 

        
    },[Info,dispatch])
    
        return(
            <div>
               <Barra>
                   <div>
                <Link to="/"><ButtonMini>LANDING</ButtonMini></Link>
               <Link  to="Create"><ButtonMini>FORGE</ButtonMini></Link>
                </div>
                <SearchBar />
                </Barra>
                <DivCentral>
                <h3>Filtros:</h3>
                <MySelect onChange={e=>HandleAsc(e)}
                defaultValue="Asc"
                name="orden">
                    <option key="Asc" value="Asc">Upward</option>
                    <option key="Des" value="Des">Falling</option>
                </MySelect>
                <MySelect onChange={e=>HandleOrder(e)}
                defaultValue="None"
                name="rating/alf">
                    <option key="none" value="None">None</option>
                    <option key="name" value="name">Alphabetical</option>
                    <option key="rating" value="rating">Rating</option>
                </MySelect>
                { <MySelect onChange={e=>HandleGenre(e)} name="Genres" defaultValue="all" >
                    <option key="All" value="all">All</option>
                    {AllGenres?.map(e=><option key={e.name} value={e.name}>{e.name}</option>)}
                </MySelect> }
                <MySelect onChange={e=>HandleCreated(e)} name="creados">
                    <option key="all" value="all">All</option>
                    <option key="created" value="created">Created</option>
                    <option key="notCreated" value="notCreated">Existing</option>
    
                </MySelect>
                <ButtonMini onClick={e=>{HandleClick(e)}}>Get all games again</ButtonMini>
                </DivCentral>
                <div>
                <Ruedita >
                <img src={gif} alt="Animacion"/>
                </Ruedita>
                </div>
                <DivCentral>
                <h3>Lista de juegos:</h3>
                {AllGames && <Pages ActualPage={ActualPage} pages={pages} videogames={AllGames.length} NumberOfGames={NumberOfGames}/> }
                {AllGames ? <CardConteiner >
                 {
                     
                     currentGames.length? currentGames.map(e=>{return(
                         <div key={e.name} styles={{flexgrow:1}}>
                     
                     <Card  key={e.name} id={e.id} name={e.name} image={e.background_image? e.background_image: "https://t3.ftcdn.net/jpg/02/96/58/56/360_F_296585661_rCaiPkhfSMLwNJ6dSGsUssblwb5rrU9Z.jpg"} genres={e.genres}/>
                     
                     </div>
                     )}): (<div>
                     <img src={plague} alt="Animacion"/>
                     <h1 >No games here move on ;3</h1>
                     </div>)
                }
                </CardConteiner> : (<div>
                     <img src={plague} alt="Animacion"/>
                     <h1 >No games here move on ;3</h1>
                     </div>)}
                
                </DivCentral>
            </div>
        )
    }