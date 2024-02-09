import menu1 from "./images/menu1.jpg";
import menu2 from "./images/menu2.jpg";
import menu3 from "./images/menu3.jpg";
import menu4 from "./images/menu4.jpg";
import menu5 from "./images/menu5.jpg";
import menu6 from "./images/menu6.jpg";

export default function menu() {
  const menuDiv = document.createElement("div");
  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const menuItems = [
    {
      name: "Savory Zenith",
      description: "A fusion of delicate flavors in every bite.",
      image: menu1,
    },
    {
      name: "Mystic Tandoori Delight",
      description: "Tantalize your taste buds with an exotic blend of spices.",
      image: menu2,
    },
    {
      name: "Oceanic Symphony Sushi",
      description: "Fresh, vibrant, and a melody of sea-inspired goodness.",
      image: menu3,
    },
    {
      name: "Golden Crisp Tempura",
      description: "Crispy perfection with a golden touch of tempura delight.",
      image: menu4,
    },
    {
      name: "Zesty Mediterranean Feast",
      description: "A burst of Mediterranean flavors in every dish.",
      image: menu5,
    },
    {
      name: "Decadent Chocolate Eruption",
      description:
        "Indulge in a chocolate lover's paradise with this sweet eruption.",
      image: menu6,
    },
  ];

  for (let i = 0; i < menuItems.length; i++) {
    const card = document.createElement("div");

    const cardImg = new Image(200);
    cardImg.src = menuItems[i].image;

    const cardHeader = document.createElement("h3");
    cardHeader.textContent = menuItems[i].name;

    const cardText = document.createElement("p");
    cardText.textContent = menuItems[i].description;

    card.append(cardImg, cardHeader, cardText);
    menuDiv.append(card);
  }

  return menuDiv;
}
