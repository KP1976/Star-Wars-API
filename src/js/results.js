// Get conatiner of data
const searchList = document.querySelector('.search-list');

// Template for item data
const item = data => `<li class="search-list__item">${data}</li>`;

// Function displays data in broweser window
export const result = (option, data) => {
	let html;

	switch (option) {
		case 'people':
			html = data.map((result, index) =>
				item(
					`${index + 1}. Name: <span class="text--bold">${result.name}</span> | Height: <span class="text--bold">${
						result.height
					}</span> | Hair Color: <span class="text--bold">${result.hair_color}</span>`,
				),
			);
			break;
		case 'planets':
			html = data.map((result, index) =>
				item(`${index + 1}. Name: <span class="text--bold">${result.name}</span> | Climate: <span class="text--bold">${result.climate}</span>`),
			);
			break;
		case 'films':
			html = data.map((result, index) =>
				item(
					`${index + 1}. Title: <span class="text--bold">${result.title}</span> | Director: <span class="text--bold">${
						result.director
					}</span> | Release Date: <span class="text--bold">${result.release_date}</span>`,
				),
			);
			break;
		case 'species':
			html = data.map((result, index) =>
				item(
					`${index + 1}. Name: <span class="text--bold">${result.name}</span> | Classification: <span class="text--bold">${
						result.classification
					}</span> | Skin Colors: <span class="text--bold">${result.skin_colors}</span>`,
				),
			);
			break;
		case 'vehicles':
			html = data.map((result, index) =>
				item(
					`${index + 1}. Name: <span class="text--bold">${result.name}</span> | Model: <span class="text--bold">${
						result.model
					}</span> | Cost: <span class="text--bold">${result.cost_in_credits} credits</span>`,
				),
			);
			break;
		case 'starships':
			html = data.map((result, index) =>
				item(
					`${index + 1}. Name: <span class="text--bold">${result.name}</span> | Model: <span class="text--bold">${
						result.model
					}</span> | Cost: <span class="text--bold">${result.cost_in_credits} credits</span>`,
				),
			);
			break;
		default:
			return;
	}

	searchList.innerHTML = html.join('');
};
