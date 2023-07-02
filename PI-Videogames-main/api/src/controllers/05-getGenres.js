const axios =require("axios")
const { Videogame, Genre } = require("../db")
require('dotenv').config();
const {API_KEY} = process.env;




const getGenres = async ()=>{

const searchApi= (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results
console.log(searchApi)
const filterData= searchApi.map((Genre)=>Genre.name)

const genresGroup = filterData.flat();
const genresUnique= [...new Set(genresGroup)];


let genresEnd=[]
for(const genres of genresUnique){

    const [genresBd] = await Genre.findOrCreate( {
        where:({name: genres})
    })
    genresEnd.push(genresBd)
}

return genresEnd

}
module.exports = getGenres;


    