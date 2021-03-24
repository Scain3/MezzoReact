import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { parseDate } from "../../utils";

import CommentEditForm from "./CommentEditForm";
import "./comment.css";

const Comment = ({ comment }) => {
	const [editing, setEditing] = useState(false);
	const [isAuthor, setIsAuthor] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const authorId = comment.User.id;
	const userId = useSelector((state) => state.session.user.id);

	useEffect(() => {
		console.log("authorId", authorId, "userId", userId);
		(async () => {
			if (userId === authorId) {
				await setIsAuthor(true);
			}
			await setLoaded(true);
			return;
		})();
	}, [userId, authorId]);

	// TODO: add link on name to profile page when feature is ready

	if (editing && isAuthor)
		return (
			<CommentEditForm
				comment={comment}
				setEditing={setEditing}
				userId={userId}
			/>
		);

	return (
		loaded && (
			<div className="comment-container">
				<div className="comment-header">
					<p className="comment-author-info">
						{`from ${comment.User.firstName} ${comment.User.lastName} on
					${parseDate(comment.createdAt)}`}
					</p>
					{isAuthor ? (
						<button
							title="edit comment"
							className="comment-edit-button"
							onClick={() => setEditing(true)}
						>
							<i className="far fa-edit"></i>
						</button>
					) : (
						<></>
					)}
				</div>
				<p className="comment-content">{comment.comment}</p>
			</div>
		)
	);
};

export default Comment;
