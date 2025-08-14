//Problem-01 : Train TT's Fine Calculator 

function totalFine(fare) {
    // You have to write your code here

    if ( typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    } else {
        let fine = fare + fare * (20 / 100) + 30;
        return fine;
    }
}
// let calculateFine = totalFine("dot dot dot");
// console.log(calculateFine);


// ------------------------------

// Problem-02 : Clean & Capitalize Characters

let text =  "It's alright.";
console.log(text);