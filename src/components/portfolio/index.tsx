  
import Breacrumb from '../../common/Breacrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import PortfolioArea from './PortfolioArea';

const Portfolio = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Portfolio" subtitle="Portfolio" />
      <PortfolioArea />
      <FooterOne />
    </Wrapper>
  );
};

export default Portfolio;