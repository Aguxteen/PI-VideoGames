import React from "react";
import { Numbers,NumbersDiv,DivRandom } from "./StyledComponents";
import { Component } from "react";

// ()

export default class Pages extends Component{

    
 
render(){
   var pageNumbers=[]
   const {videogames,NumberOfGames,pages,ActualPage}=this.props

for(let x=0;x<=Math.floor(videogames/NumberOfGames); x++){
    pageNumbers.push(x+1)
}
    
    
    return(
        
        <div>
            
            <div>{ActualPage()} </div>
        <DivRandom>
        <NumbersDiv >
            <ul>
                {pageNumbers&& pageNumbers.map(n=>(
    
                    
                        <Numbers key={n} onClick={()=>pages(n)}>{n}</Numbers>
                   
                )
    
                )}
            </ul>
        </NumbersDiv>
        </DivRandom>
        </div>
    
    
    )
}
}