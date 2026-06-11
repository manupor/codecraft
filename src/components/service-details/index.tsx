 
import ServiceDetailsArea from "./ServiceDetailsArea";
import Wrapper from "../../layouts/Wrapper";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breacrumb from "../../common/Breacrumb";
import FooterOne from "../../layouts/footers/FooterOne";

const ServiceDetails = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Detalles del Servicio" subtitle="Servicios" />
      <ServiceDetailsArea />
      <FooterOne />
    </Wrapper>
  );
};

export default ServiceDetails;