import { useTranslation } from 'react-i18next';
import { Button } from '../button';

const LanguageButton = () => {
	const { i18n } = useTranslation();

	function toggleLanguage() {
		const newLang = i18n.language === 'pt' ? 'en' : 'pt';
		i18n.changeLanguage(newLang);
	}
	return (
		<Button
			type='button'
			className='cursor-pointer bg-primary-dark hover:bg-primary-dark dark:bg-primary-light 
             dark:hover:bg-primary-light relative border-2 border-black dark:border-white flex gap-2 items-center justify-center'
			onClick={toggleLanguage}
		>
			<span className='z-10'>PT</span>
			<span className='z-10'>|</span>
			<span className='z-10'>EN</span>
			<div
				className={`absolute h-full bg-bl w-1/2 bg-white/20 dark:bg-black/70 rounded-md transition-transform duration-300 ease-in-out left-0 ${i18n.language === 'pt' ? 'translate-x-0' : 'translate-x-full'}`}
			></div>
		</Button>
	);
};

export default LanguageButton;
