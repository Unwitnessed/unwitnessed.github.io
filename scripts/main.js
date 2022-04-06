/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Firefox-Logo-History.jpg') {
      myImage.setAttribute('src','images/Firefox-Logos.png');
    } else {
      myImage.setAttribute('src','images/Firefox-Logo-History.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt ('Please enter your name.');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Mozilla is very cool, ' + myName;
	}
}

if (!localStorage.getItem('name')){
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is very cool, ' + storedName;
}

myButton.onclick = function () {
	setUserName ();
}
