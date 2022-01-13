import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";

export default function Detail(){
    console.log(window.location)
    const dispatch=useDispatch() 
    const href = window.location.href.split("/")
    const id = href[4]
    const flex={
        display:"flex"
    }
    console.log("EYYYY",id)
    const detalle= useSelector(state=>state.detail)
   useEffect(()=>{
       dispatch(getDetail(id))
   },[dispatch])
   

   console.log("detalle",detalle)
    
   return(
       <div>
           <Link to={"/Home"}><button>HOME</button></Link>
           <h1>{detalle.name}</h1>
           <div style={flex}>
           <div >
            <img src={detalle.background_image? detalle.background_image: "https://t3.ftcdn.net/jpg/02/96/58/56/360_F_296585661_rCaiPkhfSMLwNJ6dSGsUssblwb5rrU9Z.jpg"}
            alt="404 not found" width="250rem" height="250rem"/>
            <p>{detalle.description_raw}</p>
           </div>
           
           <div>
                <h3>Released: {detalle.released}</h3>
                <br/>
               <h3>Rating: {detalle.rating}</h3>
               
           </div>
           </div>
           <div>
           
               <h3>Genres</h3>
               <div>
               <ul >{detalle.genres&&detalle.genres.map(e=>(<li>{e}</li>))}</ul>
               </div>

               
               <h3>Platforms</h3>
               <div >
               <ul >{detalle.platforms&&detalle.platforms.map(e=>(<li>{e}</li>))}</ul>
               </div>
           </div>
       </div>
   )
}