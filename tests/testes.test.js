const { TestWatcher } = require("jest");
const PokeApiService = require("../src/Services/PokeApiService.js");

test("Expected response from the pokemon request to be ok", async () => {
    await PokeApiService.GetPokemonByName('ditto').then(res => {
        expect(res['status']).toBe(200);
    });
});

test("Expected response from the berry request to be ok", async () => {
    await PokeApiService.GetBerryByName("cheri").then(res => {
        expect(res['status']).toBe(200);
    });
});

test("Espera-se que o pikachu tenha o id de 25", async ()=> {

    await PokeApiService.GetPokemonByName("pikachu").then(async res => {
        let response = await res.json();
        expect(response['id']).toBe(25);
    });
});

test("Esperar que a altura do pikachu seja 4", async ()=> {

    await PokeApiService.GetPokemonByName("pikachu").then(async res => {
        let pokemon = await res.json();
        expect(pokemon['height']).toBe(4);
    });
});

// verificar se a terceira forma do charmander é um charizard 
test("Esperar que a terceira forma do charmander seja um charizard", async ()=> {
    await PokeApiService.GetPokemonForms("charmander").then(async res => {
        let formas = await res;
        expect(formas[2]['name']).toBe("charizard");
    });
});

test("Esperar se que o squirtle tenha 2 evolução", async ()=> {
    await PokeApiService.GetQtdeEvolucao("squirtle").then(async res => {
        let formas = await res;
        expect(formas).toBe(2);
    });
});


/*
formas
x = TamanhoArray

evoluções
x = TamanhoArray - PosiçãoAtual
*/