 
import HeroHomeFour from "./HeroHomeFour";
import AboutHomeFour from "./AboutHomeFour";
import IntroHomeFour from "./IntroHomeFour";
import ServiceHomeFour from "./ServiceHomeFour";
import PortfolioHomeFour from "./PortfolioHomeFour";
import ProcessHomeFour from "../home-1/ProcessHomeFour";
import TestimonialHomeFour from "./TestimonialHomeFour";
import PricingHomeFour from "./PricingHomeFour";
import FaqHomeFour from "./FaqHomeFour";
import TeamHomeFour from "./TeamHomeFour";
import BlogHomeFour from "./BlogHomeFour";
import CtaHomeFour from "./CtaHomeFour"; 
import Wrapper from "../../../layouts/Wrapper";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import FooterFour from "../../../layouts/footers/FooterFour";

const HomeFour = () => {
	return (
		<Wrapper>
			<div className="boxed_wrapper">
				<HeaderFour />
        <HeroHomeFour />
        <AboutHomeFour />
        <IntroHomeFour />
        <ServiceHomeFour />
        <PortfolioHomeFour />
        <ProcessHomeFour />
        <TestimonialHomeFour />
        <PricingHomeFour />
        <FaqHomeFour />
        <TeamHomeFour />
        <BlogHomeFour />
        <CtaHomeFour />
        <FooterFour />
			</div>
		</Wrapper>
	);
};

export default HomeFour;

 
 

 