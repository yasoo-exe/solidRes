import home from "./home";
import menu from "./menu";
import about from "./about";

const content = document.querySelector("#content");

document.querySelectorAll(".navElement").forEach((element) =>
  element.addEventListener("click", () => {
    const tabContent = element.textContent;
    switch (tabContent) {
      case "Menu":
        content.textContent = "";
        content.appendChild(menu());
        break;
      case "About":
        content.textContent = "";
        content.appendChild(about());
        break;
      default:
        content.textContent = "";
        content.appendChild(home());
        break;
    }
  })
);

document.querySelector("#content").appendChild(home());
