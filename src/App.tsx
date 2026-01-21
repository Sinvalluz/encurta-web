import { useTranslation } from 'react-i18next';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import { useTheme } from './contexts/ThemeContext';

function App() {
	const { darkMode } = useTheme();
	const { t } = useTranslation();
	return (
		<div className={darkMode ? 'dark' : ''}>
			<div className='bg-primary-light dark:bg-primary-dark min-h-screen transition'>
				<Header />
				<Footer />
				<h2>{t('subtitle')}</h2>
			</div>
		</div>
	);
}

export default App;
