export function GlassPricingCards() {
	const plans = [
		{
			planName: 'standard',
			price: 100,
			features: [
				{ 'monthly updates': true },
				{ 'personalized email': true },
				{ 'one on one instruction': false },
				{ 'account management': false },
			],
		},
		{
			planName: 'monthly',
			price: 400,
			features: [
				{ 'monthly updates': true },
				{ 'personalized email': true },
				{ 'one on one instruction': true },
				{ 'account management': false },
			],
		},
		{
			planName: 'supplemental',
			price: 700,
			features: [
				{ 'monthly updates': true },
				{ 'personalized email': true },
				{ 'one on one instruction': true },
				{ 'account management': true },
			],
		},
	];
	return (
		<>
			<div className='flex'>
				{plans.map((plan, idx) => {
					return (
						<div
							id={idx}
							style={{ backdropFilter: 'blur(5px)' }}
							className='relative  mx-2 px-4 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-10 border border-gray-200'
						>
							<div className='relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border'>
								<p className='block font-sans text-sm antialiased font-normal leading-normal text-white uppercase'>
									{plan.planName}
								</p>
								<h1 className='flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl'>
									<span className='mt-2 text-4xl'>$</span>
									{plan.price}
									<span className='self-end text-4xl'>/mo</span>
								</h1>
							</div>
							<div className='p-0'>
								<ul className='flex flex-col gap-4'>
									{plan.features.map((feature, idx) => {
										console.log(feature[Object.keys(feature)]);
										return (
											<li
												key={idx}
												className='flex items-center gap-4'
											>
												<span
													className={`p-1 border rounded-full border-white/20 ${
														feature[Object.keys(feature)] === true
															? 'bg-green-300'
															: 'bg-white/20'
													}`}
												>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														stroke-width='2'
														stroke='currentColor'
														aria-hidden='true'
														className='w-3 h-3'
													>
														<path
															stroke-linecap='round'
															stroke-linejoin='round'
															d='M4.5 12.75l6 6 9-13.5'
														></path>
													</svg>
												</span>
												<p className='block font-sans text-base antialiased font-normal leading-relaxed text-inherit'>
													{Object.keys(feature)}
												</p>
											</li>
										);
									})}
								</ul>
							</div>
							<div className='p-0 mt-12'>
								<button
									className='block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
									type='button'
									data-ripple-dark='true'
								>
									Select
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
