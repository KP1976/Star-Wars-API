// Get conatiner of data
const searchList = document.querySelector('.search-list');

// Template for item data
const item = data => `<li class="search-list__item">${data}</li>`;

export const result = (option, data) => {
	let html;

	switch (option) {
		case 'people':
			html = data.map((result, index) =>
				item(
					`${index + 1}. Name: <span class="text--bold">${result.name}</span>, Height: <span class="text--bold">${
						result.height
					}</span>, Hair Color: <span class="text--bold">${result.hair_color}</span>`,
				),
			);
			break;
		case 'planets':
			html = data.map((result, index) =>
				item(`${index + 1}. Name: <span class="text--bold">${result.name}</span>, Climate: <span class="text--bold">${result.climate}</span>`),
			);
			break;
		default:
			return;
	}

	searchList.innerHTML = html.join('');
};
