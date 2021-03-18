import React from "react";

import CommentForm from "./CommentForm";
import "./commentsSection.css";

const CommentsSection = () => {
	return (
		<div className="comments-section-container">
			<p>Comments</p>
			<CommentForm />
		</div>
	);
};

export default CommentsSection;
