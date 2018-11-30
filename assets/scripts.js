// SideMenu
const sideMenuButtons = document.querySelectorAll('.sidemenu-button');
const sideMenu = document.querySelector('.sideMenu');

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);

for(const button of sideMenuButtons) {
  button.addEventListener('click', toggleSideMenu);
}

document.addEventListener('click', closeSideMenu);

function closeSideMenu(event) {
  console.log(event.target);
  if(event.target !== sideMenu && !sideMenu.contains(event.target)) {
    if(!event.target.classList.contains('sidemenu-button')){
      sideMenu.classList.remove('active');
    }
  }
}

function toggleSideMenu() {
  sideMenu.classList.toggle('active');
}

//Carrousel

const carrouselItems = document.querySelectorAll('.carrouselItem');
const totalWidth = (carrouselItems.length - 1)  * 500;
let carrouselCounter = 0;

automaticCarrousel();
function automaticCarrousel() {
  setTimeout(() => {
    slideRight(totalWidth);
    slideCarrousel();
  }, 5000);
}

function slideRight() {
  if(carrouselCounter == -totalWidth) {
    carrouselCounter = 0;
  } else {
    carrouselCounter -= 500;
  }
  carrouselMove(carrouselCounter);
}

function slideLeft() {
  if(carrouselCounter == 0) {
    carrouselCounter = -totalWidth;
  } else {
    carrouselCounter += 500;
  }
  carrouselMove(carrouselCounter);
}

function carrouselMove(carrouselCounter) {
