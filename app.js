const navBtn = document.querySelector(".nav-trigger");
const navLinks = document.querySelector(".nav-links");
const lis = document.querySelectorAll(".nav-links li");
const links = document.querySelectorAll(".nav-links li a");


navBtn.addEventListener("click", e => {
  navLinks.classList.toggle("open");

  lis.forEach(li => {
    navLinks.classList.toggle("open");

    li.classList.toggle("fade");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");

      lis.forEach(li => {
        li.classList.remove("fade");
      });
    });
  });
});

window.addEventListener("resize", () => {
    console.log(document.body.clientWidth)

  if (document.body.clientWidth >= 751 && navLinks.classList.contains("open") ) {
    navLinks.classList.remove("open");
    lis.forEach(li => {
      li.classList.remove("fade");
    });
  }
});

