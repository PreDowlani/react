const Usuario = ({usuario}) => {
	//const usuarioUnico = usuario.usuario;

	return (
		<div>
			<h1>{usuario.nombre}</h1>
			<h4>{usuario.email}</h4>
			<p>{usuario.password}</p>
		</div>
	);
};

export default Usuario;
