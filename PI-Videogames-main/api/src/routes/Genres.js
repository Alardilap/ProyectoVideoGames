const { Router} = require("express")
const GenresRouter = Router();
const getGenres =require("../controllers/05-getGenres")




GenresRouter.get("/", async (req,res)=>{

    try{
        const result = await getGenres()
        res.status(200).json(result)
    }catch(error){
res.status(400).json({error:error.message})
    }
})

module.exports= GenresRouter;