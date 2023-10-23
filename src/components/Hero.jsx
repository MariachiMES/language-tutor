import localFont from 'next/font/local';
import { Footer } from './Footer';

const mezcal = localFont({ src: '../../fonts/mezcal.otf' });
export function Hero() {
	return (
		<div className='flex-1 flex items-center'>
			<div className='text-center mx-auto'>
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
			</div>
		</div>
	);
}

<section className='bg-black min-h-screen'></section>;
