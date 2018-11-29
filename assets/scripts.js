// SideMenu
const sideMenuButtons = document.querySelectorAll('.sidemenu-button');
const sideMenu = document.querySelector('.sideMenu');

for(const button of sideMenuButtons) {
  button.addEventListener('click', toggleSideMenu);
}

function toggleSideMenu() {
  sideMenu.classList.toggle('active');
}
