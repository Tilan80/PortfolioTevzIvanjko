import './style.css'
import Experience from './Experience/Experience';
const experience = new Experience(document.querySelector(".experience-canvas"));

document.getElementById("close").addEventListener("click", function() {
    let elem = document.getElementById("click0");
    elem.style.zIndex = 1;
  });
document.getElementById("close1").addEventListener("click", function() {
    let elem = document.getElementById("click1");
    elem.style.zIndex = 1;
  });
document.getElementById("close2").addEventListener("click", function() {
    let elem = document.getElementById("click2");
    elem.style.zIndex = 1;
  });
document.getElementById("close3").addEventListener("click", function() {
    let elem = document.getElementById("click3");
    elem.style.zIndex = 1;
  });