import aboutMain from "./images/sample2.jpeg";

export default function about() {
  const aboutDiv = document.createElement("div");
  const aboutImg = new Image(1000);
  aboutImg.src = aboutMain;
  const aboutText = document.createElement("div");
  aboutText.innerHTML = `<h2>Our Story</h2>
  <p>Welcome to Gastronome Haven, where culinary passion meets a love for creating memorable dining experiences. Our story begins with a commitment to sourcing the finest ingredients and infusing them with creativity to bring you a unique and delightful gastronomic journey. From the bustling kitchen to the warm ambiance of our dining space, every element is crafted with care to ensure that your visit is not just a meal but a celebration of flavors and moments.</p>

  <h2>The Culinary Craftsmanship</h2>
  <p>At Gastronome Haven, we pride ourselves on our culinary craftsmanship. Our chefs, driven by a dedication to excellence, curate a menu that reflects a harmonious blend of tradition and innovation. Each dish tells a story of inspiration drawn from diverse cuisines around the world, with an emphasis on quality, freshness, and a touch of culinary artistry. Whether you are indulging in a comforting classic or exploring a daring fusion creation, expect a symphony of tastes that will leave a lasting impression.</p>

  <h2>A Warm Ambiance</h2>
  <p>Step into our inviting space, where the warmth of hospitality meets the elegance of design. The ambiance at Gastronome Haven is a reflection of our commitment to creating a welcoming environment for our guests. Whether you are gathering with friends, celebrating a special occasion, or simply enjoying a quiet meal, our attentive staff and thoughtfully designed setting aim to enhance your dining experience.</p>

  <h2>Community and Sustainability</h2>
  <p>Beyond the plates and the ambiance, Gastronome Haven is deeply rooted in our commitment to the community and sustainability. We strive to support local farmers and producers, ensuring that our ingredients are not only of the highest quality but also contribute to the well-being of our community. Our dedication to sustainable practices extends to minimizing our environmental footprint, making every effort to create a restaurant that cares for both its patrons and the planet.</p>

  <p>Come, join us at Gastronome Haven, and let us share our passion for food, hospitality, and creating lasting memories. We look forward to welcoming you to a dining experience that goes beyond the ordinary, where every visit is an opportunity to savor life's delicious moments.</p>`;

  aboutDiv.append(aboutImg, aboutText);

  return aboutDiv;
}
