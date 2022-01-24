let mobileMenu = document.querySelector(".burger-menu");
console.log(mobileMenu);
let mainMenu = document.querySelector(".navigation");
console.log(mainMenu);

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu")
    }
});

$('.slider').slick({
    dots: false,
    autoplay: 1500,
    arrows: false,
  });
