const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';
    detailedPlayers = players.map((player, i) => {
        return {
            name: player,
            image: "images/super-" + (i + 1) + ".png",
            strength: getRandomStrength(),
            type: Math.ceil(Math.random() * 50) % 2 == 0 ? "hero" : "villain"
        }
    });
    // Instead of forloop use Map method
    // Code here
    return detailedPlayers;
}
// const initPlayers = (players) => {
//     let detailedPlayers = '';

//     // Instead of forloop use Map method
//     // Code here
//     detailedPlayers = players.map((player, i) => {
//         return {
//             name: player,
//             image: "images/super-" + (i + 1) + ".png",
//             strength: getRandomStrength(),
//             type: Math.ceil(Math.random() * 50) % 2 == 0 ? "hero" : "villain"
//         }
//     })
//     return detailedPlayers;
// }

function getType(i) {
    if (i % 2 == 0) {
        return "hero";
    } else {
        return "villain";
    }
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// // Build player template
// const buildPlayers = (players, type) => {
//     let fragment = '';

//     fragment = players.filter(player => player.type == type)
//         .map(
//             player =>
//             `<div class="player">
//             <img src="${player.image}" alt="">
//             <div class="name">${player.name}</div>
//             <div class="strength">${player.strength}</div>
//         </div>`
//         )
//         .join();
//     return fragment;
// }
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    fragment = players.filter(player => player.type == type)
        .map(
            player =>
            `<div class="player">
                <img src="${player.image}" alt="">
                <div class="name">${player.name}</div>
                <div class="strength">${player.strength}</div>
            </div>`
        ).join();
    return fragment;
}
// Instead of using for loop
// Use chaining of Array methods - filter, map and join
// Type your code here


// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}