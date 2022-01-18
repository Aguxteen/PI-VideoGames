import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import { DivCentral,ButtonMini,Imagen,DivCircular,Cuestionario,DivGris,CardConteiner,DivVerde } from "./StyledComponents";


export default function Detail(){
    console.log(window.location)
    const dispatch=useDispatch() 
    const href = window.location.href.split("/")
    const id = href[4]
    
    console.log("EYYYY",id)
    const detalle= useSelector(state=>state.detail)
   useEffect(()=>{
       dispatch(getDetail(id))
   },[dispatch,id])
   

   console.log("detalle",detalle)
    
   return(
      
           
       <DivCentral>
           <Link to={"/Home"}><ButtonMini>HOME</ButtonMini></Link>
           <h1>{detalle.name}</h1>
           <Cuestionario >
           <DivGris >
            <Imagen style={{border: "1px solid #E8F1F2"}} src={detalle.background_image? detalle.background_image: "https://t3.ftcdn.net/jpg/02/96/58/56/360_F_296585661_rCaiPkhfSMLwNJ6dSGsUssblwb5rrU9Z.jpg"}
            alt="404 not found" width="250rem" height="250rem"/>
            <p>{detalle.description_raw}</p>
           </DivGris>
           
           <DivGris>
           <div>
           <DivCircular>
                <h3>Released: {detalle.released}</h3>
            </DivCircular>
            <DivCircular>
               <h3>Rating: {detalle.rating}</h3>
               
           </DivCircular>
           </div>
               <h3>Genres</h3>
               <div>
               <CardConteiner >{detalle.genres&&detalle.genres.map(e=>(<DivVerde key={e} >{e}</DivVerde>))}</CardConteiner>
               </div>
               <h3>Platforms</h3>
               <div >
               <CardConteiner >{detalle.platforms&&detalle.platforms.map(e=>(<DivVerde key={e}>{e}</DivVerde>))}</CardConteiner>
               </div>
           </DivGris>
           </Cuestionario>
           
       </DivCentral>
       
   )
}