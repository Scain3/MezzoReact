import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./commentForm.css";

const CommentForm = ({ storyId }) => {
	const userId = useSelector((state) => state.session.user.id);
	const [comment, setComment] = useState("");

	const handleSubmit = () => {};

	return (
		<>
			<div className="comment-form-container">
				<form className="comment-form">
					<textarea
						onChange={(e) => setComment(e.target.value)}
						className="comment-form-textarea"
						placeholder="Share your thoughts..."
					></textarea>
					{comment.length ? (
						<button className="comment-form-submit-button">Publish</button>
					) : (
						<></>
					)}
				</form>
			</div>
		</>
	);
};

export default CommentForm;
