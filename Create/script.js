const apprenants = [
  "Abel",
  "Alexandra",
  "Anthony",
  "Benjamin",
  "Bruno",
  "Delphine",
  "Emilien",
  "Ethan",
  "Ismaël",
  "Jodie",
  "Julien",
  "Louka",
  "Loïc",
  "Luciano",
  "Marine",
  "Nikko",
  "Noa",
  "Steve",
  "Sylvain",
  "Thomas",
  "Willy",
];

// Sélection de l'élément <article>
const article = document.querySelector("article");

// Parcourir chaque nom d'apprenant
for (let i = 0; i < apprenants.length; i++) {

  // Créer un nouvel élément <section>
  const section = document.createElement("section");

  // Définir une couleur de fond aléatoire pour chaque section
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  section.style.backgroundColor = "#" + randomColor;

  // Déterminer la couleur du texte en fonction de la couleur de fond
  if (parseInt(randomColor, 16) > 8388607) {
    section.style.color = "white";
  } else {
    section.style.color = "black";
  }

  // Créer un nouvel élément <p> avec le nom de l'apprenant
  const paragraph = document.createElement("p");
  paragraph.textContent = apprenants[i];

  // Ajouter le nouvel élément <p> à la nouvelle section
  section.appendChild(paragraph);

  // Ajouter la nouvelle section à l'élément <article>
  article.appendChild(section);
}
