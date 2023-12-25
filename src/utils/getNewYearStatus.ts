export function getNewYearStatus() {
	const currentDate = new Date();
	if (currentDate.getMonth() === 0 && currentDate.getDate() >= 1 && currentDate.getDate() <= 7) {
		return true;
	}
	return false;
}
