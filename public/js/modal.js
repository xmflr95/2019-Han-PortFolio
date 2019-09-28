// Get modal element
const projectCount = 5;

let app = document.getElementById('project-items');
// let items = document.getElementsByClassName('project-item');
let modalList = document.getElementById('modalList');
let modal = [];
for (let i = 0; i < projectCount; i++) {
  modal.push(document.getElementsByClassName('modal')[i]);
}

app.addEventListener('click', e => {
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

  // console.log(e.target);
});

let modal1 = document.getElementById('project-modal-1');
let modal2 = document.getElementById('project-modal-2');
let modal3 = document.getElementById('project-modal-3');
let modal4 = document.getElementById('project-modal-4');
let modal5 = document.getElementById('project-modal-5');

let closeBtn1 = document.getElementsByClassName('closeBtn')[0];

// Get open modal button
// let modalBtn = [];
// for (let i = 1; i <= projectCount; i++) {
//   modalBtn.push(document.getElementById(`project${i}`));
// }

// Get close button
// let closeBtn = [];
// for (let i = 0; i < projectCount; i++) {
//   closeBtn.push(document.getElementsByClassName('closeBtn')[i]);
// }

// Listen for open click
// modalBtn.addEventListener('click', openModal);

// Listen for close click
// closeBtn1.addEventListener('click', closeModal(1));
// closeBtn2.addEventListener('click', closeModal(2));
// closeBtn3.addEventListener('click', closeModal(3));
// closeBtn4.addEventListener('click', closeModal(4));
// closeBtn5.addEventListener('click', closeModal(5));

// Listen for Outside click
window.addEventListener('click', outsideClick);

// function to open modal
// function openModal() {
//   modal.style.display = 'block';
// }

// function to close modal
function closeModal() {
  modal1.style.display = 'none';
  modal2.style.display = 'none';
  modal3.style.display = 'none';
  modal4.style.display = 'none';
  modal5.style.display = 'none';

  // if (modalNum == 1) {
  //   modal1.style.display = 'none';
  // } else if (modalNum == 2) {
  //   modal2.style.display = 'none';
  // } else if (modalNum == 3) {
  //   modal3.style.display = 'none';
  // } else if (modalNum == 4) {
  //   modal4.style.display = 'none';
  // } else if (modalNum == 5) {
  //   modal5.style.display = 'none';
  // }
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
