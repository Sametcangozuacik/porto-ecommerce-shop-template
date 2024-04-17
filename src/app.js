document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.header-nav-link-1');

  hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      menu.classList.remove('show-menu');
    }
  });
});


function toggleImages(direction) {
  var firstImage = document.getElementById("firstImage");
  var secondImage = document.getElementById("secondImage");

  if (direction === 'left') {
    firstImage.classList.remove("hidden");
    secondImage.classList.add("hidden");
  } else if (direction === 'right') {
    firstImage.classList.add("hidden");
    secondImage.classList.remove("hidden");
  }
}


