import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";



const Feed = () => {

    return (
            <>
                <h1>This is the feed</h1>
                
                <div className="feed-container">
                    <div className="previews-container">
                        <div className="preview-container">
                            <h3>title</h3>
                            <p>subtitle</p>
                            <div>
                                {/* date */}
                                {/* reading time */}
                            </div>
                        </div>

                        <img></img>
                    </div>
                </div>
            </>
    )
}

export default Feed;
