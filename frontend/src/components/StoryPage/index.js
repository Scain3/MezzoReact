import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getStory } from "../../store/story"

const StoryPage = () => {
    const [loaded, setLoaded] = useState(false);
    const story = useSelector(state => state.story.story)

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(getStory(id));
            await setLoaded(true);
        })()
    },[id])

	return loaded && (<h1>{story.title}</h1>);
};

export default StoryPage;
