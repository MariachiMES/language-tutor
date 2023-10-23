import '../app/globals.css';

export function Footer() {
	return (
		<footer className='p-4  md:p-8 lg:p-10 dark:bg-gray-800'>
			<div className='mx-auto max-w-screen-xl text-center'>
				<ul className='flex flex-wrap justify-center items-center mb-6 text-white dark:text-white'>
					<li>
						<a
							href='#'
							className='mr-4 hover:underline md:mr-6'
						>
							Blog
						</a>
					</li>

					<li>
						<a
							href='#'
							className='mr-4 hover:underline md:mr-6'
						>
							FAQs
						</a>
					</li>
					<li>
						<a
							href='#'
							className='mr-4 hover:underline md:mr-6'
						>
							Contact
						</a>
					</li>
				</ul>
				<span className='text-sm text-white sm:text-center dark:text-white'>
					© 2024{' '}
					<a
						href='#'
						className='hover:underline'
					>
						Carla's Classroom Comunidad™
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
}
