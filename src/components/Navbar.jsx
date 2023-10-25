export function Navbar({ title: title, page: page }) {
	const siteLinks = [
		{ Home: '/' },
		{ About: '/About' },
		{ Pricing: '/Pricing' },
		{ Login: '/Login' },
		{ Signup: '/Signup' },
	];

	console.log(page);
	return (
		<div className='flex items-center h-20 '>
			<div className='mx-auto relative px-5 max-w-screen-xl w-full flex items-center justify-end'>
				<div className='text-4xl font-light uppercase absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
					{title}
				</div>

				<nav className='flex gap-5 lg:visible sm: invisible'>
					{siteLinks.map((link, idx) => {
						console.log(page == Object.keys(link));
						return (
							<a
								className={
									page == Object.keys(link) ? 'text-cyan-400' : 'text-white'
								}
								href={link[Object.keys(link)]}
							>
								{Object.keys(link)}
							</a>
						);
					})}
				</nav>
			</div>
		</div>
	);
}
