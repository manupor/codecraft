import { useLang } from "../../context/LanguageContext";
import CtaHomeFour from "../homes/home-4/CtaHomeFour"; 
import ContactArea from "./ContactArea";
import ClientsHomeTwo from "../homes/home-2/ClientsHomeTwo";
import Wrapper from "../../layouts/Wrapper";
import HeaderFive from "../../layouts/headers/HeaderFive";
import Breacrumb from "../../common/Breacrumb";
import FooterFour from "../../layouts/footers/FooterFour";


const Contact = () => {
  const { t } = useLang();
  return (
    <Wrapper>
      <div className="boxed_wrapper">
        <HeaderFive />
        <Breacrumb title={t("breadcrumb.contact.title")} subtitle={t("breadcrumb.contact.sub")} />
        <ContactArea />
        <ClientsHomeTwo />
        <CtaHomeFour />
        <FooterFour />
      </div>      
    </Wrapper>
  );
};

export default Contact;