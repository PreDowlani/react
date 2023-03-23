import React from 'react';
import ListadoAnimales from './components/ListadoAnimales';

const animales = [
	{
		id: 1,
		nombre: 'Roter',
		raza: 'Cabeza de León/Enano',
		edad: '6 años',
		diagnostico: 'Esterilizar',
		propietario: 'Samuel',
	},
	{
		id: 2,
		nombre: 'Zeus',
		raza: 'Pastor Alemán',
		edad: '3 años',
		diagnostico: 'Herida en la pata',
		propietario: 'Antonio',
	},
	{
		id: 3,
		nombre: 'Pupy',
		raza: 'Milk Thousand',
		edad: '4 años',
		diagnostico: 'Ladra a todo lo que se mueve',
		propietario: 'Francisco',
	},
	{
		id: 4,
		nombre: 'Michi',
		raza: 'Siames',
		edad: '2 años',
		diagnostico: 'Desparasitación',
		propietario: 'Karen',
	},
];
const App = () => {
	return (
		<div>
			<ListadoAnimales animales={animales} />
		</div>
	);
};

export default App;
