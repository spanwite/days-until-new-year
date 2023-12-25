import { FC } from 'react';
import './ShootingStars.scss';

export const ShootingStars: FC = () => {
	const stars = new Array(50)
		.fill(null)
		.map((_, index) => <div key={index} className='shooting_star' />);

	return <div className='night'>{stars}</div>;
};

// https://codemyui.com/shooting-star-background-in-pure-css/
