import AboutArea from "./AboutArea";
import Wrapper from "../../layouts/Wrapper";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breacrumb from "../../common/Breacrumb";
import FooterOne from "../../layouts/footers/FooterOne";

const About = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breacrumb title="Sobre CodeCraftt" subtitle="Nosotros" />
			<AboutArea />
			<FooterOne />
		</Wrapper>
	);
};

export default About;
