 
import Breacrumb from "../../common/Breacrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import BlogDetailsArea from "./BlogDetailsArea";

const BlogDetails = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <FooterOne />
    </Wrapper>
  );
};

export default BlogDetails;