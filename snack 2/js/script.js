const squadre = [
    { nome:"Giuventus", punti: 0, falli: 0 },
    { nome:"Milanina", punti: 0, falli: 0 },
    { nome:"Intero", punti: 0, falli: 0 },
    { nome:"Alguer", punti: 0, falli: 0 },
    { nome:"Chiagliari", punti: 0, falli: 0 },
    { nome:"Amburger", punti: 0, falli: 0 }
];
//Genero numeri random con ciclo for
console.log(`Squadre con numeri random`, squadre);
for(let i = 0; i < squadre.length; i++ ){
    const currSquadre = squadre[i];
    currSquadre.punti = Math.floor(Math.random() * 100 + 1);
    currSquadre.falli = Math.floor(Math.random() * 29 + 1);
}
//Creo nuova array dove salvare e stampare solo Nomi e Falli
const nomiFalli = [];
for(let i = 0; i < squadre.length; i ++){
    const currNomiFalli = squadre[i];
    // const currSquadre = squadre[i];


    // const Squadre = {
    //     nome: currSquadre.nome,
    //     falli: currSquadre.falli
    // };
    // Squadre.push(squadre)
    nomiFalli.push({ nome: currNomiFalli.nome, falli: currNomiFalli.falli });
    // console.log(currNomiFalli.nome , currNomiFalli.falli);
    
}
console.log("Array nomi e falli", nomiFalli);
