import { DateDuration } from './getDaysUntilNewYear';

const LABEL_VARIANTS: { [key in keyof DateDuration]: string }[] = [
	{
		days: 'День',
		hours: 'Час',
		minutes: 'Минута',
		seconds: 'Секунда',
	},
	{
		days: 'Дня',
		hours: 'Часа',
		minutes: 'Минуты',
		seconds: 'Секунды',
	},
	{
		days: 'Дней',
		hours: 'Часов',
		minutes: 'Минут',
		seconds: 'Секунд',
	},
];

export function getTimeUnitLabel(value: number, type: keyof DateDuration) {
	const lastFigure = value % 10;
	const lastTwoFigures = value % 100;

	if (lastTwoFigures >= 11 && lastTwoFigures < 15) {
		return LABEL_VARIANTS[2][type];
	}

	if (lastFigure === 1) {
		return LABEL_VARIANTS[0][type];
	}

	if (lastFigure > 1 && lastFigure < 5) {
		return LABEL_VARIANTS[1][type];
	}

	return LABEL_VARIANTS[2][type];
}
