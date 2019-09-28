const toggler = document.querySelector('.navbar-toggler');
const toggleNavbar = document.querySelector('.toggle-nav');
const toggleA = toggleNavbar.querySelectorAll('.cool-link');

let browserWidth = window.innerWidth;

window.addEventListener('resize', CheckToggleWidth);

function CheckToggleWidth() {
  let toggleCurrent = toggleNavbar.style.display;
  if (toggleCurrent == 'block' && browserWidth >= 768) {
    browserWidth = window.innerWidth;
    // console.log(browserWidth);
    toggleNavbar.style.display = 'none';
  } else {
    browserWidth = window.innerWidth;
    // console.log(browserWidth);
  }
}

toggler.addEventListener('click', (e) => {
  // console.log('Clicked!')
  let toggleNow = toggleNavbar.style.display;

  if (toggleNow != 'block') {
    toggleNavbar.style.display = 'block';
  } else {
    toggleNavbar.style.display = 'none';
  }
});

window.addEventListener('click', closeToggle);

function closeToggle(e) {
  if (e.target == toggleA[0]) {
    // console.log(toggleA[0]);
    toggleNavbar.style.display = 'none';
  } else if (e.target == toggleA[1]) {
    // console.log(toggleA[1]);
    toggleNavbar.style.display = 'none';
  } else if (e.target == toggleA[2]) {
    // console.log(toggleA[2]);
    toggleNavbar.style.display = 'none';
  } else if (e.target == toggleA[3]) {
    // console.log(toggleA[3]);
    toggleNavbar.style.display = 'none';
  }
}