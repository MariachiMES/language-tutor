import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import localFont from 'next/font/local';

const mezcal = localFont({ src: '../../fonts/mezcal.otf' });
export default function Home() {
	const heroBar = () => (
		<>
			<h1
				style={mezcal.style}
				className='text-9xl font-semibold'
			>
				CARLA'S
			</h1>
			<p
				style={mezcal.style}
				className='font-light text-3xl mt-5'
			>
				comunidad
			</p>
		</>
	);

	return (
		<main
			className='flex flex-col min-h-screen bg-green-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30'
			style={{
				backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/06/50/24/66/1000_F_650246611_LCLxYtYrsM93HOjpXRQbNk880C0w6EuD.jpg')`,
			}}
		>
			<Navbar title='¡BIENVENID@S!' />
			<Hero component={heroBar} />
			<Footer />
		</main>
	);
}
