import  axios  from "axios"

export function getVideogames(payload){
    return async (dispatch)=>{
        if(!payload){
            var ola=""
        }else{ ola=payload}
        try{
        var games= await axios.get(`http://localhost:3001/videogames?name=${ola}`,{})
    }catch(error){throw error}
        return dispatch({
            type: "GET_VIDEOGAMES",
            payload: games.data
        })
    
    }
}

export function getGenres(){
    return async (dispatch)=>{
        var genres= await axios.get(`http://localhost:3001/genres`)
        return dispatch({
            type: "GET_GENRES",
            payload: genres.data
        })
    }
}

export function FilterGenres(payload){
    return {
        type:"FILTER_GENRES",
        payload: payload
    }

}

export function FilterCreate(payload){
    return {
        type:"FILTER_CREATE",
        payload: payload
    }

}

export function OrderByType(payload){
    return {
        type:"ORDER_TYPE",
        payload: payload
    }

}

export function Order(payload){
    
    return {
        type:"ORDER",
        payload: payload
    }

}





export function getVideogame(payload){
    return async (dispatch)=>{
        var game = await axios.get(`http://localhost:3001/videogame/${payload}`)
        return dispatch({
            type: "GET_VIDEOGAMEID",
            payload: game.data
        })
    }

}
export function postVideogames (payload){
    return async (dispatch)=>{
        var res= await axios.post(`http://localhost:3001/videogame`,payload)
        console.log("CONSOLE LOG DEL POST")
        return dispatch({
            type: "POST",
            payload:res.data
        })
    }
}
export function getPlatforms(){
    return async(dispatch)=>{
        var plat=await axios.get("http://localhost:3001/platforms")
        return dispatch({
            type: "GET_PLATFORMS",
            payload: plat.data
        })
    }
}
export function getDetail(payload){
    return async (dispatch)=>{
        var detail = await axios.get("http://localhost:3001/videogame/" + payload)

        return dispatch({
            type:"GET_DETAIL",
            payload: detail.data
        })
    }
}