/*
  Objectif :
  Créer un objet `message` contenant les propriétés (clés) suivantes :
    - `text` ayant pour valeur `Hello, how are you?`
    - `date` ayant pour valeur `2019-01-11`
*/

// Début de votre code
message = {
	text: "Hello, how are you ?",
	date: "2019-01-11"
};
// Fin de votre code

const keyName = "text";

// Notez la présence de crochets dans la ligne suivante. Les crochets ne sont pas utilisés que pour les tableaux.
console.log(message[keyName]); // Doit afficher `Hello, how are you?`
