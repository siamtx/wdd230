// Tell the document to look for the hamburger
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
// Tell JS to listen for a ubtton click from a mouse.
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});