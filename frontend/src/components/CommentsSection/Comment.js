import React from "react";

import { parseDate } from "../../utils";

import "./comment.css";

const Comment = ({ comment }) => {

    // TODO: add link on name to profile page when feature is ready

	return (
		<div className="comment-container">
			<p className="comment-author-info">
				{`from ${comment.User.firstName} ${comment.User.lastName} on
				${parseDate(comment.createdAt)}`}
			</p>
            <p className="comment-content">{comment.comment}</p>
		</div>
	);
};

export default Comment;
