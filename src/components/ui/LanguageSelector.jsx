import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const LanguageSelector = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="flex gap-2">
			<Button
				variant={i18n.language === 'en' ? "default" : "outline"}
				size="sm"
				onClick={() => changeLanguage('en')}
			>
				EN
			</Button>
			<Button
				variant={i18n.language === 'es' ? "default" : "outline"}
				size="sm"
				onClick={() => changeLanguage('es')}
			>
				ES
			</Button>
		</div>
	);
};

export default LanguageSelector;
