import React from "react";
import { useSelector } from "react-redux";
import SignupFormModal from "../SignupFormModal";
import TrendingStories from "../TrendingStories";
import Feed from "../Feed";
import "./index.css";

const HomePage = () => {
	const sessionUser = useSelector(state => state.session.user);


	return (
		<>
			{ !sessionUser ? (
				<div className="intro-container">
					<div className="intro">
						<h1 className="heading">Explore new perspectives</h1>
						<h3 className="sub-heading">Read and share ideas from independent artists, world-class performers, experts, and self-taught musicians from around the globe. Everyone's welcome.</h3>
						<SignupFormModal />
					</div>
				</div>
			) : null}
            <TrendingStories />
			<Feed />
		</>
	);
};

export default HomePage;
