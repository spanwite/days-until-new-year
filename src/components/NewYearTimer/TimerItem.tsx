import { FC } from 'react';
import { TimeUnit } from '../../utils/getDaysUntilNewYear';
import { getTimeUnitLabel } from '../../utils/getTimeUnitLabel';

interface TimerItemProps {
	Value: number;
	TimeUnit: TimeUnit;
}

export const TimerItem: FC<TimerItemProps> = ({ Value, TimeUnit }) => {
	return (
		<div className='w-24'>
			<strong className='text-7xl'>{Value}</strong>
			<div className='text-3xl'>{getTimeUnitLabel(Value, TimeUnit)}</div>
		</div>
	);
};
