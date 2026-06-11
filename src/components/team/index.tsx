 
import Breacrumb from '../../common/Breacrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import TeamArea from './TeamArea';

const Team = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breacrumb title="Our Creative Member" subtitle="Our Team" />
      <TeamArea />
      <FooterOne />
    </Wrapper>
  );
};

export default Team;