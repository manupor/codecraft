 
 

import { useEffect } from "react";
import BackToTop from "../common/BackToTop";
import ScrollToTop from "../common/scroll-to-top";

const Wrapper = ({ children }: any) => {
  useEffect(() => {
    document.body.classList.add("body-bg");
    return () => { document.body.classList.remove("body-bg"); };
  }, []);

  return <>
    {children}
    <ScrollToTop />
    <BackToTop />
  </>;
};

export default Wrapper;
