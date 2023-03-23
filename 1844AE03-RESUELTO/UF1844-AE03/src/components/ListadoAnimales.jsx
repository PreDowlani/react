import React from 'react';
import UnicoAnimal from './UnicoAnimal';

const ListadoAnimales = ({ animales }) => {
	return (
		<div>
			<h2>Listado de Animales</h2>
			<ul>
				{animales.map((animal) => {
					return <UnicoAnimal key={animal.id} animal={animal} />;
				})}
			</ul>
		</div>
	);
};

export default ListadoAnimales;
