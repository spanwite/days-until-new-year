import { FC } from 'react';
import { DateDuration, TimeUnit } from '../../utils/getDaysUntilNewYear';
import { TimerItem } from './TimerItem';

interface NewYearTimerProps {
	daysUntilNewYear: DateDuration;
}

export const NewYearTimer: FC<NewYearTimerProps> = ({ daysUntilNewYear }) => {
	return (
		<>
			<p className='text-4xl mb-3'>До нового года осталось:</p>
			<div className='flex gap-2'>
				{Object.entries(daysUntilNewYear).map(([key, value]) =>
					value === 0 ? null : <TimerItem key={key} TimeUnit={key as TimeUnit} Value={value} />
				)}
			</div>
		</>
	);
};
