
function newItem(){

//javascript commented out (in green), jQuery conversion in color
//1. Adding a new item to the list of items: 
  //  let li = document.createElement("li");
        let li = $('<li></li>');

  //  let inputValue = document.getElementById("input").value;
        let inputValue = $('#input').val();
  
  //  let text = document.createTextNode(inputValue);
  //  li.appendChild(text);
        li.append(inputValue);


// conditional rewritten in jquery:
   if (inputValue === '') {
     alert("You must write something!");
   } else {
    //  let list = document.querySelector('#list');
    //  list.appendChild(li);
    $('#list').append(li);
   }



 //2. Crossing out an item from the list of items:
   function crossOut() {
 		// li.classList.toggle("strike"); 
    li.toggleClass("strike");
 	}
 	li.addEventListener("dblclick",crossOut);

 //3(i). Adding the delete button "X": 
  //  let crossOutButton = document.createElement("crossOutButton");
  let crossOutButton = $('<crossOutButton></crossOutButton>');

 	// crossOutButton.appendChild(document.createTextNode("X"));
   crossOutButton.append(document.createTextNode('X'));

 	// li.appendChild(crossOutButton);
   li.append(crossOutButton);


   
 	crossOutButton.addEventListener("click", deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.classList.add("delete")
 	}
 // 4. Reordering the items: 
   $('#list').sortable();

}

 







// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.








  /*
// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
   $('#list').sortable();
*/










 