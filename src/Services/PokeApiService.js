const { type } = require("express/lib/response");
const fetch = require("node-fetch");
const baseUrl = "https://pokeapi.co/api/v2/";

exports.GetPokemonByName = async (name) => {        
    let url = baseUrl + `pokemon/${name.toLowerCase()}`;
    return await fetch(url);
};

exports.GetPokemonForms = async (name) => {
    let url = baseUrl + `pokemon-species/${name.toLowerCase()}`
    let response = await fetch(url).then(async res => await res.json());
    url = response['evolution_chain']['url'];
    response = await fetch(url).then(async res => await res.json());
    let evolucoes = [];
    let aux = response['chain'];

    while(aux != undefined && aux['species'] != undefined){
        evolucoes.push(aux['species']);
        aux = aux['evolves_to'][0]
    }

    return evolucoes;
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
    let url = baseUrl + `type/${type.toLowerCase()}`;
    return await fetch(url);
};

exports.GetBerryByName = async (name) => {
    let url = baseUrl + `berry/${name.toLowerCase()}`;
    return await fetch(url);
}

exports.GetQtdeEvolucao = async (name) => {
    name = name.toLowerCase();
    let Quantidade = 0;
    // descobrir quantidade de evolução do pokemon squirtle
    await this.GetPokemonForms(name).then(async res => {
        let formas = await res;

        // achar a posição do squirtle e saber quantas evoluções tem
        for(let index = 0; index < formas.length; index++){
            // verificar se o objeto atual tem nome de squirtle
            if(formas[index]['name'] == name){
                //recebendo a quantidade de evoluções 
                Quantidade = formas.length - (index + 1);
                break;
            }
        }
    });

    return Quantidade;
} 