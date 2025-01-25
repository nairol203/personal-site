import Image, { getImageProps } from 'next/image';
import { Project, projects as data } from '@/lib/projects';

export const metadata = {
	title: 'Florian - nairol203',
};

export default function Page() {
	const projects = data.map(project => <ProjectCard key={project.name} data={project} />);

	return (
		<div className='grid gap-10 xl:gap-12 2xl:gap-16 mx-4 mt-6'>
			<header className='grid sm:flex sm:justify-between gap-4 md:gap-6 lg:gap-8 bg-secondary dark:bg-darkMode-secondary p-6 md:p-8 rounded-3xl'>
				<div className='flex flex-col gap-4 justify-center'>
					<h1 className='text-5xl sm:text-6xl md:text-7xl xl:text-8xl mt-2'>
						Welcome.
						<br />
						I&apos;m Florian.
					</h1>
					<p className='text-xl md:text-2xl'>IT specialist and Hobby Developer.</p>
				</div>
				<div className='flex sm:flex-col gap-4 justify-end items-end'>
					<a
						className='flex items-center justify-center p-2.5 rounded-full md:hover:bg-accent dark:md:hover:bg-darkMode-accent transition-colors duration-200'
						href='https://www.reddit.com/user/nairol203'
						target='_blank'
						rel='noreferrer'
					>
						<Image src='/logos/socials/reddit.svg' width={24} height={24} alt='Reddit Logo' className='dark:invert aspect-square' />
					</a>
					<a
						className='flex items-center justify-center p-2.5 rounded-full md:hover:bg-accent dark:md:hover:bg-darkMode-accent transition-colors duration-200'
						href='https://mastodon.social/@nairol203'
						rel='me'
					>
						<Image src='/logos/socials/mastodon.svg' width={24} height={24} alt='Mastodon Logo' className='dark:invert aspect-square' />
					</a>
					<a
						className='flex items-center justify-center p-2.5 rounded-full md:hover:bg-accent dark:md:hover:bg-darkMode-accent transition-colors duration-200'
						href='https://github.com/nairol203'
						target='_blank'
						rel='noreferrer'
					>
						<Image src='/logos/socials/github.svg' width={24} height={24} alt='Github Logo' className='dark:invert aspect-square' />
					</a>
				</div>
			</header>
			<section className='grid gap-6'>
				<h2 className='text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl'>My Stack.</h2>
				<div className='grid grid-cols-2 sm:flex gap-2 flex-wrap'>
					<a
						className='flex justify-between items-center gap-4 bg-secondary dark:bg-darkMode-secondary py-2 px-4 md:py-4 md:px-6 rounded-full shadow md:hover:bg-accent dark:md:hover:bg-darkMode-accent md:hover:text-darkMode-text transition-colors duration-200'
						href='https://www.typescriptlang.org/'
						target='_blank'
						rel='noreferrer'
					>
						<h3 className='text-xl overflow-hidden text-ellipsis whitespace-nowrap'>Typescript</h3>
						<div className='relative h-10 w-10 sm:h-16 sm:w-16'>
							<Image src='/logos/typescript.svg' fill sizes='2.5rem 4rem 8rem' alt='Typescript Logo' className='aspect-square rounded' />
						</div>
					</a>
					<a
						className='flex justify-between items-center gap-4 bg-secondary dark:bg-darkMode-secondary py-2 px-4 md:py-4 md:px-6 rounded-full shadow md:hover:bg-accent dark:md:hover:bg-darkMode-accent md:hover:text-darkMode-text transition-colors duration-200'
						href='https://nextjs.org/'
						target='_blank'
						rel='noreferrer'
					>
						<h3 className='text-xl overflow-hidden text-ellipsis whitespace-nowrap'>Next.js</h3>
						<div className='relative h-10 w-10 sm:h-16 sm:w-16'>
							<Image src='/logos/nextjs.svg' fill sizes='2.5rem 4rem 8rem' alt='Next.js Logo' className='aspect-square rounded' />
						</div>
					</a>
					<a
						className='flex justify-between items-center gap-4 bg-secondary dark:bg-darkMode-secondary py-2 px-4 md:py-4 md:px-6 rounded-full shadow md:hover:bg-accent dark:md:hover:bg-darkMode-accent md:hover:text-darkMode-text transition-colors duration-200'
						href='https://tailwindcss.com/'
						target='_blank'
						rel='noreferrer'
					>
						<h3 className='text-xl overflow-hidden text-ellipsis whitespace-nowrap'>Tailwind CSS</h3>
						<div className='relative h-10 w-10 sm:h-16 sm:w-16'>
							<Image src='/logos/tailwind.svg' fill sizes='2.5rem 4rem 8rem' alt='Tailwind CSS Logo' className='aspect-square rounded' />
						</div>
					</a>
					<a
						className='flex justify-between items-center gap-4 bg-secondary dark:bg-darkMode-secondary py-2 px-4 md:py-4 md:px-6 rounded-full shadow md:hover:bg-accent dark:md:hover:bg-darkMode-accent md:hover:text-darkMode-text transition-colors duration-200'
						href='https://orm.drizzle.team/'
						target='_blank'
						rel='noreferrer'
					>
						<h3 className='text-xl overflow-hidden text-ellipsis whitespace-nowrap'>DrizzleORM</h3>
						<div className='relative h-10 w-10 sm:h-16 sm:w-16'>
							<Image src='/logos/drizzle.svg' fill sizes='2.5rem 4rem 8rem' alt='DrizzleORM Logo' className='aspect-square rounded' />
						</div>
					</a>
				</div>
			</section>
			<section className='grid gap-3 md:gap-6' id='projects'>
				<h2 className='text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl'>My Projects.</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>{projects}</div>
			</section>
			<section className='grid justify-center gap-8 mt-10 mb-20'>
				<h2 className='text-5xl sm:text-6xl text-center'>My Socials.</h2>
				<div className='flex justify-center gap-4'>
					<a
						className='flex items-center justify-center p-2.5 rounded-full md:hover:bg-accent dark:md:hover:bg-darkMode-accent transition-colors duration-200'
						href='https://www.reddit.com/user/nairol203'
						target='_blank'
						rel='noreferrer'
					>
						<Image src='/logos/socials/reddit.svg' width={30} height={30} alt='Reddit Logo' className='dark:invert aspect-square' />
					</a>
					<a
						className='flex items-center justify-center p-2.5 rounded-full md:hover:bg-accent dark:md:hover:bg-darkMode-accent transition-colors duration-200'
						href='https://mastodon.social/@nairol203'
						rel='me'
					>
						<Image src='/logos/socials/mastodon.svg' width={30} height={30} alt='Mastodon Logo' className='dark:invert aspect-square' />
					</a>
					<a
						className='flex items-center justify-center p-2.5 rounded-full md:hover:bg-accent dark:md:hover:bg-darkMode-accent transition-colors duration-200'
						href='https://github.com/nairol203'
						target='_blank'
						rel='noreferrer'
					>
						<Image src='/logos/socials/github.svg' width={30} height={30} alt='Github Logo' className='dark:invert aspect-square' />
					</a>
				</div>
			</section>
		</div>
	);
}

