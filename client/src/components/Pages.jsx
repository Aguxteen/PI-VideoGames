import React from "react";
import { Numbers,NumbersDiv } from "./StyledComponents";
export default function Pages({videogames,NumberOfGames,pages}){
const pageNumbers=[]


for(let x=0;x<=Math.floor(videogames/NumberOfGames); x++){
    pageNumbers.push(x+1)
}
return(
    <NumbersDiv >
        
        <ul>
            {pageNumbers&& pageNumbers.map(n=>(

                
                    <Numbers key={n} onClick={()=>pages(n)}>{n}</Numbers>
               
            )

            )}
        </ul>
    </NumbersDiv>



)
}