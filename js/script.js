
console.log(10+'20');
var total = 0;
var cartCount = 0;
document.getElementById('menBlackLeather').addEventListener('click',function(){
  cartCount += 1; //cartCount = cartCount +1 //
  document.getElementById('cartCount').innerHTML = '<h6 class="cartCount">' + cartCount + '</h6>';
  document.getElementById('cart').innerHTML += '<br><h3 class="cartProduct">Men Black Leather </h3>' + '<h3 class="cartProduct">NZ$ 189.99</h3>';
  total = total + 189.99;
  document.getElementById('total').innerHTML = total;
});


document.getElementById('menBrownLeather').addEventListener('click',function(){
  cartCount += 1;
  document.getElementById('cartCount').innerHTML = '<h6 class="cartCount">' + cartCount + '</h6>';
  document.getElementById('cart').innerHTML += '<br><h3 class="cartProduct">Men Brown Leather </h3>' + '<h3 class="cartProduct">NZ$ 199.99</h3>';
  total = total + 199.99;
  document.getElementById('total').innerHTML = total;
});

document.getElementById('womenBlackJandal').addEventListener('click',function(){
  cartCount += 1;
  document.getElementById('cartCount').innerHTML = '<h6 class="cartCount">' + cartCount + '</h6>';
  document.getElementById('cart').innerHTML += '<br><h3 class="cartProduct">Women Black Jandal </h3>' + '<h3 class="cartProduct">NZ$ 215.99</h3>';
  total = total + 215.99;
  document.getElementById('total').innerHTML = total;
});

document.getElementById('womenDottedLeather').addEventListener('click',function(){
  cartCount += 1;
  document.getElementById('cartCount').innerHTML = '<h6 class="cartCount">' + cartCount + '</h6>';
  document.getElementById('cart').innerHTML += '<br><h3 class="cartProduct">Women Dotted Leather </h3>' + '<h3 class="cartProduct">NZ$ 189.99</h3>';
  total = total + 189.99;
  document.getElementById('total').innerHTML = total;
});

//$('#cart').hide(); // jQuery hide

document.getElementById('cart').style.display = 'none';


// $('#cartBtn').click(function(){
//
// });

document.getElementById('cartBtn').addEventListener('click',function(){
  document.getElementById('cart').style.display = 'block';
  document.getElementById('productPage').style.display = 'none';

});

document.getElementById('productBtn').addEventListener('click',function(){
  document.getElementById('cart').style.display = 'none';
  document.getElementById('productPage').style.display = 'block';

});
