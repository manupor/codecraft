 
import Wrapper from "../../layouts/Wrapper";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breacrumb from "../../common/Breacrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import ServiceList from "./ServiceList";

const Service = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Nuestros Servicios" subtitle="Servicios" />
      <ServiceList />
      <FooterOne />
    </Wrapper>
  );
};

export default Service;