import './Blog.css';
import Mensaje from './Mensaje';

const Blog = (lista) => {
	const listaMensajes = lista.mensajes;
	return (
		<div className='mensajes'>
			<h1>Posts</h1>
			{/* A mano */}
			{/* <div className='mensaje'>
				<h1>{listaMensajes[0].autor}</h1>
				<h4>{listaMensajes[0].fecha}</h4>
				<p>{listaMensajes[0].mensaje}</p>
			</div>

			<div className='mensaje'>
				<h1>{listaMensajes[1].autor}</h1>
				<h4>{listaMensajes[1].fecha}</h4>
				<p>{listaMensajes[1].mensaje}</p>
			</div>
			<div className='mensaje'>
				<h1>{listaMensajes[2].autor}</h1>
				<h4>{listaMensajes[2].fecha}</h4>
				<p>{listaMensajes[2].mensaje}</p>
			</div>
			<div className='mensaje'>
				<h1>{listaMensajes[3].autor}</h1>
				<h4>{listaMensajes[3].fecha}</h4>
				<p>{listaMensajes[3].mensaje}</p>
			</div> */}
			{/* Con método map() */}
			{listaMensajes.map((mensaje) => {
				return (
					// Con props a Mensaje
					// <div key={mensaje.id}>
					// 	<h1>{mensaje.autor}</h1>
					// 	<h4>{mensaje.fecha}</h4>
					// 	<p>{mensaje.mensaje}</p>
					// </div>
					<Mensaje key={mensaje.id} mensaje={mensaje} />
				);
			})}
		</div>
	);
};

export default Blog;
