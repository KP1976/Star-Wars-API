// Get conatiner of data
const searchList = document.querySelector('.search-list');

// Template for item data
const item = data => `<li class="search-list__item">${data}</li>`;

export const result = (option, data) => {
	let html;

	switch (option) {
		case 'people':
			html = data.map(result =>
				item(`Name: <strong>${result.name}</strong>, 
      Height: <strong>${result.height}</strong>, Hair Color: <strong>${result.hair_color}`),
			);
			break;
		case 'planets':
			break;
		default:
			return;
	}

	searchList.innerHTML = html;
};
