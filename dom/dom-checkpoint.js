// 1. Select the **second** h1 element and console.log it.

seconds = document.querySelector(`h1`).innerText;
console.log(seconds)

// 2. Select the paragraph with a class of "excerpt" and change its class name
// to "snippet".

excerptPara = document.querySelector(`.excerpt`)
excerptPara.className =`snippet`;

// 3. console.log the number of todo items in the todo-list.

let numb = document.querySelector(".todo-list").children.length;
console.log(numb)

// 4. Write the code such that each time the #n4 div is is clicked, its
// "red" class gets toggled (ONLY the "red" class; "rect" should remain).

function n4div () {
    const theDiv = document.querySelector(`#n4`)
    theDiv.classList.toggle(`red`);
}

// 5. Loop over all the .done-list items and log their text to the console.

const doneList = document.querySelector(`.done-list`).children

for ( let i = 0; i < doneList.length; i++ ) {
    console.log(doneList[i].innerText)
}

// 6. Write the code such that each time the box-mover button is clicked, the
// .box div moves to the right by 10px.

const boxMoverButton = document.querySelector(`#box-mover`)
const boxDiv = document.querySelector(`.box`)

boxMoverButton.addEventListener(`click`, function () {
    const right = window.innerWidth;
    boxDiv.style.right = `10px`;
  })

// 7. Using event delegation with the click event handler on the
// .counter-container element, increment the count by the clicked button's
// associated value (data attribute). When the count reaches 75 or more, show
// the .counter-done element. Use the browser devtools' Element inspector to
// figure out which CSS property to use to toggle the visibility of the
// .counter-done element.

const counterContainer = document.querySelector(`.counter-value`).innerHTML

const counterContainerValue = counterContainer.dataset.value; 

// RED
const redClick = function () {
    document.body.className = redColor;
    // document.body.style.backgroundColor = "red";
}

red.addEventListener(`click`, redClick)
