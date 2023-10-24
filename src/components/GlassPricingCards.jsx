export function GlassPricingCards() {
	return (
		<>
			<div className='relative py-3 sm:max-w-xl sm:mx-auto'>
				<div
					className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200'
					style={{ backdropFilter: 'blur(20px)' }}
				>
					<div className='max-w-md mx-auto'>
						<div className='divide-y divide-gray-200'>
							<div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
								<p>Tailwind CSS update bring a new powerful features.</p>

								<p>
									Perfect for learning how the framework works, prototyping a
									new idea, or creating a demo to share online.
								</p>
							</div>
							<div className='pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7'>
								<p>
									See me on{' '}
									<a
										className='font-bold text-blue-700'
										href='https://www.linkedin.com/in/ferdianar/'
									>
										{' '}
										LinkedIn{' '}
									</a>
								</p>
								<p>
									<a
										href='https://tailwindcss.com/docs'
										className='text-cyan-600 hover:text-cyan-700'
									>
										{' '}
										Read the docs &rarr;{' '}
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
