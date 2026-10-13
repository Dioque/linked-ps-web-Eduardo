import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<header id='cabecalho'>
				<span id='cabecalho-logo'>Nome/Logo</span>

				<div id='cabecalho-links'>
					<a href="#inicio">Início</a>
					<a href="#servicos">Serviços</a>
					<a href="#horario">Horários</a>
					<a href="#">Feedbacks</a>	
					<a href="#">Contato</a>
				</div>
			</header>

			<main>
				<section id='inicio'>
					<div>
						<span>Consultório de psicologia e psicoterapia.</span>
						<h1>Lorem Ipsum</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quam rerum quod fugit distinctio facilis optio quibusdam libero ab debitis consequuntur, ipsa itaque error fugiat laboriosam velit eligendi hic animi.</p>
						<div>
							<button>
								AGENDAR
							</button>
							<button>
								SAIBA MAIS
							</button>
						</div>
					</div>

					<div>
						<img src="" alt="" />
					</div>
				</section>

				<section id='servicos'>
					<div>
						<h1>Nossos Serviços.</h1>
						<span>Quantidade que trazem toda diferença para o paciente.</span>
					</div>
					<div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam velit quis repellendus expedita fuga voluptatibus tempora itaque animi dignissimos nisi soluta quod, pariatur saepe veritatis aperiam dolores autem aut iusto.</p>
					</div>
				</section>

				<section id='horario'>
					<div>
						<h1>Horário de Atendimento.</h1>
						<span>Estamos disponiveis para agendamento de consultas e visitas.</span>
					</div>
					<div>
						<div>
							<img src="" alt="" />
						</div>
						<div>
							<div>
								<span>Segunda - Sexta</span>
								<span>08:00 - 17:00</span>
							</div>
							<div>
								<span>Sábado</span>
								<span>10:00 - 14:00</span>
							</div>
							<div>
								<span>Domingo</span>
								<span>Fechado</span>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default App
