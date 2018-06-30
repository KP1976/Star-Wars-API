import axios from 'axios';
import './scss/style.scss';

// Get DOM elements
const searchForm = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const formSelect = document.querySelector('.form__select');
const searchList = document.querySelector('.search-list');

console.log(searchForm, formInput, formSelect, searchList);

// axios
// 	.get('https://swapi.co/api/')
// 	.then(response => console.log(response))
// 	.catch(error => console.log(error));
