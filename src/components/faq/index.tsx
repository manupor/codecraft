 
import Breacrumb from "../../common/Breacrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import FaqArea from "./FaqArea";

const Faq = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Our FAQ" subtitle="FAQ" />
      <FaqArea />
      <FooterOne />
    </Wrapper>
  );
};

export default Faq;