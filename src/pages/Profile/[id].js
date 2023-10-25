import '../../app/globals.css';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { GlassActivityCards } from '@/components/GlassActivityCards';

export default function Profile() {
	const glassActivityCard = () => <GlassActivityCards />;
	return (
		<main
			className='flex flex-col min-h-screen bg-green-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30'
			style={{
				backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/06/50/24/66/1000_F_650246611_LCLxYtYrsM93HOjpXRQbNk880C0w6EuD.jpg')`,
			}}
		>
			<Navbar
				title='Profile'
				page='Profile'
			/>
			<Hero component={glassActivityCard} />
			<Footer />
		</main>
	);
}
