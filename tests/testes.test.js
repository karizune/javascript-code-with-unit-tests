const PokeApiService = require("../src/Services/PokeApiService.js");

test("Expected status 200 from fetch request", async () => {
    await PokeApiService.GetPokemonByName('ditto').then(res => {
        expect(res['status']).toBe(200);
    });
});

