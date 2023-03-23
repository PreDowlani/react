import './App.css';
import Usuarios from './components/Usuarios';
import Blog from './components/Blog';

function App() {
	const mensajes = [
		{
			id: 1,
			mensaje: 'Hoy he aprendido a desprogramar. No es tarea fácil',
			autor: 'Macana',
			fecha: '21/04/2022',
		},
		{
			id: 2,
			mensaje:
				'En programación, lo único seguro es que el lenguaje que hoy aprendas te servirá para el futuro. Un futuro sin ese lenguaje, probablemente',
			autor: 'Pinocho Waltz',
			fecha: '11/05/2022',
		},
		{
			id: 3,
			mensaje: 'La esencia de la programación es saber programar',
			autor: 'Cobol Pro',
			fecha: '13/06/2022',
		},
		{
			id: 4,
			mensaje: 'Cuando haces React ya no hay stap',
			autor: 'React_oneLover',
			fecha: '15/10/2022',
		},
	];

	const usuarios = [
		{
			id: 1,
			nombre: 'Macana',
			email: 'macana@neverland.com',
			password: 'ws9e78rf',
		},
		{
			id: 2,
			nombre: 'Pinocho Waltz',
			email: 'piwaltz@neverland.com',
			password: 'sd798ssdf',
		},
		{
			id: 3,
			nombre: 'Cobol Pro',
			email: 'cobpro@neverland.com',
			password: 'der45&%',
		},
		{
			id: 4,
			nombre: 'React_oneLover',
			email: 'reactonelover@neverland.com',
			password: 'fgh(&/%345',
		},
	];

	let hayMensajesNuevos = false;
	const aleatorio = Math.floor(Math.random() * 2);
	aleatorio === 1 ? (hayMensajesNuevos = true) : (hayMensajesNuevos = false);

	return (
		<div className='App'>
			<Usuarios usuarios={usuarios} />
			{hayMensajesNuevos ? (
				<Blog key={mensajes.id} mensajes={mensajes} />
			) : (
				<h1>No hay mensajes nuevos</h1>
			)}
		</div>
	);
}

export default App;
