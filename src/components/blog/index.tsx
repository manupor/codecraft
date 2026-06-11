 
import Breacrumb from '../../common/Breacrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import BlogArea from './BlogArea';

const Blog = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Nuestro Blog" subtitle="Blog" />
      <BlogArea />
      <FooterOne />
    </Wrapper>
  );
};

export default Blog;