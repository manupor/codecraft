

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
		title: "Sitios y Marcas Entregados",
	},
	{
		id: 2,
		count: 7,
    symbol: "+",
		title: "Años Diseñando",
	}, 
	{
		id: 3,
		count: 2,
    symbol: "-4sem",
		title: "Tiempo Promedio de Lanzamiento",
	},
	{
		id: 4,
		count: 100,
    symbol: "%",
		title: "A Medida, Nunca Plantillas",
	},
];

export default counter_data;