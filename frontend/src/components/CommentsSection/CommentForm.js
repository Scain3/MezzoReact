import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { postComment } from "../../store/comments";
import "./commentForm.css";

const CommentForm = ({ storyId }) => {
	const userId = useSelector((state) => state.session.user.id);
	const [comment, setComment] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const body = { userId, comment };
		await dispatch(postComment(body, storyId));
		return setComment("")
	};

	return (
		<>
			<div className="comment-form-container">
				<form className="comment-form">
					<textarea
						onChange={(e) => setComment(e.target.value)}
						className="comment-form-textarea"
						placeholder="Share your thoughts..."
						value={comment}
					></textarea>
					{comment.length ? (
						<button type="button" onClick={handleSubmit} className="comment-form-submit-button">
							Publish
						</button>
					) : (
						<></>
					)}
				</form>
			</div>
		</>
	);
};

export default CommentForm;