function ProjectCard({ data }: { data: Project }) {
	const common = {
		width: 550,
		height: 300,
		alt: `Project Thumbnail from ${data.name}`,
		className: 'rounded-3xl',
	};
	const {
		props: { srcSet: dark },
	} = getImageProps({ ...common, src: data.thumbnails?.dark ?? '' });
	const {
		props: { srcSet: light, ...rest },
	} = getImageProps({ ...common, src: data.thumbnails?.light ?? '' });

	return (
		<div
			className={`grid ${!!data.thumbnails ? 'sm:grid-cols-2 sm:col-span-2' : 'grid-cols-1'} gap-2 bg-secondary dark:bg-darkMode-secondary p-5 rounded-3xl shadow`}
			id={data.name}
		>
			<div className='flex flex-col gap-4'>
				<h3 className='h2'>{data.name}</h3>
				<div className='flex flex-wrap gap-2'>
					{data.tags.map(tag => (
						<span className='text-darkMode-text bg-accent dark:bg-darkMode-accent px-2 py-1 rounded shadow' key={tag}>
							{tag}
						</span>
					))}
				</div>
				<p className='mb-2'>{data.description}</p>
			</div>
			{!!data.thumbnails && (
				<a href={data.url} target='_blank' rel='noreferrer'>
					<picture>
						<source media='(prefers-color-scheme: dark)' srcSet={dark} />
						<source media='(prefers-color-scheme: light)' srcSet={light} />
						<img {...rest} />
					</picture>
				</a>
			)}
			{data.url && (
				<a
					className='mt-auto text-darkMode-text bg-primary dark:bg-darkMode-primary p-2 rounded-full text-center md:hover:bg-accent dark:md:hover:bg-darkMode-accent md:hover:outline-accent dark:md:hover:outline-darkMode-accent transition-colors duration-200 outline outline-primary dark:outline-darkMode-primary outline-1'
					href={data.url}
					target='_blank'
					rel='noreferrer'
				>
					Check it out
				</a>
			)}
			{data.repository_url && (
				<a
					className='mt-auto bg-secondary dark:bg-darkMode-secondary p-2 rounded-full text-center md:hover:bg-accent dark:md:hover:bg-darkMode-accent md:hover:outline-accent dark:md:hover:outline-darkMode-accent md:hover:text-darkMode-text transition-colors duration-200 outline outline-accent dark:outline-darkMode-accent outline-1'
					href={data.repository_url}
					target='_blank'
					rel='noreferrer'
				>
					Repository
				</a>
			)}
			{data.coming_soon && (
				<div className='mt-auto bg-secondary dark:bg-darkMode-secondary p-2 rounded-full text-center outline outline-accent dark:outline-darkMode-accent outline-1 '>
					Coming soon
				</div>
			)}
		</div>
	);
}
