import localFont from 'next/font/local';
import { Footer } from './Footer';

const mezcal = localFont({ src: '../../fonts/mezcal.otf' });
export function Hero({ component: Component }) {
	return (
		<div className='flex-1 flex items-center'>
			<div className='text-center mx-auto'>
				<Component />
			</div>
		</div>
	);
}

<section className='bg-black min-h-screen'></section>;
