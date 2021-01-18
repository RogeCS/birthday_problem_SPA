import { pages } from "../pages/index";

let content = document.getElementById("root");
const router = async (route) => {
  content.innerHTML = "";

  console.log(route);

  switch (route) {
    case "": {
      return content.appendChild(pages.home());
    }
    case "#/birthday_home": {
      return content.appendChild(pages.birthday_home());
    }
    default: {
      return content.appendChild(pages.notFound());
    }
  }

};

export { router };