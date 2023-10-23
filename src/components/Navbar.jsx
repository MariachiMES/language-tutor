export function Navbar({ props }) {
	return (
		<div className='flex items-center h-20'>
			<div className='mx-auto relative px-5 max-w-screen-xl w-full flex items-center justify-end'>
				<div className='text-4xl font-light uppercase absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
					¡BIENVENID@S!
				</div>

				<nav className='flex gap-5'>
					<a>Home</a>
					<a>About</a>
					<a>Pricing</a>
					<a>Login</a>
					<a>Signup</a>
				</nav>
			</div>
		</div>
	);
}
