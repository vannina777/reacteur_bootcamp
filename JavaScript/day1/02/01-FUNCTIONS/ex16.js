/*
  Dans cet exercice vous devrez appeler la fonction `showCurrentStep` plusieurs fois.
  Vous devrez afficher dans le terminal :

  Étape 1
  Étape 2
  Étape 3
  Étape 4
  Étape 5
*/

console.log("Étape 1");

const showCurrentStep = step => {
  console.log("Étape " + step);
};

// Début de votre code
for (let step = 2; step < 5; step++) {
  showCurrentStep(step);
}
// Fin de votre code

console.log("Étape 5");
