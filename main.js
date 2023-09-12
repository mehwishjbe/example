// Document Objects
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'DOM'
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[9]);
// document.all[9].textContent = 'hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);




/* getElementById */
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'bye bye';
// headerTitle.innerHTML = '<h3>Ciao</h3>';

// var headerTitle = document.getElementById('header-title');
// headerTitle.style.borderBottom = 'solid 3px white'

// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px darkgreen'




/* getElementsByClassName */
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].innerText = 'Item Ciao'
// items[1].style.color = 'red'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// for(let i = 0; i<items.length; i++){
//     items[i].style.backgroundColor = 'gray'
// }




/* getElementsByTagName */
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].innerText = 'Item Ciao'
// li[1].style.color = 'red'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'

// for(let i = 0; i<li.length; i++){
//     li[i].style.backgroundColor = 'gray';
// }



/* Query Selector */
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 3px red';

// var input = document.querySelector('input');
// input.value = 'Bella Ciao';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'pink';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';




/* Query Selector All*/
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Bella Ciao';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(let i = 0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'lightgray'; 
    even[i].style.backgroundColor = 'gray'; 
}