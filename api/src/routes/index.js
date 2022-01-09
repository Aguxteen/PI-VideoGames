const { Router } = require ('express');
const {getAll} =require ("./Funciones.js")
const { Genre, Videogame } = require("../db");
const { default: axios } = require("axios");
const {key} = process.env;
// Importar todos los routers;

// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/videogames", async (req,res)=>{
    const {name} = req.query
    try{
    const All = await getAll()
    if(name){
        
        const game = await All.filter(e=> e.name.toLowerCase().includes(name.toLowerCase()))
        game.length ? res.status(200).send(game) : 
        res.status(404).send("El juego no existe")}
    else{
        res.status(200).send(All)}
    
        }catch(error){
         res.status(500).send(error)
        }
    
   
})
router.get("/videogame/:ID",async(req,res)=>{
    var id=req.params.ID
    if (typeof id !== "string") id.toString();
    try{
       var Db= await Videogame.findOne({where:{name: id} })
        if(Db){res.status(200).send(Db)}else{
        var Api = await axios.get(`https://api.rawg.io/api/games/${id}?key=${key}`)
       Api = await Api.data
        res.status(200).send(Api)}
       

    }catch(error){res.status(500).send(error)}

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
    let newVideogame = await Videogame.create({
        name, released, background_image, rating, description_raw, platforms, genres
    })
    let GenresMatch = await Genre.findAll({where: {name: genres}})
    newVideogame.addGenre(GenresMatch)
    res.send("Videojuego añadido")
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
