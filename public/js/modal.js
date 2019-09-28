// Get modal element
const projectCount = 5;

const app = document.getElementById('project-items');
// let items = document.getElementsByClassName('project-item');
const modalList = document.getElementById('modalList');

let modal = [];
for (let i = 0; i < projectCount; i++) {
  modal.push(document.getElementsByClassName('modal')[i]);
}

app.addEventListener('click', function(e) {
  if (e.target.tagName == "IMG") {
    let str = e.target.src;
    let value = str.slice(44, 45);
    // lastIndexOf(".") = 45
    // console.log(value);

    if (value == 1) {
      modal1.style.display = 'block';

    } else if (value == 2) {
      modal2.style.display = 'block';
      
    } else if (value == 3) {
      modal3.style.display = 'block';
      
    } else if (value == 4) {
      modal4.style.display = 'block';
     
    } else if (value == 5) {
      modal5.style.display = 'block';
      
    } 
  }
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
