// document.getElementById('title'); // <h1 id="title" class="heading"> DOM Learning on Learn.js</h1>


// document.getElementById('title').id;  // "title"


// document.getElementById('title').class  // undefined


// document.getElementById('title').className // 'heading';


// document.getElementById('title').getAttribute('id') // 'title ';


// document.getElementById('title').getAttribute('class') // 'heading';


// document.getElementById('title').setAttribute('class','test')

// title.style.backgroundColor = 'green'
// 'green'
// title.style.padding = '15px'
// '15px'
// title.style.borderRadius = '5px'
// '5px'

// CONTENT

// title.textContent
// ' DOM Learning on Learn.js test text'
// title.innerText
// 'DOM Learning on Learn.js'
// title.innerHTML
// ' DOM Learning on Learn.js <span style="display: none;">test text</span>'


// QUERY - SELECTOR/QUERY - SELECTOR ALL

// document.querySelector('ul')
// <ul>​…​</ul>​
// const myul = document.querySelector('ul')
// undefined
// myul.querySelector('li')
// <li>​…​</li>​
// const turngreen = myul.querySelector('li')
// undefined
// turngreen.style.backgroundColor = "16px"
// '16px'
// turngreen.style.backgroundColor = "green"
// 'green'
// turngreen.style.padding = "16px"
// '16px'
// turngreen.innerText = "five"
// 'five'

// ID

// document.querySelectorAll('li')
// NodeList(3) [li, li, li]
// const templiList = document.querySelectorAll('li')
// undefined
// templiList
// NodeList(3) [li, li, li]

// templiList.ctyle.color = 'green' // Will give uncaught reference  error as ctyle is not a method of node list object but it is available in array like
// const templiList = document.querySelectorAll('li')
// templiList
// templiList.style.color = 'green'//Error Underfined
// templiList[0].style.color = 'greeen' 

// const myH1 = document.querySelectorAll('h1')
// myH1.style.color = 'green'

// templiList.forEach(function(l){})
// undefined
// templiList.forEach(function (l) {
//     l.style.backgroundcolor = 'green'
// })


// CLASS-NAME
// document.getElementsByClassName('list-item')
// const tempclassList = document.getElementsByClassName('list-item')
// tempclassList
// Array.from(tempclassList)
// const myConvertedArray = Array.from(tempclassList)
// myConvertedArray
// myConvertedArray.forEach(function(li){
//     li.style.color = 'orange'
// })