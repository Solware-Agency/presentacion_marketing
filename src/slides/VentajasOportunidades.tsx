'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedText } from '@src/components/AnimatedElements'

export function VentajasOportunidades() {
	return (
		<div className="bg-gradient-to-br from-[#e0e7ff] via-[#ddd6fe] to-[#fce7f3] w-full min-h-screen flex flex-col items-center justify-center p-8  relative">
			<SlideTitle title="Ventajas y Oportunidades Competitivas" />

			<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
				<AnimatedText delay={0.2}>
					<div className="bg-white rounded-2xl p-8 shadow-lg border border-[#3b82f6]/20">
						<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 px-2">Oportunidades competitivas</h3>
						<ul className="space-y-4">
							<li className="flex items-start">
								<span className="text-[#3b82f6] font-bold mr-3 text-xl">•</span>
								<p className="text-gray-700 text-lg leading-relaxed">
									Crear una oferta media entre "soluciones robóticas sin alma" (Morna Tech) y entregas digitales poco personalizadas (Avila Tek).
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-[#3b82f6] font-bold mr-3 text-xl">•</span>
								<p className="text-gray-700 text-lg leading-relaxed">
									Capitalizar la necesidad de empresas medianas que quieren digitalizarse, <span className="font-bold">pero no entienden el proceso.</span>
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-[#3b82f6] font-bold mr-3 text-xl">•</span>
								<p className="text-gray-700 text-lg leading-relaxed">
									<span className="font-bold">Resaltar los rápidos tiempos de entrega</span> y la eficiencia en los trabajos realizados por la marca.
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-[#3b82f6] font-bold mr-3 text-xl">•</span>
								<p className="text-gray-700 text-lg leading-relaxed">
									Apoyarse en <span className="font-bold">storytelling y casos de éxito reales</span> como motor de posicionamiento.
								</p>
							</li>
						</ul>
					</div>
				</AnimatedText>

				<AnimatedText delay={0.4}>
					<div className="bg-white rounded-2xl p-8 shadow-lg border border-[#16a34a]/20">
						<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 px-2">Ventajas competitivas</h3>
						<p className="text-gray-700 text-lg mb-4">
							Solware se ubica en la zona de <span className="font-bold text-[#16a34a]">"ventaja competitiva"</span> cuando:
						</p>
						<ul className="space-y-4">
							<li className="flex items-start">
								<span className="text-[#16a34a] font-bold mr-3 text-xl">•</span>
								<p className="text-gray-700 text-lg leading-relaxed">
									Atiende cuentas que <span className="font-bold">valoran rapidez, acompañamiento y sencillez</span> sobre profundidad técnica.
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-[#16a34a] font-bold mr-3 text-xl">•</span>
								<p className="text-gray-700 text-lg leading-relaxed">
									<span className="font-bold">Traduce necesidades de negocio a lenguaje simple</span>, sin excesos técnicos ni promesas de IA sin justificación.
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-[#16a34a] font-bold mr-3 text-xl">•</span>
								<p className="text-gray-700 text-lg leading-relaxed">
									Se posiciona como <span className="font-bold">solución humana, cercana y efectiva</span> para empresas sin digitalización previa.
								</p>
							</li>
						</ul>
					</div>
				</AnimatedText>
			</div>
		</div>
	)
}
