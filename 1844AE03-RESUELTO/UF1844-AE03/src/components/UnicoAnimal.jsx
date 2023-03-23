import React from 'react';

const UnicoAnimal = ({ animal }) => {
	return (
		<div>
			<h2>Bicho</h2>
			<h3 key={animal.id}>
				{animal.nombre} - {animal.raza} - {animal.edad} - {animal.diagnostico} -
				{animal.propietario}
			</h3>
		</div>
	);
};

export default UnicoAnimal;

// App --> ListadoAnimales --> UnicoAnimal
//  |
// ListadoUsuarios
