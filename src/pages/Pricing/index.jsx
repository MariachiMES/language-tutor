import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { GlassPricingCards } from '@/components/GlassPricingCards';
export default function Pricing() {
	const glassPricing = () => <GlassPricingCards />;
	return (
		<main
			className='flex flex-col min-h-screen bg-green-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30'
			style={{
				backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/06/50/24/66/1000_F_650246611_LCLxYtYrsM93HOjpXRQbNk880C0w6EuD.jpg')`,
			}}
		>
			<Navbar title='Pricing' />
			<Hero component={glassPricing} />
			<Footer />
		</main>
	);
}
