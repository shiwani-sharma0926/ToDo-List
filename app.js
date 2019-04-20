function todoList() {
  // item is a variable which takes element by id
  var item = document.getElementById("todoInput");

  // if the value will not given and input field will be blank then it will not show and will be false
  if (item.value == "") {
    return false;
  }
  // text is a variable which  takes TextNode
  var text = item.value;

  // initial value will be blank
  item.value = "";

  // closeButton is a variable it will create an element "button" in DOM
  var closeButton = document.createElement("button");

  // we are giving property that what will be the type of button
  closeButton.type = "button";

  // textContent is a property which is used to write a text into the button
  closeButton.textContent = "Delete";

  // We are creating a class by using className property
  closeButton.className = "deletebtn";

  // newItem creates an elememt "li" in DOM
  var newItem = document.createElement("li");

  // textHolder is a variable which creates an element input
  var textHolder = document.createElement("input");

  // we had given the property "type" it will show that input will take a value in the form of text.
  textHolder.type = "text";

  // the value property takes a value , on the top we had asign the value in the text variable so we are accesing the value here
  textHolder.value = text;

  // edittext is a class which is created with className property through textHolder variable
  textHolder.className = "edittext";

  // newItem will append the text which we will give in the input box
  newItem.appendChild(textHolder);

  // newItem will be store in  closeButton
  newItem.appendChild(closeButton);

  closeButton.addEventListener("click", function() {
    // eventListener will work when user click the button
    this.parentElement.style.display = "none"; // value will be hide it will not delete besides it will not display
  });

  document.getElementById("todoList").appendChild(newItem);
}
