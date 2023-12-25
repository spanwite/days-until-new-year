import { FC, useEffect, useState } from 'react';
import './App.css';
import { BackgroundEffects } from './components/BackgroundEffects/BackgroundEffects';
import { NewYearTimer } from './components/NewYearTimer/NewYearTimer';
import { getDaysUntilNewYear } from './utils/getDaysUntilNewYear';
import { getNewYearStatus } from './utils/getNewYearStatus';

export const App: FC = () => {
	const [isNewYear, setIsNewYear] = useState(getNewYearStatus);
	const [daysUntilNewYear, setDaysUntilNewYear] = useState(getDaysUntilNewYear);

	useEffect(() => {
		const interval = setInterval(() => {
			if (getNewYearStatus()) {
				setIsNewYear(true);
				clearInterval(interval);
			}

			setDaysUntilNewYear(getDaysUntilNewYear());
		}, 1000);
		return () => clearInterval(interval);
	}, [isNewYear]);

	return (
		<div>
			<BackgroundEffects />
			{!isNewYear && <NewYearTimer daysUntilNewYear={daysUntilNewYear} />}
		</div>
	);
};

// https://codepen.io/pehaa/pen/WNKNVKP -- snow globe
