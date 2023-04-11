/*
Edit the script.js to
Display the document title in the console
Change the document title to Modifying the DOM
Change the background color of the body to hot pink (#FF69B4). 
If that worked, try with a random color as an extra challenge. 
(tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).
Using the children method and a for ... of  loop, display every children elements 
of the second child element of your document (display all children elements of the <body>)
*/

// Afficher le titre du document dans la console

let title = document.querySelector("title");

console.log(title);

// Remplacez le titre du document par Modification du DOM
document.title ="Modifying the DOM";


// Changez la couleur de fond du corps en rose vif (#FF69B4). Si cela a fonctionné, 
// essayez avec une couleur aléatoire comme défi supplémentaire. 
// (astuce : vous pouvez utiliser la notation rgb() et 3 nombres générés aléatoirement entre 0 et 255).

document.body.style.backgroundColor = "#FF69B4";

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";



// En utilisant la méthode children et une boucle for ... of , affichez 
// tous les éléments enfants du deuxième élément enfant de votre document 
// (affichez tous les éléments enfants du corps )

let secondChild = document.body.children[1];
for (let child of secondChild.children) {
  console.log(child);
}
