import Breacrumb from "../../common/Breacrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Wrapper from "../../layouts/Wrapper";
import BlogArticleArea from "./BlogArticleArea";

const BlogArticle = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Artículo" subtitle="Blog" />
      <BlogArticleArea />
      <FooterOne />
    </Wrapper>
  );
};

export default BlogArticle;
