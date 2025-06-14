const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//Display Mobile menu
const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}
menu.addEventListener('click',mobileMenu);
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');

  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

const getValuesFromInputs = () =>{
   const profileImg = document.querySelector('input.profile-img').files[0];

   document.querySelector('form').style.display = 'none';

   return [profileImg];
   const convertInputValues = () => {
  const [profileImg] = getValuesFromInputs();

  const profileImgURL = URL.createObjectURL(profileImg);

  return[profileImgURL]
}
}
const addInputToProfile = () => {

    const [profileImgURL]  = convertInputValues();


    document.querySelector('.profile img').setAttribute('src', profileImgURL);

}
document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();
  addInputToProfile();
});
