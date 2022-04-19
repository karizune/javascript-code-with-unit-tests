const express = require("express");
const PokeApiService = require("../src/Services/PokeApiService.js");
const app = express();
const router = express.Router();
const PokemonRoutes = require("../src/routes/PokemonRoutes.js");

app.use("/Pokemon/", PokemonRoutes);

app.listen(process.env.PORT || 3333, () => {
    console.log("server running");
});


async function fazAlgumaCoisa(){
    await PokeApiService.GetPokemonByName("pikachu").then(async res => {
        console.log(await res.json());
    });
}


fazAlgumaCoisa();