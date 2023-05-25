

// navbar-menu part start...............................................

const menuIcon = document.querySelector('#menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');

menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.toggle('fa-times')
    navbarMenu.classList.toggle('active')
})





// scroolspy part  start........................................................................

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar-menu a');
 
window.onscroll = () => {

  // Menu Icon Scrool korle remove hobe .........
  menuIcon.classList.remove('fa-times');
  navbarMenu.classList.remove('active');
  // search part remove hobe scrool korle................
  formSection.classList.remove('active');

 

  // page scrool kore jokhon je part a jabe tokhon menur sei part select hnbe

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar-menu a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// //  search part start..................................................



// search part validation
const searchIcon= document.querySelector('#search-icon');
const formSection = document.querySelector('.form-section');
const closeItem = document.querySelector('.close');

searchIcon.addEventListener('click', ()=>{
    formSection.classList.toggle('active');
})

closeItem.addEventListener('click', ()=>{
    formSection.classList.remove('active')
})



formSection.addEventListener('keydown', ()=>{

})


// Home Section Start ...........................
// swiper-slide

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  loop:true
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   on: {
//     autoplayTimeLeft(s, time, progress) {
//       progressCircle.style.setProperty("--progress", 1 - progress);
//       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//     }
//   }
});

// Review Section start............................................................
// swiper-slide



var swiper = new Swiper(".reviewslider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  loop:true,
  breakpoints:{
    0:{
      slidesPerView :1,
    },
    640:{
      slidesPerView :2,
    },
    768:{
      slidesPerView :2,
    },
   1024:{
    slidesPerView :3,
   },

  }

});







// loader part start

function loader() {
  document.querySelector('.loader-content').classList.add('fade-out');
}


function fadeOut() {
  setInterval(loader,1500);

}


window.onload = fadeOut;









// login page show part

const loginIcon = document.querySelector('#login-icon');
const loginPage = document.querySelector('.loginPage');

loginIcon.addEventListener('click', ()=>{
  loginPage.classList.toggle('active');
})

document.querySelector('#loginclose').addEventListener('click', ()=>{
  loginPage.classList.remove('active');
})



//   Favorite Cart Design

const addfavorite = document.querySelectorAll('.addfavorite');
const FavoriteSection = document.querySelector('.FavoriteSection');
const heartIcon = document.querySelector('#heart-icon');


heartIcon.addEventListener('click', ()=>{
  FavoriteSection.classList.toggle('active');
})


addfavorite.forEach(element => {
  count = 0;
  element.addEventListener('click', (e)=>{
    e.preventDefault();
    count++;
 let text =element.innerHTML;
 console.log(text);
 console.log(count);
 let parent = element.parentElement;
console.log(parent);
FavoriteSection.append(parent);
    
  });
});