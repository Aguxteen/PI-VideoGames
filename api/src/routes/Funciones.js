const { default: axios } = require("axios");
const { Genre, Videogame } = require('../db')
const {key} = process.env;
const getApi = async ()=>{   
    var apiUrl = await axios.get(`https://api.rawg.io/api/games?key=${key}&page_size=100`)
    
    
    const apiInfo= await apiUrl.data.results.map(
        e=>{ let { id, genres, name, background_image, rating,platforms,released }=e
        return{
            id,
            name,
            released,
            background_image,
            rating,
            genres: genres.map(e=>e.name),
            platforms: platforms.map(e=>e.platform.name)
        }
    })
    return apiInfo
}

const getDb= async () =>{
   return await Videogame.findAll({
       include:[Genre]  
   })
}
const  getAll= async ()=>{
    
    const UrlInfo= await getApi()
    
    const DbInfo= await getDb()
    const All = UrlInfo.concat(DbInfo)
    return All
}
module.exports ={getAll}