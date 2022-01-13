import React from "react";

export default function Pages({videogames,NumberOfGames,pages}){
const pageNumbers=[]


for(let x=0;x<=Math.floor(videogames/NumberOfGames); x++){
    pageNumbers.push(x+1)
}
return(
    <nav>
        
        <ul>
            {pageNumbers&& pageNumbers.map(n=>(

                
                    <a key={n} onClick={()=>pages(n)}>{n}</a>
               
            )

            )}
        </ul>
    </nav>



)
}