import './Usuarios.css';
import Usuario from './Usuario';

const Usuarios = (lista) => {
	const listaUsuarios = lista.usuarios;
	return (
		<div className='usuarios'>
			{/* A mano */}
			<h1>Usuarios</h1>
			{/* <div className='usuarios'>
				<h1>{listaUsuarios[0].nombre}</h1>
				<h4>{listaUsuarios[0].email}</h4>
				<p>{listaUsuarios[0].password}</p>
			</div>

			<div className='usuarios'>
				<h1>{listaUsuarios[1].nombre}</h1>
				<h4>{listaUsuarios[1].email}</h4>
				<p>{listaUsuarios[1].password}</p>
			</div>
			<div className='usuarios'>
				<h1>{listaUsuarios[2].nombre}</h1>
				<h4>{listaUsuarios[2].email}</h4>
				<p>{listaUsuarios[2].password}</p>
			</div>
			<div className='usuarios'>
				<h1>{listaUsuarios[3].nombre}</h1>
				<h4>{listaUsuarios[3].email}</h4>
				<p>{listaUsuarios[3].password}</p>
			</div> */}
			{/* Con método map() */}
			{listaUsuarios.map((usuario) => {
				return (
					// 1 - En el mismo componente
					// <div key={usuario.id} className='usuario'>
					// 	<h1>{usuario.nombre}</h1>
					// 	<h4>{usuario.email}</h4>
					// 	<p>{usuario.password}</p>
					// </div>
					// 2 - En un componente externo Usuario
					<Usuario key={usuario.id} usuario={usuario} className='usuario' />
				);
			})}
		</div>
	);
};

export default Usuarios;
