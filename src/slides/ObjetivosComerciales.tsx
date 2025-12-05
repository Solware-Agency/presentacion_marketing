'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedCard } from '@src/components/AnimatedElements'
import { LogoCorner } from '@src/components/LogoCorner'
import { Target, TrendingUp } from 'lucide-react'

export function ObjetivosComerciales() {
	return (
		<div className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-screen h-screen flex flex-col items-center justify-center p-8 overflow-hidden relative">
			<LogoCorner />
			<SlideTitle title="Objetivos Comerciales" />

			<div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
				<AnimatedCard delay={0.2} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#3b82f6]/30">
					<div className="flex items-center gap-4 mb-6">
						<div className="bg-[#3b82f6]/20 p-3 rounded-full">
							<Target className="w-10 h-10 text-[#3b82f6]" />
						</div>
						<h3 className="text-[#3b82f6] text-3xl font-bold">Solware</h3>
					</div>
					<p className="text-white/90 text-xl leading-relaxed font-bold">
						Posicionarse como una marca referente en Venezuela en servicios digitales y tecnológicos para el{' '}
						<span className="font-bold text-white">31/12/2026</span>, aumentando en un{' '}
						<span className="font-bold text-[#3b82f6]">200%</span> su visibilidad en Google.
					</p>
				</AnimatedCard>

				<AnimatedCard delay={0.4} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#16a34a]/30">
					<div className="flex items-center gap-4 mb-6">
						<div className="bg-[#16a34a]/20 p-3 rounded-full">
							<TrendingUp className="w-10 h-10 text-[#16a34a]" />
						</div>
						<h3 className="text-[#16a34a] text-3xl font-bold">Solhub</h3>
					</div>
					<p className="text-white/90 text-xl leading-relaxed font-bold">
						Aumentar la cartera de clientes de <span className="font-bold text-white">4 a 10</span> laboratorios/clínicas activas en Venezuela para
						el <span className="font-bold text-white">31/12/2026</span>, mediante una estrategia digital y comercial enfocada en generación de leads
						calificados.
					</p>
				</AnimatedCard>
			</div>
		</div>
	)
}
