import { FC } from 'react';
import { ShootingStars } from './ShootingStars/ShootingStars';
import { Snow } from './Snow/Snow';

export const BackgroundEffects: FC = () => {
	return (
		<>
			<Snow />
			<ShootingStars />
		</>
	);
};
