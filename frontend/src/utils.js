export const estimateTime = (article) => {
	// Average reading rate
	const rate = 200;

	// Word cound in article
	const length = article.split(" ").length;

	// Round up to avoid decimals/ pad out the time
	return Math.ceil(length / rate);
};

export const parseDate = (date) => {
	const abbreviations = {
		"01": "Jan",
		"02": "Feb",
		"03": "Mar",
		"04": "Apr",
		"05": "May",
		"06": "Jun",
		"07": "Jul",
		"08": "Aug",
		"09": "Sep",
		10: "Oct",
		11: "Nov",
		12: "Dec",
	};

	// Isolates the digits that make up the month and day
	const month = date.substring(5, 7);
	const day = date.substring(8, 10);

	// Return formatted date for display
	return `${abbreviations[month]} ${day}`;
};

export const countComments = (responses) => {
	// returns a gramatically correct sentence based on number of comments
	if (responses.length === 0) {
		return <p>No comments yet</p>;
	} else if (responses.length === 1) {
		return <p>1 comment</p>;
	} else {
		return <p>{`${responses.length} comments`}</p>;
	}
};
