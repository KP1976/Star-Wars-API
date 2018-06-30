// Get conatiner of data
const searchList = document.querySelector('.search-list');

// Template for item data
const item = data => `<li class="search-list__item">${data}</li>`;

export const result = (option, data) => {
	let html;

	searchList.innerHTML = html;
};
