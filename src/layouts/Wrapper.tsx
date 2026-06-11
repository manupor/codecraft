 
 

import BackToTop from "../common/BackToTop";
import ScrollToTop from "../common/scroll-to-top";
import WhatsAppButton from "../common/WhatsAppButton";

const Wrapper = ({ children }: any) => {
	return <>
  {children}
  <ScrollToTop />
  <BackToTop />
  <WhatsAppButton />

  </>;
};

export default Wrapper;
