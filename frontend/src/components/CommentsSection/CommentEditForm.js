import React from "react";

import "./commentEditForm.css";

const CommentEditForm = ({ comment, setEditing, userId }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(comment.comment, userId)
    };

    const handleDelete = () => {
        console.log("DELETE")
    };

	return (
		<div className="comment-edit-form-container">
			<form onSubmit={handleSubmit}>
				<textarea />
				<div className="comment-edit-form-controls">
					<button
						className="comment-edit-form-cancel-button"
						title="cancel"
						type="button"
						onClick={() => setEditing(false)}
					>
						<i className="fas fa-times"></i>
					</button>
					<button
						title="save"
						type="submit"
						className="comment-edit-form-save-button"
					>
						<i className="far fa-save"></i>
					</button>
					<button
						className="comment-edit-form-delete-button"
						title="delete"
						type="button"
						onClick={handleDelete}
					>
						<i className="far fa-trash-alt"></i>
					</button>
				</div>
			</form>
		</div>
	);
};

export default CommentEditForm;
