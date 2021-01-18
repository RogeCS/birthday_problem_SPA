import view from '../views/Error404.html';
import '../styles/Error404.css';

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;
  return divElement;
};