const users = []; // Créer d'un tableau vide
users.push("Xavier"); // Ajouter une chaîne de caractères dans le tableau
users.push("Sofiane"); // Ajouter une chaîne de caractères dans le tableau
users.push("Farid"); // Ajouter une chaîne de caractères dans le tableau
console.log(users); // Le tableau `users` est égal à [ 'Xavier', 'Sofiane', 'Farid' ]

// Parcourir le tableau `users`. Cela signifie que nous allons déclencher des instructions autant de fois qu'il y a d'éléments dans le tableau. C'est-à-dire 3 fois
for (let i = 0; i < users.length; i++) {
  if (i === 0 || i === 1) {
    console.log(users[i]); // Ce `console.log` sera déclenché 2 fois. La première fois il affichera 'Xavier', la deuxième fois 'Sofiane'
  }
}

const joined = users.join(", "); // Conversion d'un tableau en chaîne de caractères
console.log(joined); // La chaîne de caractères `joined` est égal à "Xavier, Sofiane, Farid"
