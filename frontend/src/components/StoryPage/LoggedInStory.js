import React from "react";

import CommentsSection from "../CommentsSection";
import ClapButton from "../ClapButton";

const LoggedInStory = ({ content, storyId }) => {
	return (
		<>
			<p className="logged-in-story-page-content">{content}</p>
			<div className="logged-in-story-controls">
				<ClapButton storyId={storyId} />
				<CommentsSection storyId={storyId} />
			</div>
		</>
	);
};

export default LoggedInStory;
