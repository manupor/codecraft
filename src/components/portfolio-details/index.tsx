 
import Breacrumb from "../../common/Breacrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
 
import PortfolioDetailsArea from "./PortfolioDetailsArea";

 
const PortfolioDetails = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Portfolio" subtitle="Portfolio Details" />
      <PortfolioDetailsArea />
      <FooterOne />
    </Wrapper>
  );
};

export default PortfolioDetails;