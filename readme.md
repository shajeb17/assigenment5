1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
answer=> the different between getEleentById and getElementsByClassName 
getElemtntById we only select id name and getElemnentsByClassName we only select class name
and also different between querySelector and querySelectorAll;
querySelector we only select single class or id and querySelectorAll we select multiple class or id 

2. How do you create and insert a new element into the DOM?
answer=> the create and insert a new element into the dom
let div=document.createElement("div");
div.innerHTML="hello world"
document.body.appendChild(div);


3. What is Event Bubbling and how does it work?
answer=>the event bubbling was when child was trigger this event go to parent element 

let btn=document.querySelector(".btn")
btn.addEventListener("click",function(){
  console.log(btn.parentElement)
})



4. What is Event Delegation in JavaScript? Why is it useful?
answer=> when i have multiple child element. I can use the parent of a child element to access and modify the child element.; 
Why it is useful:
Handles dynamic elements added later.
Improves performance by reducing multiple listeners.
Makes code cleaner and easier to maintain.


5. What is the difference between preventDefault() and stopPropagation() methods?
answer=>preventDefault() stops the automatic page refresh.
stopPropagation() stops the event from travelling to parent elements. For example, if I trigger a child inside a parent div, the event would normally go to the parent div, then to the main div, and then to the body. If I want to stop this event from travelling, I need stopPropagation().