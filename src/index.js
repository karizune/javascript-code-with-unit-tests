const express = require("express");
const PokeApiService = require("../src/Services/PokeApiService.js");
const app = express();
const router = express.Router();
const PokemonRoutes = require("../src/routes/PokemonRoutes.js");

app.use("/Pokemon/", PokemonRoutes);

app.listen(process.env.PORT || 3333, () => {
    // console.log("server running");
});

async function MetodoPrincipal(){
    let pokemons = await PokeApiService.GetPokemonForms("pikachu");
    console.log(pokemons)
};

MetodoPrincipal();
