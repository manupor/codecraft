import { Link } from "react-router-dom";
import Wrapper from "./layouts/Wrapper";

const NotFound = () => {
	return (
		<Wrapper>
			<div className="error-page">
				<section className="error-section text-center section-padding">
					<div className="container">
						<div className="error-content">
							<h1>404</h1>
							<h2>Oops! That Page Can Not be Found.</h2>
							<Link to="/" className="theme-btn mt-5">
								Back Home
							</Link>
						</div>
					</div>
				</section>
			</div>
		</Wrapper>
	);
};

export default NotFound;
