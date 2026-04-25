import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<p>
				Made by{" "}
				<a>Ss Ádrian</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;