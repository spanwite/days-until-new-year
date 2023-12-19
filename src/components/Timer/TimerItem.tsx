import { FC } from 'react';
import { TimeUnit } from '../../utils/getDaysUntilNewYear';
import { getTimeUnitLabel } from '../../utils/getTimeUnitLabel';

interface TimerItemProps {
	Value: number;
	TimeUnit: TimeUnit;
}

export const TimerItem: FC<TimerItemProps> = ({ Value, TimeUnit }) => {
	return (
		<div className='w-24 py-2 rounded-md bg-tablet'>
			<strong className='text-5xl'>{Value}</strong>
			<div className='text-2xl'>{getTimeUnitLabel(Value, TimeUnit)}</div>
		</div>
	);
};
