import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCommentClaps } from "../../store/clap"

import clap from "../../images/clap.svg";
import "./commentClapButton.css"

const CommentClapButton = ({ commentId, userId }) => {
    const [loaded, setLoaded] = useState(false);
    const [claps, setClaps] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const clapCount = await dispatch(getCommentClaps(commentId));
            await setClaps(clapCount);
            await setLoaded(true);
        })();
    }, [dispatch, commentId]);

    const handleClick = () => {};

    return loaded && (
			<>
				<button onClick={handleClick} className="comment-clap-button">
					<img className="comment-clap-button-icon" src={clap} alt="clap" />
                    <p className="comment-clap-button-clap-count">{claps}</p>
				</button>
			</>
	);
};

export default CommentClapButton;
