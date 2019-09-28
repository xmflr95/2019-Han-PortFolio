// Get modal element
const projectCount = 5;

const app = document.getElementById('project-items');
// let items = document.getElementsByClassName('project-item');
const modalList = document.getElementById('modalList');

let modal = [];
for (let i = 0; i < projectCount; i++) {
  modal.push(document.getElementsByClassName('modal')[i]);
}

const m1 = document.getElementsByClassName('project-item')[0];
const m2 = document.getElementsByClassName('project-item')[1];
const m3 = document.getElementsByClassName('project-item')[2];
const m4 = document.getElementsByClassName('project-item')[3];
const m5 = document.getElementsByClassName('project-item')[4];

m1.addEventListener('click', function() {
  modal1.style.display = 'block';
});
m2.addEventListener('click', function() {
  modal2.style.display = 'block';
});
m3.addEventListener('click', function() {
  modal3.style.display = 'block';
});
m4.addEventListener('click', function() {
  modal4.style.display = 'block';
});
m5.addEventListener('click', function() {
  modal5.style.display = 'block';
});

modalList.addEventListener('click', e => {
  if (e.target.tagName == "SPAN") {
    closeModal();
  }
});

let modal1 = document.getElementById('project-modal-1');
let modal2 = document.getElementById('project-modal-2');
let modal3 = document.getElementById('project-modal-3');
let modal4 = document.getElementById('project-modal-4');
let modal5 = document.getElementById('project-modal-5');

let closeBtn1 = document.getElementsByClassName('closeBtn')[0];

// Listen for Outside click
window.addEventListener('click', outsideClick);

// function to close modal
function closeModal() {
  modal1.style.display = 'none';
  modal2.style.display = 'none';
  modal3.style.display = 'none';
  modal4.style.display = 'none';
  modal5.style.display = 'none';
}

// function to close modal if outside click
function outsideClick(e) {
  if (e.target == modal[0]) {
    modal[0].style.display = 'none';
  } else if (e.target == modal[1]) {
    modal[1].style.display = 'none';
  } else if (e.target == modal[2]) {
    modal[2].style.display = 'none';
  } else if (e.target == modal[3]) {
    modal[3].style.display = 'none';
  } else if (e.target == modal[4]) {
    modal[4].style.display = 'none';
  }
}
