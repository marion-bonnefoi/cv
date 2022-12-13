function closeMenu(){
  let case1 = document.getElementsByClassName('checkbox')[0];
  console.log(case1);
  case1.checked = false;
  console.log(case1);
  let menuMobile = document.getElementsByClassName('menu-items')[0];
  console.log(menuMobile);
  menuMobile.style.transform = 'translate(-150%)';
}
