const express = require('express');
const PokeApiService = require("../Services/PokeApiService.js");
const routes = express();

routes.get("/ByName/:name", async (req, res) => {
    var response;    
    await PokeApiService.GetPokemonByName(req.params['name']).then(async (res) => {
        response = await res.json();
    });
    res.send(response);
});

routes.get("/ByType/:PokemonType", async (req, res) => {
    var response;
    await PokeApiService.GetManyByType(req.params['PokemonType']).then(async (_res) => {
        response = await _res.json();
    });
    res.send(response);
});

module.exports =  routes;