import DarkLightBtn from '../../ui/DarkLightBtn';
import GithubIcon from '../../ui/GithubIcon';

const Header = () => {
	return (
		<header className='text-white flex  justify-between px-6 py-4 border-b-2 border-[#0D0D0D] items-center'>
			<a href='#'>
				<h1 className='text-2xl text-primary-dark dark:text-primary dark:hover:text-white/80 transition-colors font-medium cursor-pointer'>
					Encurta
				</h1>
			</a>
			<div className='flex gap-4'>
				<DarkLightBtn />
				<a
					href='https://github.com/Sinvalluz/Encurta-web'
					target='_blank'
					rel='noreferrer'
				>
					<GithubIcon className='text-primary-dark dark:text-primary ' />
				</a>
			</div>
		</header>
	);
};

export default Header;
