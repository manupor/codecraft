import { useState } from "react";
import menu_data from "../../data/menu-data";
import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";

const MobileMenu = ({ isOpen, setIsOpen }: any) => {
  const { t, lang, toggleLang } = useLang();

    const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };



	return (
		<>
			<div className={`mobile-menu ${isOpen ? "visibles" : ""}`}>
				<div className="menu-backdrop" onClick={() => setIsOpen(false)}></div>
				<div className="close-btn" onClick={() => setIsOpen(false)}>
					<i className="fas fa-times"></i>
				</div>
				<nav className="menu-box">
					<div className="nav-logo" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
						<Link to="/">
							<img src="codecraftt-logo.png" alt="CodeCraftt" style={{maxHeight: '35px', width: 'auto'}} />
						</Link>
						<button onClick={toggleLang} style={{background:'none',border:'1px solid rgba(255,255,255,0.3)',color:'#fff',padding:'4px 12px',borderRadius:'4px',cursor:'pointer',fontSize:'12px',fontWeight:600,letterSpacing:'1px'}}>{lang === 'es' ? 'EN' : 'ES'}</button>
					</div>
					<div className="menu-outer">
						<div
							className="collapse navbar-collapse show"
							id="navbarSupportedContent"
						>
							<ul className="navigation clearfix">
								{menu_data.map((item, i) => (
									<li
										key={i}
										className={`${item.has_dropdown && "current dropdown"}`}
									>
										<Link to={item.link}>{t(`nav.${item.id}`)}</Link>
										{item.has_dropdown && (
											<ul style={{
                      display: navTitle === item.title ? "block" : "none",
                    }}>
												{item?.sub_menus?.map((sub_item, j) => (
													<li key={j}>
														<Link to={sub_item.link}>{sub_item.title}</Link>
													</li>
												))}
											</ul>
										)}
										{item.has_dropdown && (
											<div className={`dropdown-btn  ${navTitle === item.title ? "open" : ""}`}>
												<span className="fas fa-angle-down" onClick={() => openMobileMenu(item.title)}></span>
											</div>
										)}
									</li>
								))} 
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default MobileMenu;
