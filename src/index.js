const express = require("express");
const PokeApiService = require("../src/Services/PokeApiService.js");
const app = express();
const router = express.Router();
const PokemonRoutes = require("../src/routes/PokemonRoutes.js");

app.use("/Pokemon/", PokemonRoutes);

app.listen(process.env.PORT || 3333, () => {
    console.log("server running");
});

async function MetodoPrincipal(){
    await PokeApiService.GetQtdeEvolucao("squirtle").then(async res => {
        console.log(await res);
    })
};

MetodoPrincipal();

// TamanhoArray = array.length
// PosiçãoAtual = index + 1
// x = TamanhoArray - PosiçãoAtual
