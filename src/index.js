import axios from 'axios';
import './scss/style.scss';

axios.get('https://swapi.co/api/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });