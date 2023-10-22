import localFont from 'next/font/local';

const mezcal = localFont({ src: '../../fonts/mezcal.otf' });
export function Hero() {
	return (
		<section className='bg-slate-800'>
			<div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
				<div className='mx-auto max-w-xl text-center'>
					<h1
						style={mezcal.style}
						className='text-9xl font-extrabold sm:text-9xl'
					>
						CARLA'S
					</h1>
					<h2
						style={mezcal.style}
						className='text-4xl'
					>
						comunidad
					</h2>

					<p className='mt-4 sm:text-xl/relaxed'>
						Using 15+ years of classNameroom experience to bring students of all
						backgrounds together through language.
					</p>
				</div>
			</div>
		</section>
	);
}
