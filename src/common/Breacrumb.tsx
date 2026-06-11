import { Link } from "react-router-dom";

const Breacrumb = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <>
      <div className="breadcrumb-wrapper section-bg bg-cover" style={{ backgroundImage: "url('/agznko/assets/img/breadcrumb-shape.png')" }}>
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">{title}</h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li><Link to="/">Home</Link></li>
              <li><i className="fa-regular fa-chevrons-right"></i></li>
              <li>{subtitle}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breacrumb;