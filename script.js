var header = document.getElementById('Header');

window.addEventListener('scroll', ()=> {
  
  var scroll = window.scrollY
  
  if (scroll>10) {
    header.style.backgroundColor = '#0A141D'
  } else {
    header.style.backgroundColor = 'transparent'
  }
  
})

const accordionItems = document.querySelectorAll('.item');

accordionItems.forEach(item => {
  const checkbox = item.querySelector('.btn-accordion');
  
  checkbox.addEventListener('change', () => {
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.btn-accordion').checked = false;
      }
    });
  });
});

const accordionLabel = document.querySelector('.accordion-label');
const container = document.querySelector('.container');

accordionLabel.addEventListener('click', () => {
  container.classList.toggle('active');
});

function openElement(idVentana) {
  var ventanas = document.getElementsByClassName("ventana");
  for (var i = 0; i < ventanas.length; i++) {
    if (ventanas[i].id === idVentana) {
      ventanas[i].style.display = "block";
    } else {
      ventanas[i].style.display = "none";
    }
  }
}

function closeElement(idVentana) {
  var ventana = document.getElementById(idVentana);
  ventana.style.display = "none";
}














