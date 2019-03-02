if(document.readyState =='loading')
{
  document.addEventListener('DOMContentLoaded', ready)
}else {
  ready()
}

/*
function increaseValue() {
  var value = parseInt(document.getElementsByClassName('number').innerText, 10);
  value = isNaN(value) ? 0 : value;
  value++;
console.log(value);
  document.getElementsByClassName('number').Text=value;
}*/




function ready(){
console.log("here")

var removeCarteItemButton = document.getElementsByClassName("remove")
console.log(removeCarteItemButton)
for (var i=0 ; i < removeCarteItemButton.length ; i++ )
{
  var button = removeCarteItemButton[i]
  button.addEventListener("click", removeCarteItem )
}

var quantityInputs= document.getElementsByClassName("quantity")
for (var i=0 ; i < quantityInputs.length ; i++ )
{
  var input = quantityInputs[i]
  input.addEventListener("change", quantityChanged )
}

var  addToCartButton = document.getElementsByClassName('icon-shopping-cart')
for (var i=0 ; i < addToCartButton.length ; i++ )
{
  var button = addToCartButton[i]
  button.addEventListener("click", addToCartClicked )
}

}


function addToCartClicked(event) {
  var button = event.target
  var shopItem= button.parentElement.parentElement
  var decp= document.getElementsByClassName("descption_cart")[0].innerText
  console.log(decp);
  var price = document.getElementsByClassName("price")[0].innerText
  console.log(price);
  var imageP= document.getElementsByClassName("product-grid")[0].style.backgroundImage
  console.log(imageP);
  addItemToCart(decp,price,imageP)
  //increaseValue()
}

function addItemToCart(decp,price,imageP) {
  var cartRow = document.createElement('tr')
  cartRow.classList.add('cart-row')

  var cartRowContent=`
  <tr>
  <td><img width="100" src="" alt=""></td>
  <td>${decp}</td>
  <td> - </td>
  <td>available </td>
  <td class="priceCart">${price}</td>
  <td>
<input class="quantity" style="max-width:34px" placeholder="1" size="16" type="text" value="2">
<!--
        <button type="button" style="margin-left: 10px;">-</button>
        <button  type="button" style="margin-left: 5px;">+</button>
-->
<button class="remove" type="button" value="supprimer" style=" width:60px ; height:20px; margin-left: 10px; background-color: red; border:0px; 	float:center; border-radius: 200px; color:white;"> supprimer </button>
</td>
</tr>
  `
  cartRow.append(cartRowContent)
console.log("hat 1");

}

function quantityChanged(event) {
  var input = event.target
  if(isNaN(input.value) || input.value <= 0)
  {
    input.value=1
  }
  updateCartTotal()
}

function removeCarteItem(event)
{
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()

}

function updateCartTotal(){

  var carteItemContainer = document.getElementsByClassName("cart-item")[0]
  var cartRows = carteItemContainer.getElementsByClassName("cart-row")
  var total = 0
  for (var i=0 ; i < cartRows.length ; i++ )
  {
    var cartRow = cartRows[i]
    console.log("dkhal 1")
    var priceElement = cartRow.getElementsByClassName("priceCart")[0]
    var quantityElement = cartRow.getElementsByClassName("quantity")[0]
    var price = priceElement.innerText.replace('TND','')
    var quantity = quantityElement.value
    console.log(price*quantity)
    total = total + (price*quantity)
    console.log(total);

  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName("total")[0].innerText = total + 'TND'

}
