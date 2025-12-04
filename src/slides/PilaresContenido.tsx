'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedCard } from '@src/components/AnimatedElements'
import { Package, BookOpen, MessageSquare, Heart } from 'lucide-react'

export function PilaresContenido() {
	return (
		<div className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-screen h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
			<SlideTitle title="Pilares de Contenido" gradientColor="from-[#ecb424] to-[#ce609c]" />

			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
				<AnimatedCard delay={0.2} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#ecb424]/30">
					<div className="flex justify-center mb-4">
						<div className="bg-[#ecb424]/20 p-4 rounded-full">
							<Package className="w-10 h-10 text-[#ecb424]" />
						</div>
					</div>
					<h3 className="text-white text-xl font-bold text-center mb-2">Soluciones en producción</h3>
					<p className="text-[#ecb424] text-sm font-semibold text-center mb-3">COMERCIAL - 20%</p>
					<p className="text-white/80 text-sm leading-relaxed text-center">
						Servicios que ofrece Solware: páginas web, automatizaciones, integraciones y soluciones con IA. Explicando qué hace la agencia y los
						resultados concretos.
					</p>
				</AnimatedCard>

				<AnimatedCard delay={0.4} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#5d9ff0]/30">
					<div className="flex justify-center mb-4">
						<div className="bg-[#5d9ff0]/20 p-4 rounded-full">
							<BookOpen className="w-10 h-10 text-[#5d9ff0]" />
						</div>
					</div>
					<h3 className="text-white text-xl font-bold text-center mb-2">Tech para decisores</h3>
					<p className="text-[#5d9ff0] text-sm font-semibold text-center mb-3">INFORMATIVO - 35%</p>
					<p className="text-white/80 text-sm leading-relaxed text-center">
						Contenido educativo que traduce tecnología al idioma de los clientes. Guías, explicaciones simples y contexto sobre digitalización,
						eficiencia y automatización.
					</p>
				</AnimatedCard>

				<AnimatedCard delay={0.6} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#ce609c]/30">
					<div className="flex justify-center mb-4">
						<div className="bg-[#ce609c]/20 p-4 rounded-full">
							<MessageSquare className="w-10 h-10 text-[#ce609c]" />
						</div>
					</div>
					<h3 className="text-white text-xl font-bold text-center mb-2">Casos de la vida real</h3>
					<p className="text-[#ce609c] text-sm font-semibold text-center mb-3">TESTIMONIAL - 25%</p>
					<p className="text-white/80 text-sm leading-relaxed text-center">
						Muestra la tecnología en acción: testimonios de clientes, antes y después, aprendizajes de proyectos y experiencias del equipo con datos
						reales.
					</p>
				</AnimatedCard>

				<AnimatedCard delay={0.8} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#16a34a]/30">
					<div className="flex justify-center mb-4">
						<div className="bg-[#16a34a]/20 p-4 rounded-full">
							<Heart className="w-10 h-10 text-[#16a34a]" />
						</div>
					</div>
					<h3 className="text-white text-xl font-bold text-center mb-2">Solhub</h3>
					<p className="text-[#16a34a] text-sm font-semibold text-center mb-3">SALUD - 20%</p>
					<p className="text-white/80 text-sm leading-relaxed text-center">
						Enfocado en la propuesta de valor de Solhub para el sector salud: plataforma que lleva laboratorios y clínicas de procesos manuales a
						operación digital ordenada.
					</p>
				</AnimatedCard>
			</div>
		</div>
	)
}
