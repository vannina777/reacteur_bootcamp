/*
  Dans cet exercice vous ne devrez pas coder !
  Vous devrez expliquer pourquoi une erreur est déclenchée.
*/

const name = "Farid";

const showName = () => {
  console.log(name); // Affichera `Farid`, ne déclenche pas d'erreur
  const fullName = "Farid Safi";
};

showName();

console.log(fullName); // Déclenchera une erreur `ReferenceError: fullName is not defined`

// Début de votre explication
// Ici pas de code. Essayez d'expliquer avec vos mots, pourquoi l'erreur est apparue.
`La variable fullName n'éxiste pas.

De plus, dans sa déclaration, la fonction n'attends aucune variable. Ainsi, elle n'accepte par que l'on passe la variable Fullname.`;
// Fin de votre explication
