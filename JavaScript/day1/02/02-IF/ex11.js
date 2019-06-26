/*
  Dans cet exercice vous devrez utiliser les instructions `if`, `else if` afin d'afficher les messages suivants :
  Ce fruit est une banane
  Ce fruit est un abricot
  Ce fruit est une pêche
  Je ne connais pas ce fruit
*/

const detectFruit = fruit => {
  // Début de votre code
  if (fruit === "banane") {
    console.log("Ce fruit est une banane");
  } else if (fruit === "abricot") {
    console.log("Ce fruit est un abricot");
  } else if (fruit === "pêche") {
    console.log("Ce fruit est une pêche");
  } else {
    console.log("Je ne connais pas ce fruit");
  }
  // Fin de votre code
};

detectFruit("banane");
detectFruit("abricot");
detectFruit("pêche");
detectFruit("poire");
