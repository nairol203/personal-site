function createProjectCard(data) {
	const container = document.createElement('div');
	container.className = `grid ${data.thumbnails ? 'sm:grid-cols-2 sm:col-span-2' : 'grid-cols-1'} gap-2 bg-secondary dark:bg-darkMode-secondary p-5 rounded-3xl shadow`;
	container.id = data.name;

	const contentDiv = document.createElement('div');
	contentDiv.className = 'flex flex-col gap-4';

	const title = document.createElement('h3');
	title.className = 'h2';
	title.textContent = data.name;
	contentDiv.appendChild(title);

	const tagsDiv = document.createElement('div');
	tagsDiv.className = 'flex flex-wrap gap-2';
	data.tags.forEach(tag => {
		const tagSpan = document.createElement('span');
		tagSpan.className = 'text-darkMode-text bg-accent dark:bg-darkMode-accent px-2 py-1 rounded shadow';
		tagSpan.textContent = tag;
		tagsDiv.appendChild(tagSpan);
	});
	contentDiv.appendChild(tagsDiv);

	const description = document.createElement('p');
	description.className = 'mb-2';
	description.textContent = data.description;
	contentDiv.appendChild(description);

	container.appendChild(contentDiv);

	if (data.thumbnails) {
		const link = document.createElement('a');
		link.href = data.url;
		link.target = '_blank';
		link.rel = 'noreferrer';

		const picture = document.createElement('picture');

		const sourceDark = document.createElement('source');
		sourceDark.media = '(prefers-color-scheme: dark)';
		sourceDark.srcset = data.thumbnails.dark;
		picture.appendChild(sourceDark);

		const sourceLight = document.createElement('source');
		sourceLight.media = '(prefers-color-scheme: light)';
		sourceLight.srcset = data.thumbnails.light;
		picture.appendChild(sourceLight);

		const img = document.createElement('img');
		img.src = data.thumbnails.light;
		img.alt = `Project Thumbnail from ${data.name}`;
		img.width = 550;
		img.height = 300;
		img.className = 'rounded-3xl';
		picture.appendChild(img);

		if (data.url) {
			link.appendChild(picture);
			container.appendChild(link);
		} else {
			container.appendChild(picture);
		}
	}

	const checkOutLink = document.createElement('a');
	if (data.url) {
		checkOutLink.className =
			'mt-auto text-darkMode-text bg-primary dark:bg-darkMode-primary p-2 rounded-full text-center md:hover:bg-accent dark:md:hover:bg-darkMode-accent md:hover:outline-accent dark:md:hover:outline-darkMode-accent transition-colors duration-200 outline outline-primary dark:outline-darkMode-primary outline-1';
		checkOutLink.href = data.url;
		checkOutLink.target = '_blank';
		checkOutLink.rel = 'noreferrer';
		checkOutLink.textContent = 'Check it out';
	} else {
		checkOutLink.className = 'mt-auto bg-secondary dark:bg-darkMode-secondary p-2 rounded-full text-center outline outline-accent dark:outline-darkMode-accent outline-1';
		checkOutLink.textContent = 'Coming soon';
	}
	container.appendChild(checkOutLink);

	if (data.github_url) {
		const githubLink = document.createElement('a');
		githubLink.className =
			'mt-auto bg-secondary dark:bg-darkMode-secondary p-2 rounded-full text-center md:hover:bg-accent dark:md:hover:bg-darkMode-accent md:hover:outline-accent dark:md:hover:outline-darkMode-accent md:hover:text-darkMode-text transition-colors duration-200 outline outline-accent dark:outline-darkMode-accent outline-1';
		githubLink.href = data.github_url;
		githubLink.target = '_blank';
		githubLink.rel = 'noreferrer';
		githubLink.textContent = 'Repository';
		container.appendChild(githubLink);
	}

	return container;
}

const projects = [
	{
		_id: '6377c63a8fe9aaaae59888e8',
		name: 'KVG Bus Tracker',
		description: 'A modern and user-friendly third-party solution that utilizes the API from KVG Kiel to obtain real-time departures of the buses.',
		tags: ['Typescript', 'Next.js', 'Tailwind'],
		url: 'https://bus.nairol.me',
		github_url: 'https://github.com/nairol203/bus-tracker',
		thumbnails: {
			light: '/public/tailwindConfigthumbnails/bus-tracker-thumbnail-light.avif',
			dark: '/public/thumbnails/bus-tracker-thumbnail-dark.avif',
		},
	},
	{
		_id: '641f6bd751d56ef0eb14e773',
		name: 'Nairol Spotify Stats',
		description:
			'Provides various statistics about your Spotify account. For example, it displays top tracks and top albums. The Spotify API is utilized to gather this information.',
		tags: ['Typescript', 'Next.js', 'Next Auth', 'TRPC', 'Tailwind'],
		url: 'https://spotify-stats.nairol.me',
		github_url: 'https://github.com/nairol203/spotify-stats',
	},
	{
		_id: '6325b6117b689e6aa0bb5a2e',
		name: 'FFXIV Island Rare Animals',
		description:
			'A site for the rare animals of the Island Sanctuary. It is possible to filter every weather-dependent creature. Additionally, it displays both Eorzean times and local times.',
		tags: ['Typescript', 'Next.js', 'Mantine'],
		url: 'https://island.nairol.me',
		github_url: 'https://github.com/nairol203/ffxiv-island-rare-animals',
	},
	{
		_id: '6325b6117b689e6aa0bb5a2b',
		name: 'Azuma Discord Bot',
		description:
			'A Discord game bot that includes many mini-games such as Rock, Paper, Scissors, and Blackjack. Additionally, it features a large fishing game where players can catch various fish and complete their collection.',
		tags: ['Typescript', 'Next.js', 'Next Auth', 'Drizzle', 'Tailwind'],
		thumbnails: {
			light: '/public/thumbnails/azuma-thumbnail.avif',
			dark: '/public/thumbnails/azuma-thumbnail.avif',
		},
	},
];

for (const project of projects) {
	const projectCard = createProjectCard(project);
	document.getElementById('project-card-container').appendChild(projectCard);
}
