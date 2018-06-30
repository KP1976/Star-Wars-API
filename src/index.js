import axios from 'axios';
import './scss/style.scss';

// Get DOM elements
const searchForm = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const formSelect = document.querySelector('.form__select');
const searchList = document.querySelector('.search-list');

// Base URL
const baseURL = 'https://swapi.co/api/';

// Searching category
let category = 'people';

// Event Listener for change option
formSelect.addEventListener('change', function() {
	console.log('You have changed select!');
});

// axios
// 	.get('baseURL')
// 	.then(response => console.log(response))
// 	.catch(error => console.log(error));
