const navbarTopOffset = document.querySelector('.navbar').offsetTop;
let windowTopOffset = window.pageYOffset;

setFixedTop(windowTopOffset, navbarTopOffset)

window.addEventListener("scroll", () => {
  windowTopOffset = window.pageYOffset;

  setFixedTop(windowTopOffset, navbarTopOffset)
});

function setFixedTop(windowTopOffset, navbarTopOffset) {
  if (windowTopOffset >= navbarTopOffset) {
    document.querySelector('.navbar').classList.add("fixed-top");
  } else {
    document.querySelector('.navbar').classList.remove("fixed-top");
  }
}
