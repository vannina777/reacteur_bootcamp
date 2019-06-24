/*
  Dans cet exercice vous devrez simplement executé ce script afin de constater qu'une erreur est déclenchée.
*/

const sum = (a, b) => {
  const total = a + b;
};

sum(10, 20);

// Il n'est pas possible d'avoir accès à la variable `total` car celle-ci n'existe que dans la fonction où elle a été déclaré
console.log(total); // Déclenchera une erreur `ReferenceError: total is not defined`

// Dans l'exercice suivant nous verrons comment accéder à la variable `total` depuis l'exterieur de la fonction sum
