// Option 3 - SmoothScroll Script
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 500,
  easing: 'easeOutQuad'
});
// contact Button Scroll
const scrollContact = new SmoothScroll('.home-content a[href*="#"]', {
  speed: 300,
  easing: 'easeOutQuart'
})
const toggleNavScroll = new SmoothScroll('.navbar-toggle .list a[href*="#"]', {
  speed: 500,
  easing: 'easeOutQuad'
})

// Scroll Event Option Script
const navbar = document.getElementsByClassName('navbar')[0];
const toggleScrollNav = document.querySelector('.toggle-nav');

let list = [];

for (let i = 0; i < 5; i++) {
  let listNum = document.getElementsByClassName('list')[i];
  list.push(listNum);
}

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  // console.log(scrolled);

  const calcHeight = window.innerHeight;

  // 스크롤이 200을 넘어 내려가면 클래스 추가;
  if (scrolled >= 200) {
    // console.log("Scrolled Over 150!");
    navbar.classList.add('nav-scrolled');
    toggleScrollNav.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
    toggleScrollNav.classList.remove('nav-scrolled');
  }
});

