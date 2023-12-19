import { FC } from 'react';
import './App.css';
import { ShootingStars } from './components/ShootingStars/ShootingStars';
import { Snow } from './components/Snow/Snow';
import { Timer } from './components/Timer/Timer';

export const App: FC = () => {
	return (
		<div>
			<ShootingStars />
			<Snow />
			<p className='text-3xl mb-3'>До нового года осталось:</p>
			<Timer />
		</div>
	);
};

// https://codemyui.com/shooting-star-background-in-pure-css/
// https://codepen.io/pehaa/pen/WNKNVKP -- snow globe
