const { Router } = require ('express');
const {getAll} =require ("./Funciones.js")
const { Genre, Videogame } = require("../db");
const { default: axios } = require("axios");
const { Op } = require("sequelize");
const {key} = process.env;
// Importar todos los routers;

// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/videogames", async (req,res)=>{
    const {name} = req.query
    var c=0
    try{
    
    if(name){
        
       const DB = await Videogame.findAll({
           where:{name: {[Op.substring]: name} },
           limit:15,
       })
       
       c= DB.length
        var Api = await axios.get(`https://api.rawg.io/api/games?key=${key}&search=${name}`)
            console.log("LENGTH",Api.data.results.length)
           Api= Api.data.results.map(e => {
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
            Api= Api.filter(e=>{if(c<15){ c++;
                if(e){return true}
                } return false})
            Api = Api.concat(DB)
            res.status(200).send(Api) 
       
        
        }else{
            const All = await getAll()
            res.status(200).send(All)
        }
    
        }catch(error){
         res.status(error).send(error)
        }
    
   
})
router.get("/videogame/:ID",async(req,res)=>{
    var id=req.params.ID
    if (typeof id !== "string") id.toString();
    if(id.includes("-")){
       var Db= await Videogame.findOne({where:{id: id} })
        res.status(200).send(Db)}
        else{
        var Api = await axios.get(`https://api.rawg.io/api/games/${id}?key=${key}`)
       Api = Api.data
        res.status(200).send(Api)}
       

    

})
router.get("/genres",async (req,res)=>{
    
    var generosApi = await axios.get(`https://api.rawg.io/api/genres?key=${key}`)
    var genresNames =  generosApi.data.results.map( e=> e.name)
    for(let x=0;x<genresNames.length ;x++){
       Genre.findOrCreate({
           where: {name: genresNames[x]}
       }) 
    }
    const AllGenres= await Genre.findAll()
    res.status(200).send(AllGenres)

})

router.post("/videogame", async (req,res)=>{
    let {name, released, background_image, rating, description_raw, platforms, genres} = req.body
    try{
    let newVideogame = await Videogame.create({
        name, released, background_image, rating, description_raw, platforms, genres
    })
    let GenresMatch = await Genre.findAll({where: {name: genres}})
    newVideogame.addGenre(GenresMatch)
    res.send("Successful forging")}catch(error){res.status(error).send("Oh, oh, it seems that the forge failed")}
})
router.get("/platforms", async (req,res)=>{
    let plataformas = await axios.get("https://api.rawg.io/api/platforms?key="+ key)
    let platforms= plataformas.data.results
    res.status(200).send(platforms)
})
router.get("/hola",(req,res)=>{
    res.status(202).send("emmmnose")
})
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
/*
[ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
[ ] Descripción
[ ] Fecha de lanzamiento
[ ] Rating
[ ] Plataformas
*/

module.exports = router;
