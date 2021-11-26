var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {

    // creates an element "li"
    var li = document.createElement("li");
    
    // makes text from input field into the li text
    li.appendChild(document.createTextNode(input.value));

    // adds li to ul
    ul.appendChild(li);

    // Reset text input field
    input.value = "";

    // START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
    // END STRIKETHROUGH

    // START ADD DELETE BUTTON
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteListItem);
    // END ADD DELETE BUTTON

    //ADD CLASS DELETE (DISPLAY: NONE)
    function deleteListItem() {
        li.classList.add("delete")
    }
    //END ADD CLASS DELETE

}

function addListAfterClick() {
    //makes sure that an empty input field doesn't create a li
    if (inputLength() > 0) {
        createListElement();
    }
}

// this now looks to see if you hit "enter"/"return"
// the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

