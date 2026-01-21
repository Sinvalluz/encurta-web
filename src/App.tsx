import Footer from './components/common/Footer';
import Header from './components/common/Header';
import { useTheme } from './contexts/ThemeContext';

function App() {
	const { darkMode } = useTheme();
	return (
		<div className={darkMode ? 'dark' : ''}>
			<div className='bg-primary dark:bg-primary-dark min-h-screen '>
				<Header />
				<Footer />
			</div>
		</div>
	);
}

export default App;
