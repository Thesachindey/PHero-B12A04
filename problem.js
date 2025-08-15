//Problem-01 : Train TT's Fine Calculator 

// function totalFine(fare) {
//     // You have to write your code here

//     if (typeof fare !== "number" || fare <= 0) {
//         return "Invalid";
//     } else {
//         let fine = fare + fare * (20 / 100) + 30;
//         return fine;
//     }
// }
// let calculateFine = totalFine("dot dot dot");
// console.log(calculateFine);


// ------------------------------

// Problem-02 : Clean & Capitalize Characters

// function onlyCharacter(str) {
//     // You have to write your code here
//     if (typeof str === "string") {
//         let modifiedStr = str.split(" ").join("").toUpperCase();
//         return modifiedStr;
//     } else {
//         return "Invalid";
//     }
// }
// let modifiedChar = onlyCharacter("  h e llo wor   ld");
// console.log(modifiedChar);
// .replace(/\s+/g, ""); also done by this one;



// -----------------------------

// Problem-03 : FIFA Best Team Award 

// function bestTeam(player1, player2) {
//     // You have to write your code here
//     if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null) {
//         return "Invalid";
//     }

//     let total1 = player1.foul + player1.cardY + player1.cardR;
//     let total2 = player2.foul + player2.cardY + player2.cardR;
//     if (total1 < total2) {
//         return player1.name;
//     } else if (total2 < total1) {
//         return player2.name;
//     } else {
//         return "Tie";
//     }

// }

// let fearTeam = bestTeam(
//    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"
// );

// console.log(fearTeam);


