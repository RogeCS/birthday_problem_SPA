import { router } from './routes/index';

import './styles/index.css';

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos < 40) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

let open = document.querySelector("#open-nav");
let close = document.querySelector("#close-nav");

open.onclick = function() {
  document.getElementById("mySidenav").style.width = "100%";
}

close.onclick = function() {
  document.getElementById("mySidenav").style.width = "0";
}

const init = () => {
  router(window.location.hash);
  window.addEventListener("hashchange", () => {
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = "0";
    router(window.location.hash);
  });
};

window.addEventListener("load", init);
