import Breacrumb from "../../common/Breacrumb";
import FooterFour from "../../layouts/footers/FooterFour";
import HeaderFive from "../../layouts/headers/HeaderFive";
import Wrapper from "../../layouts/Wrapper";
import CtaHomeFour from "../homes/home-4/CtaHomeFour";
import BlogArticleArea from "./BlogArticleArea";

const BlogArticle = () => {
  return (
    <Wrapper>
      <div className="boxed_wrapper">
        <HeaderFive />
        <Breacrumb title="Artículo" subtitle="Blog" />
        <BlogArticleArea />
        <CtaHomeFour />
        <FooterFour />
      </div>
    </Wrapper>
  );
};

export default BlogArticle;
