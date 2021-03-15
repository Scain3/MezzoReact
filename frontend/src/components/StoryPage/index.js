import React from "react";
import { useParams } from "react-router-dom";

const StoryPage = () => {
	const { id } = useParams();
	return <h1>this story's id is {id}</h1>;
};

export default StoryPage;
