'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedText, AnimatedCard } from '@src/components/AnimatedElements'

export function QuienEsSolware() {
	return (
		<div className="bg-gradient-to-br from-[#1e0c2f] via-[#2a1350] to-[#4b1c7a] w-screen h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
			<SlideTitle title="¿Quién es Solware Agency?" />

			<div className="max-w-6xl w-full space-y-8">
				<AnimatedText delay={0.2}>
					<p className="text-white/90 text-2xl text-center leading-relaxed mb-8">
						Solware es una <span className="text-white font-semibold">agencia de transformación digital venezolana</span> enfocada en el
						desarrollo de soluciones digitales a la medida para empresas B2B, con especialización en diseño web, automatización de procesos y
						desarrollo de aplicaciones web y móviles.
					</p>
				</AnimatedText>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
					<AnimatedCard delay={0.4} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
						<h3 className="text-[#3b82f6] text-3xl font-bold mb-4">Solware Agency</h3>
						<p className="text-white text-lg leading-relaxed">
							Unidad enfocada en el diseño y desarrollo de páginas web, automatización de procesos internos y soluciones personalizadas, con un
							fuerte énfasis en rapidez de ejecución, personalización y acompañamiento.
						</p>
					</AnimatedCard>

					<AnimatedCard delay={0.6} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
						<h3 className="text-[#16a34a] text-3xl font-bold mb-4">Solhub</h3>
						<p className="text-white/85 text-lg leading-relaxed">
							Un producto especializado en el sector salud. Una aplicación web para laboratorios y clínicas que permite gestionar historiales clínicos,
							órdenes de exámenes, datos del paciente y reportes automatizados.
						</p>
					</AnimatedCard>
				</div>
			</div>
		</div>
	)
}
