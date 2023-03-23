const Mensaje = (mensajeunico) => {
	const mensaje = mensajeunico.mensaje;
	return (
		<div>
			<h1>{mensaje.autor}</h1>
			<h4>{mensaje.fecha}</h4>
			<p>{mensaje.mensaje}</p>
		</div>
	);
};

export default Mensaje;
