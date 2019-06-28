/*
  N'oubliez pas de convertir `num` en Number
  Mot clés Google : `javascript convert string to number`
*/

const generateString = num => {
  let str = "";

  // Début de votre code
  x = parseInt(num);

  for (let i = 0; i < x; i++) {
    if (i === 0) {
      str += "o";
    } else {
      str = "-" + str;
    }
  }
  // Fin de votre code

  return str;
};

/*
- Doit afficher `---o` lorsque nous exécutons le script avec la commande `node chemin_du_fichier 4`
- Doit afficher `----o` lorsque nous exécutons le script avec la commande `node chemin_du_fichier 5`
*/
console.log(generateString(process.argv[2]));
