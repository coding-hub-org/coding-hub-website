import React from "react";
import "./Banner.css";

const Banner = () => {
	return (
		<div className="banner-container">
			<div className="banner-content">
				<div className="banner-title">Black Lives Matter</div>
				<div className="banner-info">
					Coding Hub stands in solidarity with the Black community. You can also
					support the movement by{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.notion.so/BLACK-LIVES-MATTER-68fe71a3e6974eaa9629af047a074384"
					>
						taking action now.
					</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;
