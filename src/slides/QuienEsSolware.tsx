'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedText, AnimatedCard } from '@src/components/AnimatedElements'

export function QuienEsSolware() {
	return (
		<div className="bg-gradient-to-br from-[#1e0c2f] via-[#2a1350] to-[#4b1c7a] w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 md:p-10 relative">
			<SlideTitle title="¿Quién es Solware Agency?" color="#4d84fa" />

			<div className="max-w-6xl w-full space-y-4 sm:space-y-6 md:space-y-8 px-4">
				<AnimatedText delay={0.2}>
					<p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl text-center text-justify leading-relaxed mb-4 sm:mb-6 md:mb-8 font-bold">
						Solware es una <span className="text-white font-semibold">agencia de transformación digital venezolana</span> enfocada en el
						desarrollo de soluciones digitales a la medida para empresas B2B, con especialización en diseño web, automatización de procesos y
						desarrollo de aplicaciones web y móviles.
					</p>
				</AnimatedText>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-12">
					<AnimatedCard delay={0.4} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20">
						<h3 className="text-[#3b82f6] text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Solware Agency</h3>
						<p className="text-white text-sm sm:text-base md:text-lg text-justify leading-relaxed font-bold">
							Unidad enfocada en el diseño y desarrollo de páginas web, automatización de procesos internos y soluciones personalizadas, con un
							fuerte énfasis en rapidez de ejecución, personalización y acompañamiento.
						</p>
					</AnimatedCard>

					<AnimatedCard delay={0.6} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20">
						<h3 className="text-[#16a34a] text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Solhub</h3>
						<p className="text-white text-sm sm:text-base md:text-lg text-justify leading-relaxed font-bold">
							Un producto especializado en el sector salud. Una aplicación web para laboratorios y clínicas que permite gestionar historiales clínicos,
							órdenes de exámenes, datos del paciente y reportes automatizados.
						</p>
					</AnimatedCard>
				</div>
			</div>
		</div>
	)
}
