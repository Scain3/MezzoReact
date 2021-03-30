import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import clap from "../../images/clap.svg";
import "./commentClapButton.css"

const CommentClapButton = ({ commentId }) => {
    const [loaded, setLoaded] = useState(false);
    const [claps, setClaps] = useState(0);
    
    return (
			<>
				<button className="comment-clap-button">
					<img className="comment-clap-button-icon" src={clap} alt="clap" />
                    <p className="comment-clap-button-clap-count">5</p>
				</button>
			</>
	);
};

export default CommentClapButton;
