import { FC } from 'react';
import { useDaysUntilNewYear } from '../../hooks/useDaysUntilNewYear';
import { TimeUnit } from '../../utils/getDaysUntilNewYear';
import { TimerItem } from './TimerItem';

export const Timer: FC = () => {
	const daysUntilNewYear = useDaysUntilNewYear();

	return (
		<div className='flex gap-4'>
			{Object.entries(daysUntilNewYear).map(([key, value]) => (
				<TimerItem key={key} TimeUnit={key as TimeUnit} Value={value} />
			))}
		</div>
	);
};
