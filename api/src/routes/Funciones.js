const { default: axios } = require("axios");
const { Genre, Videogame } = require('../db')
const {key} = process.env;
const getApi = async ()=>{   
    var apiUrl = await axios.get(`https://api.rawg.io/api/games?key=${key}&page_size=100&page=1`)
    var apiUrl2 = await axios.get(`https://api.rawg.io/api/games?key=${key}&page_size=100&page=2`)
    var apiUrl3 = await axios.get(`https://api.rawg.io/api/games?key=${key}&page_size=100&page=3`)
    const apis = [apiUrl,apiUrl2,apiUrl3]
    const ConcatApis = [];
    await Promise.all(apis)
        .then(responses => {
            responses.forEach(responses => ConcatApis.push(
                responses.data.results.map(e => {
                    const { id, genres, name, background_image, rating,platforms,released } = e;
                    return {
                        id,
                        name,
                        released,
                        background_image,
                        rating,
                        genres: genres.map(e=>e.name),
                        platforms: platforms.map(e=>e.platform.name)
                    }
                })

            ))
        })


    return ConcatApis.flat()
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