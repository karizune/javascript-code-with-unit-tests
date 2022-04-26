const PokeApiService = require("../src/Services/PokeApiService.js");

var timeout = 5 * 60000; // 5 minutos de timeout pq internet ta foda viu
jest.setTimeout(timeout);

test("Espera-se que tenha 1000+ pokemons", async () => {
    let Pokemons = await PokeApiService.GetAllPokemons();
    expect(Pokemons['results'].length).toBeGreaterThanOrEqual(1000);
});

test("Espera-se que a berry tenha tamanho igual a 20", async ()=> {
    let Berry = await PokeApiService.GetBerryByName("cheri");
    expect(Berry['size']).toBe(20);
});

test("Espera-se que tenha 88+ pokemons do tipo fogo", async () => {
    let Response = await PokeApiService.GetManyByType("fire");
    let Pokemons = Response['pokemon'];
    expect(Pokemons.length).toBeGreaterThanOrEqual(88);
});

test("Espera-se que tenha exatamente 10 pokemons", async () => {
    let Pokemons = await PokeApiService.GetManyPokemonsByQtde(10);
    expect(Pokemons['results'].length).toBe(10);
});

test("Espera-se que a segunda habilidade do pikachu seja lightning-rod", async (name = "Pikachu") => {
    let Pokemon = await PokeApiService.GetPokemonByName(name);
    expect(Pokemon['abilities'][1]['ability']['name']).toBe("lightning-rod");
});

test("Espera-se que o pikachu tenha exatamente 3 formas", async () => {
    let PokemonForms = await PokeApiService.GetPokemonForms("pikachu");
    expect(PokemonForms.length).toBe(3);
});

test("Espera-se que o pikachu tenha apenas uma evolução", async () => {
    let PokemonEvolutions = await PokeApiService.GetQtdeEvolucao("pikachu");
    expect(PokemonEvolutions).toBe(1);
});

test("Espera-se que a terceira forma do charmander seja charizard", async () => {
    let PokemonForms = await PokeApiService.GetPokemonForms("charmander");
    expect(PokemonForms[2]['name']).toBe("charizard");
});

test("Espera-se que o squirtle tenha 2 evoluções", async () => {
    let qtde = await PokeApiService.GetQtdeEvolucao("squirtle");
    expect(qtde).toBe(2);
});

// mock area

test("mock implementation one time", async () => {
    const mock = jest.fn();

    let testPokemon = await PokeApiService.GetPokemonForms("pikachu");

    async function mockTest(NomePokemon, QtdeFormas){
        let pokemon;

        if(NomePokemon !== undefined){
            pokemon = await PokeApiService.GetPokemonByName(NomePokemon);
            let qtdeFormas;
            await PokeApiService.GetPokemonForms(QtdeFormas).then(res => {
                qtdeFormas = res.length;
            });
            pokemon = await PokeApiService.GetPokemonForms(NomePokemon);
        }

        return pokemon;
    }

    mock(await mockTest("pikachu", 3));

    expect(mock.mock.calls.length).toBe(1);
});