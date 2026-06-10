

interface counterDataType  {
    id: number;
    count: number;
    symbol: string;
    title: string;
 
}

const counter_data: counterDataType[] = [
	{
		id: 1,
		count: 150,
    symbol: "+",
		title: "Proyectos Entregados",
	},
	{
		id: 2,
		count: 10,
    symbol: "+",
		title: "Años de Experiencia",
	}, 
	{
		id: 3,
		count: 5,
    symbol: "+",
		title: "Países con Clientes Activos",
	},
	{
		id: 4,
		count: 100,
    symbol: "%",
		title: "Código Propio, Sin Plantillas",
	},
];

export default counter_data;