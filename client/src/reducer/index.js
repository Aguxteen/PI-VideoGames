

const initialState = {
    videogames: [],
    genres:[],
    AllGames:[],
    plataformas:[],
    detail:{},
    register:""
}
function rootReducer(state=initialState,{payload, type}){
    switch(type){
        case "GET_VIDEOGAMES":
            return {
                ...state,
                videogames: payload,
                AllGames:payload,
                
            }
        case "GET_GENRES":
            return{
                ...state,
                genres: payload
            }
        
        
        
        case "GET_PLATFORMS":
            return {
                ...state,
                plataformas: payload
            }
        case "POST":
            return {
                ...state,
                register: payload
            }
        case "GET_DETAIL":
            
        var {id,name,background_image,rating, genres,platforms,description_raw,released}=payload
        // if (typeof id !== "string") id.toString();
        
        if(typeof id !== "string"){
        genres= genres.map(e=>e.name)
        platforms= platforms.map(e=>e.platform.name)}
        

            return {
                ...state,
                detail: {name,background_image,rating, genres,platforms,description_raw,released}
            }
        
            case"SUPER_FILTER":
            const {
                Genre, // all - any genre
                Created, // all-created-notCreated
                OrderedBy, // none-name-rating
                Order, // Asc-Des
                
            }= payload
            
            var Games = state.AllGames
            // filtrado de generos
            var TODO= Genre === "all"? Games : Games.filter(e=>e.genres.includes(Genre))
            // filtrado por creacion
            if(Created==="created"){
                TODO =  TODO.filter(e=>e.createdInDb===true) 
           }else if(Created==="notCreated"){
            TODO =  TODO.filter(e=>e.createdInDb===undefined) 
           }
           // ordenamiento por nombre 
           if(OrderedBy==="name"){
               
            if(Order==="Asc") {  TODO =  TODO.sort((a,b)=>{
                
               if(a[OrderedBy].toLowerCase()>b[OrderedBy].toLowerCase()){
                  return 1
               }
               if(b[OrderedBy].toLowerCase()>a[OrderedBy].toLowerCase()){
                  return -1
               }
               return 0
           })} 
           if(Order==="Des"){  TODO = TODO.sort((a,b)=>{
              if(a[OrderedBy].toLowerCase()>b[OrderedBy].toLowerCase()){
                 return -1
              }
              if(b[OrderedBy].toLowerCase()>a[OrderedBy].toLowerCase()){
                 return 1
              }
              return 0
          })}
        }
        // ordenamiento por rating 
        if(OrderedBy==="rating"){
            
         if(Order==="Asc") {  TODO =  TODO.sort((a,b)=>{
            if(a[OrderedBy]>b[OrderedBy]){
               return 1
            }
            if(b[OrderedBy]>a[OrderedBy]){
               return -1
            }
            return 0
        })} 
        if(Order==="Des"){  TODO = TODO.sort((a,b)=>{
           if(a[OrderedBy]>b[OrderedBy]){
              return -1
           }
           if(b[OrderedBy]>a[OrderedBy]){
              return 1
           }
           return 0
       })}
     }
        
        return {
            ...state,
            videogames:TODO
        }
        

            default:
            return {...state}
    }

}

export default rootReducer