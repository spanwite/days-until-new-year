import { useEffect, useState } from 'react';
import { getDaysUntilNewYear } from '../utils/getDaysUntilNewYear';

export function useDaysUntilNewYear() {
	const [daysTillNewYear, setDaysTillNewYear] = useState(getDaysUntilNewYear);

	useEffect(() => {
		const interval = setInterval(() => {
			setDaysTillNewYear(getDaysUntilNewYear());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return daysTillNewYear;
}
