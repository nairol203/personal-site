import ScrollToTop from './ScrollToTop';
import Footer from './footer';
import './globals.css';

export const metadata = {
	title: 'nairol.me',
	metadataBase: new URL('https://nairol.me'),
	description: 'My projects and more',
	openGraph: {
		title: 'nairol.me',
		description: 'My projects and more',
		siteName: 'nairol.me',
		type: 'website',
		images: ['/logo.png'],
	},
	twitter: {
		title: 'nairol.me',
		description: 'My projects and more',
		card: 'summary',
		creator: '@nairol203',
		site: '@nairol203',
		images: ['/logo.png'],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body>
				<main className='max-w-7xl mx-auto min-h-screen'>{children}</main>
				<Footer />
				<ScrollToTop />
			</body>
		</html>
	);
}
