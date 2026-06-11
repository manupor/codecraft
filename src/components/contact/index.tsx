 
import ContactArea from "./ContactArea";
import Wrapper from "../../layouts/Wrapper";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breacrumb from "../../common/Breacrumb";
import FooterOne from "../../layouts/footers/FooterOne";

const Contact = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Contacto" subtitle="Contacto" />
      <ContactArea />
      <FooterOne />
    </Wrapper>
  );
};

export default Contact;