import styles,{ keyframes } from "styled-components"




/*
    blanco E8F1F2
    verde B3EFB2
    naranja E59F71
    azul 119DA4
    azuloscuro 0A014F


*/

const Girar =keyframes` 
    0% {
      left: -19%;
      transform: rotate(0deg);
    }
    30%{
        transform: rotate(360deg);
    }
    
    60%{transform: rotate(720deg);}

    90%{ transform: rotate(1080deg);}

    100% {
      transform: rotate(1180deg);
    }
    
  
`
const CaminarMole =keyframes` 
    0% {
      left:-29%; 
    }
    70%{
        left: 35%;
        
    }
    71%{
        transform: scaleX(1); left: 35%;
    }
    72%{
        transform: scaleX(-1); left: 35%;
    }
    100% {
        left:-29%;
        transform: scaleX(-1);
    }
    
  
`

export const AnimationZone = styles.div`
position:relative;
width: 100vw;
height: 86vh;
`
export const Mole = styles.img`
position:absolute;
left: 0;
height: 150px;
left: -119%;
bottom: -8px;
animation-name: ${CaminarMole};
animation-duration: 10s;
animation-iteration-count: 1;
animation-timing-function:linear;
`


export const  BigDiv= styles.div`
background-color: rgb(232, 241, 242);
padding: 40px;
padding-top: 60px;
padding-bottom: 60px;

    left: 53.5%;
    border-radius:50%;
    position:absolute;
    bottom: 1px;
    transform: rotate(1180deg);
     animation-name: ${Girar};
animation-duration: 8s;
animation-iteration-count: 1;
animation-timing-function:linear;
`
export const Tierra = styles.img`
position:absolute;
bottom:-10px;
left:66vw;
height: 150px;
`
const Ruedito = keyframes`
 0% {left:-45%; }
 
 50% { left:43%;  transform: scaleX(1); }
 52%{ left:43%; transform: scaleX(-1);}
 98% { left:-45%;  transform: scaleX(-1); }
 100%{  transform: scaleX(1);}

`
export const Ruedita = styles.div`
margin-top: 20px;
position:relative;
display: inline-block;
left:-45%;
top: 35px;
animation-name: ${Ruedito};
animation-duration: 6s;
animation-iteration-count: infinite;
animation-timing-function:linear;


`
export const DivCentral = styles.div`
background-color: rgb(232, 241, 242);
padding:10px;
margin-top:30px;
margin-right:50px;
margin-left:50px;
border-radius: 20px; 
box-shadow: 0px 12px 16px 0px rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,1.19);



`
export const CardConteiner=styles.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    flex:none;
    gap: 20px;
    padding:10px;
    
`

export const DivCard = styles.div`
background-color: rgb(232, 241, 242);
border-radius: 20px; 
padding: 5px;
text-decoration:none;

`

export const Butonn= styles.button`
background-color: #B3EFB2;
border: none;
color: black;
padding: 16px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
transition-duration: 0.4s;
cursor: pointer;
border-radius: 10px; 
&:hover {
    background-color: #0A014F;
    color: rgb(232, 241, 242);

}
`
export const ButtonMini= styles(Butonn)`
padding: 8px 16px;
font-size: 10px;
border: 1px solid #119DA4;
font-size:16px;
&:hover {
    border: 1px solid black;
    box-shadow: 0px 12px 16px 0px rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    
    border-radius: 10%; 

}


`
export const Barra =styles.div`
background-color: rgb(232, 241, 242);
  display: flex;
  color: rgb(232, 241, 242);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  margin: 10px;
  border-radius:10px;
  position:relative;
  align-items: center;
  justify-content:space-between;
  border: 1px solid #119DA4;
 

`
export const Search= styles.input`
background-color: #0A014F;
color: rgb(232, 241, 242);
padding: 10px ;
padding-right: 15rem;
border: 1px solid #119DA4;
border-radius:5px;
::placeholder {
    color: rgb(232, 241, 242);
}

`
export const ButtonSearch= styles.button`
background-color: #0A014F;
color: rgb(232, 241, 242);
padding: 10px ;
border: 1px solid #119DA4;
border-radius:5px;
transition-duration: .4s;
cursor: pointer;
&:hover {
    background-color: rgb(232, 241, 242);
    color: #0A014F;
}


`
export const Imagen=styles.img`
border-radius:10px;
border: 1px solid #0A014F;



`
export const NumbersDiv=styles.div`
background-color: rgba(229, 159, 113, 0.55);
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 5px;
padding-top: 15px;
width: 2%;
border: 1px solid #119DA4;
border-radius:5px;

`
export const DivRandom=styles.div`
display: flex;
justify-content: center;

`
export const Numbers=styles.a`
background-color: #0A014F;
color: rgb(232, 241, 242);
transition-duration: .4s;
padding: 10px;
border: 1px solid #119DA4;
border-radius:5px;
&:hover {
    background-color: rgb(232, 241, 242);
    color: #0A014F;
    border-radius:30%;

}

`
export const Number=styles.a`
background-color: #0A014F;
color: rgb(232, 241, 242);
padding: 10px;
border: 1px solid #119DA4;
border-radius:5px;

`
export const MySelect=styles.select`
background-color: #0A014F;
color: rgb(232, 241, 242);
padding: 10px ;

border: 1px solid #119DA4;
border-radius:5px;
::placeholder {
    color: rgb(232, 241, 242);
}
`
export const MyInput=styles.input`
background-color: #0A014F;
color: rgb(232, 241, 242);
padding: 10px ;

border: 1px solid #119DA4;
border-radius:5px;

::placeholder {
    color: rgb(232, 241, 242);
}
`
export const Textazo=styles.textarea`
background-color: #0A014F;
color: rgb(232, 241, 242);
padding: 10px ;

border: 1px solid #119DA4;
border-radius:5px;
width:: 500px;
height: 60px;
::placeholder {
    color: rgb(232, 241, 242);
}
`
export const Cuestionario=styles.div`

display: flex;
justify-content:flex-start;
flex:none;
500px;
    gap: 20px;
    padding-left:250px;
 padding-right:250px;
`
export const Error =styles.p`
color: red;
border: 1px solid red;

`
export const DivExplicativo=styles.div`
 background-color: #0A014F;
 color: rgb(232, 241, 242);
 padding-left:100px;
 padding-right:100px;
    height: 590px;
 border-radius:10px;
 box-shadow: 0px 12px 16px 0px rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
 margin:20px;
`
export const Conteiner=styles.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    
    flex:none;
    padding: 5px;
    gap:2px;
    margin:20px;
    background-color: #B3EFB2;
    border-radius:10px;
    box-shadow: 0px 12px 16px 0px rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);

`

 export const ConteinerEnc=styles.div`
    padding: 5px;
    margin:20px;
    background-color: #B3EFB2;
    border-radius:10px;
    box-shadow: 0px 12px 16px 0px rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);

`
export const DivCircular=styles.div`
width: 100px;
     height: 100px;
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
margin: 10px;
padding:5px;
display: inline-block;
background-color: rgb(255, 215, 0);
border-radius: 50%;
border: 1px solid #E8F1F2;
color: black;
box-shadow: 0px 12px 16px 0px rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);

`

export const DivGris = styles.div`
background-color:#0A014F;
color: #E8F1F2;
padding: 20px;
border-radius:10px;
width:400px;
box-shadow: 0px 12px 16px 0px rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
margin:20px;
`
export const DivVerde = styles.div`
background-color:#B3EFB2;
color: black;
padding: 5px;
border-radius:10px;
box-shadow: 0px 12px 16px 0px rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);

`
