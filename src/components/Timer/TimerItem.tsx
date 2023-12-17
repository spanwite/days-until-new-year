import { FC } from 'react';
import { TimeUnit } from '../../utils/getDaysUntilNewYear';
import { getTimeUnitLabel } from '../../utils/getTimeUnitLabel';

interface TimerItemProps {
	Value: number;
	TimeUnit: TimeUnit;
}

export const TimerItem: FC<TimerItemProps> = ({ Value, TimeUnit }) => {
	return (
		<div className='w-24 bg-red-900 py-2 rounded-md'>
			<strong>{Value}</strong>
			<div>{getTimeUnitLabel(Value, TimeUnit)}</div>
		</div>
	);
};
