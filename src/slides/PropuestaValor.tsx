'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedCard } from '@src/components/AnimatedElements'
import { Zap, Sparkles, Users } from 'lucide-react'

export function PropuestaValor() {
	return (
		<div className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8  relative">
			<SlideTitle title="Propuesta de Valor" />

			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-6 md:mt-8 px-4">
				<AnimatedCard delay={0.2} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-[#3b82f6]/30 hover:border-[#3b82f6]/50 transition">
					<div className="flex justify-center mb-3 sm:mb-4">
						<div className="bg-[#ecb424]/20 p-3 sm:p-4 rounded-full">
							<Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#ecb424]" />
						</div>
					</div>
					<h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-center">Rapidez y eficiencia comprobada</h3>
					<p className="text-[#dbeafe] text-sm sm:text-base md:text-lg leading-relaxed text-center font-bold">
						Optimiza procesos y flujos de trabajo, lo que se traduce en mayor agilidad operativa y mejor rendimiento del equipo.
					</p>
				</AnimatedCard>

				<AnimatedCard delay={0.4} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-[#3b82f6]/30 hover:border-[#3b82f6]/50 transition">
					<div className="flex justify-center mb-3 sm:mb-4">
						<div className="bg-[#5d9ff0]/20 p-3 sm:p-4 rounded-full">
							<Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#5d9ff0]" />
						</div>
					</div>
					<h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-center">Soluciones auténticas y personalizadas</h3>
					<p className="text-[#dbeafe] text-sm sm:text-base md:text-lg leading-relaxed text-center font-bold">
						Desarrolla sitios web y herramientas digitales diseñadas a la medida de cada negocio, con identidad propia y enfocadas en los objetivos
						reales de la empresa.
					</p>
				</AnimatedCard>

				<AnimatedCard delay={0.6} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-[#3b82f6]/30 hover:border-[#3b82f6]/50 transition">
					<div className="flex justify-center mb-3 sm:mb-4">
						<div className="bg-[#3aa465]/20 p-3 sm:p-4 rounded-full">
							<Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#3aa465]" />
						</div>
					</div>
					<h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-center">Acompañamiento integral</h3>
					<p className="text-[#dbeafe] text-sm sm:text-base md:text-lg leading-relaxed text-center font-bold">
						No solo implementa tecnología, sino que asesora y educa al cliente en todo el proceso, para que entienda, aproveche y escale sus
						soluciones digitales con seguridad y criterio.
					</p>
				</AnimatedCard>
			</div>
		</div>
	)
}
