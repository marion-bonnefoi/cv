function closeMenu(){
  let case1 = document.getElementsByClassName('checkbox')[0];
  console.log(case1);
  case1.checked = false;
  console.log(case1);
  let menuMobile = document.getElementsByClassName('menu-items')[0];
  console.log(menuMobile);
  menuMobile.style.transform = 'translate(-150%)';
}
function openMenu(){
  let case1 = document.getElementsByClassName('checkbox')[0];

  let menuMobile = document.getElementsByClassName('menu-items')[0];
  if(case1.checked = true){
    closeMenu()
  }else{
    case1.checked = true;
    menuMobile.style.transform = 'translate(0%)';
    console.log('test');
  }
}
