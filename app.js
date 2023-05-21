$(document).ready(function(){
  $('.bigitem').slick({
    slidesToShow: 5,
  });
});

const arraySelected = [];

function clicked(event) {
  const newBtn = event.currentTarget.getAttribute('data-name');
  const newPrice = event.currentTarget.getAttribute('data-price');
  arraySelected.push({ name: newBtn, price: newPrice });
  console.log(arraySelected);
  console.log(arraySelected.length);

  const arrayLengthElement = document.getElementById('array-length');
  arrayLengthElement.textContent = arraySelected.length;

  let html = '';
  let totalPrice = 0;
  arraySelected.forEach((item) => {
    html += `<p class="product-info"><span class="product-name">${item.name}</span><br><span class="product-price">${item.price}</span></p>`;

    const price = parseFloat(item.price.replace('$', ''));
    totalPrice += price;
  });

  html += `<br> <br> <p class="subtotal">Subtotal:&nbsp <span class="subtotal-value">$${totalPrice.toFixed(2)}&nbsp&nbsp&nbsp</span></p>`;

  const arraySelectedContainer = document.getElementById('arraySelectedContainer');
  arraySelectedContainer.innerHTML = html;
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
