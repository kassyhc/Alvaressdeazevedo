document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu-icon');
  var menuDropdown = document.querySelector('.menu-dropdown');
  var menuList = document.querySelector('.menu-dropdown ul');

  menuIcon.addEventListener('click', function() {
    menuList.classList.toggle('menu-open');
  });
});
