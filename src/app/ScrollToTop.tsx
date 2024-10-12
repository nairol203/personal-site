'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) {
				setShow(true);
			} else {
				setShow(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			{show && (
				<a className='bg-accent dark:bg-darkMode-accent fixed bottom-10 right-10 rounded-full shadow p-2 duration-150 ease-in' href='#top'>
					<Image src='/icons/arrow-up.svg' alt='Arrow Up Icon' height={20} width={20} className='aspect-square' />
				</a>
			)}
		</>
	);
}
