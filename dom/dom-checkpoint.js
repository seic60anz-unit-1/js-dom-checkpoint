// 1. Select the **second** h1 element and console.log it.
const secondH1 = document.querySelector('body h1:nth-of-type(2)')
console.log(secondH1)


// 2. Select the paragraph with a class of "excerpt" and change its class name
// to "snippet".
const paragraph = document.querySelector('.excerpt')
paragraph.className = "snippet"
console.log(paragraph)


// 3. console.log the number of todo items in the todo-list.
const todo = document.querySelectorAll('.todo-list li')
console.log(todo.length)


// 4. Write the code such that each time the #n4 div is is clicked, its
// "red" class gets toggled (ONLY the "red" class; "rect" should remain).
const n4 = document.querySelector('#n4')
const red = document.querySelector(".red")
n4.addEventListener('click', function() {
    red.classList.toggle("red")
})


// 5. Loop over all the .done-list items and log their text to the console.
const doneList = document.querySelectorAll('.done-list li')
for (let item of doneList) {
    console.log(item.textContent)
}


// 6. Write the code such that each time the box-mover button is clicked, the
// .box div moves to the right by 10px.
const btn = document.querySelector('#box-mover')
let count = 0
btn.addEventListener('click', function() {
    count += 10
    const box = document.querySelector('.box')
    box.style.marginLeft = `${count}px`
})


// 7. Using event delegation with the click event handler on the
// .counter-container element, increment the count by the clicked button's
// associated value (data attribute). When the count reaches 75 or more, show
// the .counter-done element. Use the browser devtools' Element inspector to
// figure out which CSS property to use to toggle the visibility of the
// .counter-done element.

const btns = document.querySelectorAll('.counter-button')
const counterValue = document.querySelector('.counter-value')
let counter = 0
for (let btn of btns) {
    btn.addEventListener('click', function() {
        count += parseInt(btn.dataset.value)
        counterValue.textContent = count
    })
}
