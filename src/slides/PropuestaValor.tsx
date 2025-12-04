'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedCard } from '@src/components/AnimatedElements'
import { Zap, Sparkles, Users } from 'lucide-react'

export function PropuestaValor() {
	return (
		<div className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-screen h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
			<SlideTitle title="Propuesta de Valor" gradientColor="from-[#3b82f6] to-[#16a34a]" />

			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
				<AnimatedCard delay={0.2} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#3b82f6]/30 hover:border-[#3b82f6]/50 transition">
					<div className="flex justify-center mb-4">
						<div className="bg-[#ecb424]/20 p-4 rounded-full">
							<Zap className="w-12 h-12 text-[#ecb424]" />
						</div>
					</div>
					<h3 className="text-white text-2xl font-bold mb-3 text-center">Rapidez y eficiencia comprobada</h3>
					<p className="text-[#dbeafe] text-lg leading-relaxed text-center">
						Optimiza procesos y flujos de trabajo, lo que se traduce en mayor agilidad operativa y mejor rendimiento del equipo.
					</p>
				</AnimatedCard>

				<AnimatedCard delay={0.4} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#3b82f6]/30 hover:border-[#3b82f6]/50 transition">
					<div className="flex justify-center mb-4">
						<div className="bg-[#5d9ff0]/20 p-4 rounded-full">
							<Sparkles className="w-12 h-12 text-[#5d9ff0]" />
						</div>
					</div>
					<h3 className="text-white text-2xl font-bold mb-3 text-center">Soluciones auténticas y personalizadas</h3>
					<p className="text-[#dbeafe] text-lg leading-relaxed text-center">
						Desarrolla sitios web y herramientas digitales diseñadas a la medida de cada negocio, con identidad propia y enfocadas en los objetivos
						reales de la empresa.
					</p>
				</AnimatedCard>

				<AnimatedCard delay={0.6} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#3b82f6]/30 hover:border-[#3b82f6]/50 transition">
					<div className="flex justify-center mb-4">
						<div className="bg-[#3aa465]/20 p-4 rounded-full">
							<Users className="w-12 h-12 text-[#3aa465]" />
						</div>
					</div>
					<h3 className="text-white text-2xl font-bold mb-3 text-center">Acompañamiento integral</h3>
					<p className="text-[#dbeafe] text-lg leading-relaxed text-center">
						No solo implementa tecnología, sino que asesora y educa al cliente en todo el proceso, para que entienda, aproveche y escale sus
						soluciones digitales con seguridad y criterio.
					</p>
				</AnimatedCard>
			</div>
		</div>
	)
}
