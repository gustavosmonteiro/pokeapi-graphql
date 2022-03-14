export const capitalizeFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatGender = (string: string) => {
	return string.replace(/-m$/, ' ♂').replace(/-f$/, ' ♀');
};
