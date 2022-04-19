const fetch = require("node-fetch");
const baseUrl = "https://pokeapi.co/api/v2/";

exports.GetPokemonByName = async (Nome) => {        
    let url = baseUrl + `pokemon/${Nome}`;
    return await fetch(url);
};

exports.GetAllPokemons = async () => {
    let url = baseUrl + `pokemon?limit=1000000&offset=0`;
    return await fetch(url);
};

exports.GetManyPokemonsByQtde = async (qtde) => {
    let url = baseUrl + `pokemon?limit=${qtde}&offset=0`;
    return await fetch(url);
};

exports.GetManyByType = async (type) => {
    let url = baseUrl + `type/${type}`;
    return await fetch(url);
};

exports.GetBerryByName = async (name) => {
    let url = baseUrl + `berry/${name}`;
    return await fetch(url);
}