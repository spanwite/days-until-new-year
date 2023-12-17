export type TimeUnit = 'days' | 'hours' | 'minutes' | 'seconds';

export type DateDuration = {
	[key in TimeUnit]: number;
};

export function getDaysUntilNewYear(): DateDuration {
	const newYearDate = new Date(new Date().getFullYear() + 1, 0, 1);
	const diff = newYearDate.valueOf() - new Date().valueOf();

	const days = diff / (1000 * 60 * 60 * 24);
	const hours = (days % 1) * 24;
	const minutes = (hours % 1) * 60;
	const seconds = (minutes % 1) * 60;

	return {
		days: Math.floor(days),
		hours: Math.floor(hours),
		minutes: Math.floor(minutes),
		seconds: Math.floor(seconds),
	};
}
