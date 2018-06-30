import axios from 'axios';
import { result } from './js/results';
import './scss/style.scss';

// Get DOM elements
const searchForm = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const formSelect = document.querySelector('.form__select');

// Base URL
const baseURL = 'https://swapi.co/api/';

// Searching category
let category = 'people';

// Event Listener for change option
formSelect.addEventListener('change', function() {
	category = this.value;
});

// Event Listener for submit form (get results from api)
searchForm.addEventListener('submit', function(event) {
	event.preventDefault();

	// This is what we want to search for
	const value = formInput.value;

	// Final url
	const url = `${baseURL}${category}/?search=${value}`;

	// Get data from Star Wars API
	axios
		.get(url)
		.then(response => response.data)
		.then(data => {
			result(category, data.results);
			console.log(data.results);
		})
		.catch(error => console.log(error));
});
