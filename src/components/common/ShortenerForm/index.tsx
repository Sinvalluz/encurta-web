import { type FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CardUrlShorted from './CardUrlShorted';

const ShortenerForm = () => {
	const { t } = useTranslation();
	const [url, setUrl] = useState(
		'https://www.youtube.com/feed/subscriptions',
	);
	const [error, setError] = useState('');
	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			new URL(url);
			setError('');
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.log(e.message);
			} else {
				console.log('Erro desconhecido');
			}

			setError('Digite uma URL válida');
		}
	}
	return (
		<form
			onSubmit={onSubmit}
			className='text-center'
		>
			<div className='flex flex-col gap-2 md:flex-row mb-2.5'>
				<Input
					placeholder={t('placeholder')}
					type='text'
					className='border-2 border-secondary-light dark:text-secondary-dark'
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					required
				/>
				<Button className='flex-1 bg-tertiary-light text-primary-light dark:text-secondary-dark cursor-pointer hover:bg-red-400'>
					{t('btnSubmit')}
				</Button>
			</div>

			<CardUrlShorted url={url} />
			{error && <span className='text-tertiary-light'>{error}</span>}
		</form>
	);
};

export default ShortenerForm;
