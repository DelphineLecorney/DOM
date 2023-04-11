// Ajoutez un title attribut à chaque élément qui a la classe importante, en indiquant 
// This is an important item. Astuce : ajouter un attribut title à un élément est 
// différent de changer le titre d'un document.

// Récupère tous les éléments avec la classe "important"
const elements = document.querySelectorAll('.important');

// Parcourt chaque élément et ajoute l'attribut title
elements.forEach((element) => {
    // On ajoute un attribut à l'aide de setAttiribute
  element.setAttribute('title', 'This is an important item');
});


// Sélectionnez toutes les balises img et parcourez-les. S'ils n'ont pas importantde classe, 
// transformez leur propriété d'affichage en none

const images = document.querySelectorAll('img');
images.forEach(image => {
    // classList vérifie si l'élément possède une classe 'importante'
  if (!image.classList.contains('importante')) {
    image.style.display = 'none';
  }
});

// Parcourez tous les paragraphes et affichez leur contenu dans la console. 
// Si le paragraphe a une classe, affiche également son nom de classe/

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    // textContent affiche le contenu dans la console
  console.log(paragraph.textContent);
  // classList vérifie si l'élément possède une classe
  if (paragraph.classList.length > 0) {
    // Si c'est le cas il l'affiche
    console.log(paragraph.classList);
  }
});


// Donnez à chacun des paragraphes une couleur de texte aléatoire 
// (différente pour chacun) SAUF si elle a une classe, puis laissez-la telle quelle.

const paragraphsBis = document.querySelectorAll('p');
paragraphsBis.forEach(paragraph => {
    // classList vérifie si l'élément possède une classe
  if (!paragraph.classList.length) {
    // ON génère une couleur alétoirement 
    // 16777215 c'est la valeur maximale pour une couleur en hexadécimal
    // toString() pour convertir en string
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // On ajoute un # pour que la couleur soit valide
    paragraph.style.color = '#' + randomColor;
  }
});

