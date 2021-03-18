import React from "react";

import { parseDate } from "../../utils";

import "./comment.css";

const Comment = ({ comment }) => {

    // TODO: add link on name to profile page when feature is ready

	return (
		<div className="comment-container">
            <p>{comment.comment}</p>
			<p className="comment-author-info">
				{`by ${comment.User.firstName} ${comment.User.lastName} on
				${parseDate(comment.createdAt)}`}
			</p>
		</div>
	);
};

export default Comment;
