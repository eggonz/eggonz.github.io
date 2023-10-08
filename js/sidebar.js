const toggleButton = document.querySelector('#toggle-button');
const menu = document.querySelector('.sidebar');
const menuItems = document.querySelectorAll(".sidebar-menu li");

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('open');
});

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}