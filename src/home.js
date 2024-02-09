import homeHero from "./images/sample1.jpeg";

export default function home() {
  const heroDiv = document.createElement("div");

  const heroImg = new Image(500);
  heroImg.src = homeHero;

  const headline = document.createElement("h1");
  headline.textContent = "Speedy Bites, Delightful Nights!";

  const description = document.createElement("p");
  description.innerHTML = `Welcome to "Flavor Fusion," where every bite is a burst of excitement!
Our menu blends global tastes for a delicious adventure. <br/><br/>
Cozy up, sip on crafted cocktails, and savor the moment at our laid-back
spot. Join us at "Flavor Fusion" for a culinary journey like no other!`;

  heroDiv.append(heroImg, headline, description);
  return heroDiv;
}
