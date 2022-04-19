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
