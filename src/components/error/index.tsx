import { Link } from "react-router-dom";
import Wrapper from "../../layouts/Wrapper";
import { useLang } from "../../context/LanguageContext";

const Error = () => {
	const { t } = useLang();
	return (
    <Wrapper>
		<div className="error-page">
			<section className="error-section text-center">
				<div className="container">
					<div className="error-content">
						<h1>404</h1>
						<h2>{t("error.title")}</h2>
						<Link
							to="/"
							className="primary-btn one gradient-bg white-color border-btn"
						>
							<span>{t("error.back")}</span>
							<i className="icon-1 gradient-color"></i>
						</Link>
					</div>
				</div>
			</section>
		</div>    
    </Wrapper>
	);
};

export default Error;
