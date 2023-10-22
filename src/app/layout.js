import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: `Carla's Comunidad`,
	description: 'Built in NextJS by David Ortiz',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}
			>
				{children}
			</body>
		</html>
	);
}