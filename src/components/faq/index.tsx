import { useLang } from "../../context/LanguageContext";
import Breacrumb from "../../common/Breacrumb";
import FooterFour from "../../layouts/footers/FooterFour";
import HeaderFive from "../../layouts/headers/HeaderFive";
import Wrapper from "../../layouts/Wrapper";
import CtaHomeFour from "../homes/home-4/CtaHomeFour"; 
import FaqArea from "./FaqArea";

 

const Faq = () => {
  const { t } = useLang();
  return (
    <Wrapper>
      <div className="boxed_wrapper">
        <HeaderFive />
        <Breacrumb title={t("breadcrumb.faq.title")} subtitle={t("breadcrumb.faq.sub")} />
        <FaqArea />
        <CtaHomeFour />
        <FooterFour />
      </div>
    </Wrapper>
  );
};

export default Faq;