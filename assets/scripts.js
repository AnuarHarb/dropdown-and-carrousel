const link_items = document.querySelectorAll('.link_item');
const header = document.querySelector('header');

for(const link of link_items) {
  link.addEventListener('mouseover', activateDropdown);
}

header.addEventListener('mouseleave', removeDropdown)

function activateDropdown(event) {
  for(const link of link_items) {
    link.children[0].classList.remove('active');
  }
  const dropdown = event.target.children[0];
  dropdown.classList.add('active');
}

function removeDropdown() {
  for(const link of link_items) {
    link.children[0].classList.remove('active');
  }
}
