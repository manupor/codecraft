 

// menu data 
interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: { title: string; link: string }[];
}

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
    has_dropdown: false,     
  },
  {
    id: 2,
    title: "Nosotros",
    link: "/about",
    has_dropdown: false,     
  },
  {
    id: 3,
    title: "Servicios",
    link: "/service",
    has_dropdown: false,     
  },
  {
    id: 4,
    title: "Proceso",
    link: "/#proceso",
    has_dropdown: false,     
  },
  {
    id: 5,
    title: "Contacto",
    link: "/contact",
    has_dropdown: false,     
  },  
];
export default menu_data;
