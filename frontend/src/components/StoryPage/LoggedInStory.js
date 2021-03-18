import React from "react";

import CommentsSection from "../CommentsSection";

const LoggedInStory = ({ content }) => {

	return (
		<>
			<p className="logged-in-story-page-content">{content}</p>
			<CommentsSection />
		</>
	);
};

export default LoggedInStory;
