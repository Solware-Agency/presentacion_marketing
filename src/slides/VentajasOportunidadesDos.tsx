'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedText } from '@src/components/AnimatedElements'
import { LogoCorner } from '@src/components/LogoCorner'

export function VentajasOportunidadesDos() {
	return (
		<div className="bg-gradient-to-br from-[#e0e7ff] via-[#ddd6fe] to-[#fce7f3] w-full min-h-screen flex flex-col items-center justify-center p-8  relative">
			<LogoCorner />
			<SlideTitle title="Ventajas y Oportunidades Competitivas" />

			<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
				<AnimatedText delay={0.2}>
					<div className="bg-white rounded-2xl p-8 shadow-lg border border-[#3b82f6]/20">
						<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 px-2">Oportunidades competitivas</h3>
						<ul className="space-y-4">
							<li className="flex items-start">
								<span className="text-[#3b82f6] font-bold mr-3 text-xl">•</span>
								<p className="text-gray-700 text-lg leading-relaxed">
									Muchos laboratorios están listos para migrar, pero temen el cambio, necesitan claridad, confianza y soporte.
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-[#3b82f6] font-bold mr-3 text-xl">•</span>
								<p className="text-gray-700 text-lg leading-relaxed">
									Pocos actores comunican bien cómo sus sistemas generan un retorno operativo tangible.
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-[#3b82f6] font-bold mr-3 text-xl">•</span>
								<p className="text-gray-700 text-lg leading-relaxed">Pocos competidores en un mercado gigantesco.</p>
							</li>
						</ul>
					</div>
				</AnimatedText>

				<AnimatedText delay={0.4}>
					<div className="bg-white rounded-2xl p-8 shadow-lg border border-[#16a34a]/20">
						<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 px-2">Ventajas competitivas</h3>
						<ul className="space-y-4">
							<li className="flex items-start">
								<span className="text-[#16a34a] font-bold mr-3 text-xl">•</span>
								<p className="text-gray-700 text-lg leading-relaxed">
									Tecnología actualizada, escalable y adaptable al contexto venezolano.
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-[#16a34a] font-bold mr-3 text-xl">•</span>
								<p className="text-gray-700 text-lg leading-relaxed">
									Modelo de acompañamiento cercano y estratégico, no solo entrega técnica.
								</p>
							</li>
						</ul>
					</div>
				</AnimatedText>
			</div>
		</div>
	)
}
