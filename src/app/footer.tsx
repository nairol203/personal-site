import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='flex items-center justify-center gap-3 p-4 mt-16'>
			<Image src='/logo.png' alt='Logo' width={32} height={32} />
			<Link href='/' className='hover:underline'>
				© 2024 nairol203
			</Link>
		</footer>
	);
}
