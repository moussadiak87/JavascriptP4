/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
    return texte1.concat (texte2);
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.slice(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
  if(typeof texte == 'string'){
    return true
  }
}
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array){
    return array.map(Math.abs);
}
var sufaceCercle = function (rayon) {
    var result = Math.PI * Math.pow(rayon,2);
    result = Math.round(result);
    return result;
}
var hypothenuse = function (ab, ac) {
  var hypo = Math.pow(ab,2) + Math.pow(ac,2)
    return Math.sqrt(hypo);
}
var calculIMC = function (poids, taille) {
  var imc = (poids / Math.pow(taille,2))
    return Math.round(imc*100)/100;
}