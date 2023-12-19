import { FC } from 'react';
import './ShootingStars.scss';

export const ShootingStars: FC = () => {
	const stars = new Array(50).fill(null).map(() => <div className='shooting_star' />);

	return <div className='night'>{stars}</div>;
};
