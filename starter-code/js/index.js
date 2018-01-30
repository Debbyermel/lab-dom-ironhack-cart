function deleteItem(elementId){
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(context,func){
    var btn = document.createElement("btn");

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
  var para = document.createElement("span");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);
var element = document.getElementById("name");
element.appendChild(para);
}
createItemNode(dataType, itemData);

}

  function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(container);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
