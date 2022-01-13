

const initialState = {
    videogames: [],
    genres:[],
    AllGames:[],
    order:"None",
    None:[],
    plataformas:[],
    detail:{}
}
function rootReducer(state=initialState,{payload, type}){
    switch(type){
        case "GET_VIDEOGAMES":
            return {
                ...state,
                videogames: payload,
                AllGames:payload,
                None:payload,
            }
        case "GET_GENRES":
            return{
                ...state,
                genres: payload
            }
        case "FILTER_GENRES":
            const games = state.AllGames
            const filter= payload === "All"? games : games.filter(e=>e.genres.includes(payload))
            return{
                ...state,
                videogames: filter,
                None:filter
            }
        case "FILTER_CREATE":
            const gamess = state.AllGames
            const filterr = payload === "CreatedOnDb" ? gamess.filter(e=>e.createdInDb===true) : gamess
            return{
                ...state,
                videogames: filterr,
                None:filterr

            }
        case "ORDER":
            return {
                ...state,
                order:payload
                
            }
        case "GET_PLATFORMS":
            return {
                ...state,
                plataformas: payload
            }
        case "POST":
            return {
                ...state
            }
        case "GET_DETAIL":
            console.log(payload)
        var {name,background_image,rating, genres,platforms,description_raw,released}=payload
        genres= genres.map(e=>e.name)
        console.log("EEEEEEEEEEEEEEEEE",platforms)
        platforms= platforms.map(e=>e.platform.name)
        console.log("EEEEEEEEEEEEEEEEE2",platforms)

            return {
                ...state,
                detail: {name,background_image,rating, genres,platforms,description_raw,released}
            }
        case "ORDER_TYPE":
             const jueguitos= state.videogames
             var FiltName
             if(payload==="None"){
                    
                     FiltName = state.None
             }
              if(payload==="Asc") {  FiltName = jueguitos.sort((a,b)=>{
                 if(a[state.order]>b[state.order]){
                    return 1
                 }
                 if(b[state.order]>a[state.order]){
                    return -1
                 }
                 return 0
             })} 
             if(payload==="Des"){  FiltName =jueguitos.sort((a,b)=>{
                if(a[state.order]>b[state.order]){
                   return -1
                }
                if(b[state.order]>a[state.order]){
                   return 1
                }
                return 0
            })}
            return{
                ...state,
                videogames:FiltName
            } 
            
            default:
            return {...state}
    }

}

export default rootReducer