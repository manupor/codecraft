 
import Breacrumb from "../../common/Breacrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import PricingHomeFour from "../homes/home-4/PricingHomeFour";

const Pricing = () => {
	return (
		<Wrapper>
      <HeaderOne />
			<Breacrumb title="Pricing Plan" subtitle="Pricing Plan" />
      <PricingHomeFour style_2={true} />
			<FooterOne />
		</Wrapper>
	);
};

export default Pricing;
