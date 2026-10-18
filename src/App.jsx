import { useState } from 'react'
import inicioImg from './assets/inicio_img.png'
import relogio from './assets/relogio.png'
import feedbacks from './assets/feedbacks.png'
import mapa from './assets/mapa.png'
import ins from './assets/ins.png'
import fac from './assets/fac.png'
import link from './assets/link.png'
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
					<a href="#feedbacks">Feedbacks</a>	
					<a href="#contato">Contato</a>
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
						<img src={inicioImg} alt="" />
					</div>
				</section>

				<section id='servicos'>
					<div>
						<h1>Nossos Serviços.</h1>
						<span>Quantidade que trazem toda diferença para o paciente.</span>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</section>

				<section id='horario' >
					<div>
						<h1>Horário de Atendimento.</h1>
						<span>Estamos disponiveis para agendamento de consultas e visitas.</span>
					</div>
					<div>
						<div>
							<img src={relogio} alt="" />
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

				<section id='feedbacks'>
					<div>
						<h1>Feedbacks</h1>
						<span>Quem conhece, confia.</span>

						<ul>
							<li>
								<span>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat fugit atque? Accusantium explicabo quasi aliquid consequatur. Corporis molestias quaerat iusto incidunt id assumenda, repellendus recusandae quod, vero fugiat esse."</span>
								<span>- Cliente 1,2026</span>
							</li>
							<li>
								<span>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat fugit atque? Accusantium explicabo quasi aliquid consequatur. Corporis molestias quaerat iusto incidunt id assumenda, repellendus recusandae quod, vero fugiat esse."</span>
								<span>- Cliente 2,2026</span>
							</li>
							<li>
								<span>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat fugit atque? Accusantium explicabo quasi aliquid consequatur. Corporis molestias quaerat iusto incidunt id assumenda, repellendus recusandae quod, vero fugiat esse."</span>
								<span>- Cliente 3,2025</span>
							</li>
						</ul>
					</div>

					<div>
						<img src={feedbacks} alt="" />
					</div>
				</section>

				<section id='contato'>
						<div>
							<span>Visite-nos</span>
							<span>ENDEREÇO: Rua, número Bairro</span>
							<span>CEP: 40028922</span>
						</div>
						<div>
							<img src={mapa} alt="" />
						</div>
						<div>
							<div>
								<span>Formulário de contato</span>
								<span>Ficou com alguma dúvida? Converse diretamente conosco!</span>
							</div>
							<form action="tet">
								<div>
									<label htmlFor="">Nome:</label>
									<input type="text" />
								</div>
								<div>
									<label htmlFor="">Email:</label>
									<input type="text" />
								</div>
								<div>
									<label htmlFor="">Obs:</label>
									<input type="text" />
								</div>
							</form>
							<div>
								<button>ENVIAR</button>
							</div>
						</div>
				</section>

				<section id='rodape'>
					<div>
						<h1>EMPRESA:</h1>
						<ul>
							<li>
								<img src={fac} alt="" />
								<span><a href="#rodape">Facebook</a></span>
							</li>
							<li>
								<img src={ins} alt="" />
								<span><a href="#rodape">Instagram</a></span>
							</li>
							<li>
								<img src={link} alt="" />
								<span><a href="#rodape">LinkedIn</a></span>
							</li>
						</ul>
					</div>
					<div>
						<h1>ACESSO RÁPIDO:</h1>
						<ul>
							<li><a href="#inicio">Início</a></li>
							<li ><a href="#servicos">Nossos Serviços</a></li>
							<li><a href="#horario">Horários</a></li>
							<li><a href="#feedbacks">Feedbacks</a></li>
							<li><a href="#contato">Contato</a></li>
						</ul>
					</div>
					<div>
						<h1>SERVIÇOS:</h1>
						<ul>
							<li>Serviço 1</li>
							<li>Serviço 2</li>
							<li>Serviço 3</li>
						</ul>
					</div>
					<div>
						<h1>CONTATO:</h1>
						<ul>
							<li>Rua, numero</li>
							<li>Bairro</li>
							<li>+55 (01)234567890</li>
							<li>email@email.com</li>
						</ul>
					</div>
				</section>
			</main>
		</>
	)
}

export default App
