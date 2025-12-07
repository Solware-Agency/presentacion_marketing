'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedCard } from '@src/components/AnimatedElements'
import { LogoCorner } from '@src/components/LogoCorner'
import { Wrench, Rocket, TrendingUp } from 'lucide-react'

export function PlanAccion() {
	return (
		<div className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-full min-h-screen flex flex-col items-center justify-center p-8  relative">
			<LogoCorner />
			<SlideTitle title="Plan de Acción" />

			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
				<AnimatedCard delay={0.2} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#ecb424]/30">
					<div className="flex items-center gap-3 mb-4">
						<div className="bg-[#ecb424]/20 p-3 rounded-full">
							<Wrench className="w-8 h-8 text-[#ecb424]" />
						</div>
						<h3 className="text-[#ecb424] text-2xl font-bold">FASE 1</h3>
					</div>
					<h4 className="text-white text-xl font-bold mb-3">Hackeando el sistema</h4>
					<p className="text-white text-base leading-relaxed mb-4 font-bold">
						Solware se enfoca en dejar lista la base digital: web optimizada como hub de conversión, SEO básico con palabras clave priorizadas, lead
						magnets conectados a formularios y estructura mínima de email marketing.
					</p>
					<ul className="space-y-2">
						<li className="flex items-start gap-2">
							<span className="text-[#ecb424] mt-1">•</span>
							<span className="text-white/70 text-sm font-bold">Web optimizada + CTAs claros</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-[#ecb424] mt-1">•</span>
							<span className="text-white/70 text-sm font-bold">SEO básico configurado</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-[#ecb424] mt-1">•</span>
							<span className="text-white/70 text-sm font-bold">Lead magnets + formularios</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-[#ecb424] mt-1">•</span>
							<span className="text-white/70 text-sm font-bold">Ecosistema de canales alineado</span>
						</li>
					</ul>
				</AnimatedCard>

				<AnimatedCard delay={0.4} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#5d9ff0]/30">
					<div className="flex items-center gap-3 mb-4">
						<div className="bg-[#5d9ff0]/20 p-3 rounded-full">
							<Rocket className="w-8 h-8 text-[#5d9ff0]" />
						</div>
						<h3 className="text-[#5d9ff0] text-2xl font-bold">FASE 2</h3>
					</div>
					<h4 className="text-white text-xl font-bold mb-3">Activando motores</h4>
					<p className="text-white text-base leading-relaxed mb-4 font-bold">
						Se pone en marcha el sistema de contenidos y campañas para empezar a generar leads de forma constante. Publicación activa en redes,
						workflows de email y lanzamiento de campañas publicitarias.
					</p>
					<ul className="space-y-2">
						<li className="flex items-start gap-2">
							<span className="text-[#5d9ff0] mt-1">•</span>
							<span className="text-white/70 text-sm font-bold">Contenidos en todas las plataformas</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-[#5d9ff0] mt-1">•</span>
							<span className="text-white/70 text-sm font-bold">Workflows de email activos</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-[#5d9ff0] mt-1">•</span>
							<span className="text-white/70 text-sm font-bold">Campañas en Meta, Google y LinkedIn</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-[#5d9ff0] mt-1">•</span>
							<span className="text-white/70 text-sm font-bold">Medición de leads y conversiones</span>
						</li>
					</ul>
				</AnimatedCard>

				<AnimatedCard delay={0.6} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#3aa465]/30">
					<div className="flex items-center gap-3 mb-4">
						<div className="bg-[#3aa465]/20 p-3 rounded-full">
							<TrendingUp className="w-8 h-8 text-[#3aa465]" />
						</div>
						<h3 className="text-[#3aa465] text-2xl font-bold">FASE 3</h3>
					</div>
					<h4 className="text-white text-xl font-bold mb-3">Optimización en tiempo real</h4>
					<p className="text-white text-base leading-relaxed mb-4 font-bold">
						La prioridad es afinar y escalar lo que funciona. Análisis mensual de resultados, redistribución de presupuesto hacia campañas con mejor
						retorno y refinamiento continuo de estrategias.
					</p>
					<ul className="space-y-2">
						<li className="flex items-start gap-2">
							<span className="text-[#3aa465] mt-1">•</span>
							<span className="text-white/70 text-sm font-bold">Análisis mensual de rendimiento</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-[#3aa465] mt-1">•</span>
							<span className="text-white/70 text-sm font-bold">Profundización en SEO</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-[#3aa465] mt-1">•</span>
							<span className="text-white/70 text-sm font-bold">Ajuste de mensajes y segmentación</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-[#3aa465] mt-1">•</span>
							<span className="text-white/70 text-sm font-bold">Nuevas automatizaciones</span>
						</li>
					</ul>
				</AnimatedCard>
			</div>
		</div>
	)
}
