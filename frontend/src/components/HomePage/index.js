import React from "react";
import TrendingStories from "../TrendingStories";
import SignupFormModal from "../SignupFormModal";
import "./index.css";

const HomePage = () => {



	return (
		<>
			<div className="intro-container">
				<div className="intro">
					<h1 className="heading">Explore new perspectives</h1>
					<h3 className="sub-heading">Read and share ideas from independent artists, world-class performers, experts, and self-taught musicians from around the globe. Everyone's welcome.</h3>
					<SignupFormModal />
				</div>
			</div>
            <TrendingStories />
		</>
	);
};

export default HomePage;
