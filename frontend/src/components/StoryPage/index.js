import React from "react";
import { useParams } from "react-router-dom";

const StoryPage = () => {
	const { id } = useParams();
	return <h1>StoryPage</h1>;
};

export default StoryPage;
