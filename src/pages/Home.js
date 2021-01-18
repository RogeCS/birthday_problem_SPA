import '../styles/Home.css';
import view from '../views/Home.html'

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
}