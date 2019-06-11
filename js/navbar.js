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
};

const navlinkNodeList = document.querySelectorAll('a.nav-scroll');

navlinkNodeList.forEach(navlink => {
  navlink.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId  = navlink.getAttribute('href');
    const targetPos = document.querySelector(targetId).offsetTop;
    const navbarHeight = document.querySelector('.navbar').clientHeight;
    const scrollPos = targetPos - navbarHeight;

    window.scroll({
      top: scrollPos,
      left: 0,
      behavior: 'smooth'
    })
  });
});
