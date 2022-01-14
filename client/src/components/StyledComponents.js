import styles,{ keyframes } from "styled-components"




/*
    blanco E8F1F2
    verde B3EFB2
    naranja E59F71
    azul 119DA4
    azuloscuro 0A014F

*/
export const  BigDiv= styles.div`
background-color: rgb(232, 241, 242);
width: 40%;
height:20% ;
    border-radius:10px;
    position:absolute;
    top:35%;
    left:30%
`
export const DivCentral = styles.div`
background-color: rgb(232, 241, 242);
padding:10px;
margin-top:20px;
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
    background-color: #E59F71;
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

&:hover {
    background-color: rgb(232, 241, 242);
    color: #0A014F;
}


`
export const Imagen=styles.img`
border-radius:10px;
border: 1px solid #0A014F;
transition-duration: .4s;



`
export const NumbersDiv=styles.div`
background-color: rgba(229, 159, 113, 0.35);
display: inline-block;
padding: 5px;
border: 1px solid #119DA4;
border-radius:5px;


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
    gap: 20px;
`
export const Error =styles.p`
color: red;
border: 1px solid red;

`
export const DivExplicativo=styles.div`
 background-color: #0A014F;
 color: rgb(232, 241, 242);
 flex-grow: 2;
 padding-left:100px;
 padding-right:100px;
    height: 350px;
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
    margin:20px;
    background-color: #B3EFB2;
    border-radius:10px;
    box-shadow: 0px 12px 16px 0px rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);

`
const FORGE = keyframes`
 0% { padding-left: 30px;
padding-right: 30px;
padding-top: 20px;
padding-bottom: 20px; }
 50% {  padding-left: 30px;
padding-right: 30px;
padding-top: 25px;
padding-bottom: 25px; }
 
 100% { padding-left: 30px;
padding-right: 30px;
padding-top: 20px;
padding-bottom: 20px;}

`
const RAGE = keyframes`
 0% { padding-left: 30px;
padding-right: 30px;
padding-top: 20px;
padding-bottom: 20px; }
 25% {  padding-left: 30px;
padding-right: 35px;
padding-top: 25px;
padding-bottom: 20px; }
50% {  padding-left: 35px;
padding-right: 30px;
padding-top: 20px;
padding-bottom: 25px; }
75% {  padding-left: 30px;
padding-right: 35px;
padding-top: 25px;
padding-bottom: 20px; }
 100% { padding-left: 30px;
padding-right: 30px;
padding-top: 20px;
padding-bottom: 20px; }

`
export const THEFORGEBUTTON = styles.button`
margin-top:15px;

padding-left: 30px;
padding-right: 30px;
padding-top: 20px;
padding-bottom: 20px;
color:rgb(232, 241, 242);
animation-name: ${FORGE};
border-style: solid;
border-width: 1px;
border-radius: 30%;
border-color: rgb(232, 241, 242);
background-color: #8B0000;
animation-duration: 8s;
animation-iteration-count: infinite;
transition-duration: .3s;
&:hover {
    background-color:  #DC143C;
    animation-duration: 2s;
    animation-name: ${RAGE};
    
   
    
}
 `
 