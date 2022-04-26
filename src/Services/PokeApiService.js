const { type } = require("express/lib/response");
const fetch = require("node-fetch");
const baseUrl = "https://pokeapi.co/api/v2/";
const max = Number.MAX_SAFE_INTEGER;

exports.GetPokemonByName = async (name) => {      
    let url = baseUrl + `pokemon/${name}`;
    let pokemon = (await fetch(url)).json();

    return pokemon;
};

exports.GetPokemonForms = async (name) => {
    let url = baseUrl + `pokemon-species/${name}`;
    let response = await (await fetch(url)).json();
    
    url = response['evolution_chain']['url'];
    response = await (await fetch(url)).json();

    let evolucoes = [];
    let aux = response['chain'];

    while(aux != undefined && aux['species'] != undefined){
        evolucoes.push(aux['species']);
        aux = aux['evolves_to'][0]
    }

    return evolucoes;
};

exports.GetAllPokemons = async () => {
    let url = baseUrl + `pokemon?limit=${max}&offset=0`;
    let pokemons = (await fetch(url)).json();

    return pokemons;
};

exports.GetManyPokemonsByQtde = async (qtde) => {
    let url = baseUrl + `pokemon?limit=${qtde}&offset=0`;
    let pokemons = (await fetch(url)).json(); 

    return pokemons;
};

exports.GetManyByType = async (type) => {
    let url = baseUrl + `type/${type}`;
    let pokemons = (await fetch(url)).json();

    return pokemons;
};

exports.GetBerryByName = async (name) => {
    let url = baseUrl + `berry/${name}`;
    let berries = (await fetch(url)).json(); 

    return berries;
}

exports.GetQtdeEvolucao = async (name) => {
    let formas;
    let Quantidade = 0;
    name = name;
    
    await this.GetPokemonForms(name).then(res => formas = res);

    for(let index = 0; index < formas.length; index++){
        if(formas[index]['name'] == name){
            Quantidade = formas.length - (index + 1);
            break;
        }
    }

    return Quantidade;
} 
