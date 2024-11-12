const bici = [
    { nome: `bici 1`, peso: 15 },
    { nome: `bici 2`, peso: 9 },
    { nome: `bici 3`, peso: 20 },
    { nome: `bici 4`, peso: 18 },
    { nome: `bici 5`, peso: 7 },
    { nome: `bici 6`, peso: 28 },
    { nome: `bici 7`, peso: 9 },
    { nome: `bici 8`, peso: 5 }
];
console.log(`Bici con peso di 10 kg o meno:`);

for(let i = 0; i < bici.length; i++){
    const currBici = bici[i];
    if(currBici.peso <= 10) {
        console.log(`nome: ${currBici.nome} peso: ${currBici.peso} kg`);
    }
}

