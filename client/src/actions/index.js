import  axios  from "axios"

export function getVideogames(payload){
    return async (dispatch)=>{
        if(!payload){
            var ola=""
        }else{ ola=payload}
        try{
            console.log("SOY OLA",ola)
        var games= await axios.get(`https://git.heroku.com/jogos-pedro.git/videogames?name=${ola}`,{})
    }catch(error){throw error}
        return dispatch({
            type: "GET_VIDEOGAMES",
            payload: games.data
        })
    
    }
}

export function getVideogame(payload){
    return async (dispatch)=>{
        
        
        try{
        var games= await axios.get(`https://git.heroku.com/jogos-pedro.git/videogame?name=${payload}`,{})
    }catch(error){throw error}
        return dispatch({
            type: "GET_VIDEOGAMES",
            payload: games.data
        })
    
    }
}

export function getGenres(){
    return async (dispatch)=>{
        var genres= await axios.get(`https://git.heroku.com/jogos-pedro.git/genres`)
        return dispatch({
            type: "GET_GENRES",
            payload: genres.data
        })
    }
}

export function postVideogames (payload){
    return async (dispatch)=>{
        var res= await axios.post(`https://git.heroku.com/jogos-pedro.git/videogame`,payload)
        console.log("CONSOLE LOG DEL POST")
        return dispatch({
            type: "POST",
            payload:res.data
        })
    }
}

export function getPlatforms(){
    return async(dispatch)=>{
        var plat=await axios.get("https://git.heroku.com/jogos-pedro.git/platforms")
        return dispatch({
            type: "GET_PLATFORMS",
            payload: plat.data
        })
    }
}

export function getDetail(payload){
    return async (dispatch)=>{
        var detail = await axios.get("https://git.heroku.com/jogos-pedro.git/videogame/" + payload)

        return dispatch({
            type:"GET_DETAIL",
            payload: detail.data
        })
    }
}

export function superFilter(payload){
    return {
        type:"SUPER_FILTER",
        payload:payload
    }
}