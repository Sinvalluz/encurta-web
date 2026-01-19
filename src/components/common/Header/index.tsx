import GithubIcon from '../../ui/githubIcon';

const Header = () => {
	return (
		<header className='text-white flex  justify-between px-6 py-4 border-b-2 border-[#0D0D0D] items-center'>
			<a href='#'>
				<h1 className='text-2xl text-white hover:text-white/80 transition-colors cursor-pointer'>
					Encurta
				</h1>
			</a>
			<a
				href='https://github.com/Sinvalluz/Encurta-web'
				target='_blank'
				rel='noreferrer'
			>
				<GithubIcon />
			</a>
		</header>
	);
};

export default Header;
