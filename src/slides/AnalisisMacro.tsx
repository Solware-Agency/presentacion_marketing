'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedCard } from '@src/components/AnimatedElements'
import { Laptop, Lightbulb, Code, AlertTriangle } from 'lucide-react'

export function AnalisisMacro() {
	return (
		<div className="bg-gradient-to-br from-[#e0e7ff] via-[#ddd6fe] to-[#fce7f3] w-full min-h-screen flex flex-col items-center justify-center p-8  relative">
			<SlideTitle title="Análisis Competitivo" subtitle="Macroentorno" color="#4d84fa" />

			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
				<AnimatedCard delay={0.2} className="bg-[#e0e7ff] rounded-2xl p-6 border border-[#3b82f6]/20">
					<div className="flex justify-center mb-4">
						<div className="bg-white p-4 rounded-full shadow-sm">
							<Laptop className="w-10 h-10 text-[#5d9ff0]" />
						</div>
					</div>
					<h3 className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-3 text-center px-2">Rezago tecnológico generalizado</h3>
					<p className="text-gray-700 text-base text-justify leading-relaxed">
					En pequeñas y medianas empresas, resultando en una pérdida significativa de competitividad y productividad. Este atraso se debe a la limitada inversión en infraestructura digital.
					</p>
				</AnimatedCard>

				<AnimatedCard delay={0.4} className="bg-[#fef3c7] rounded-2xl p-6 border border-[#ecb424]/20">
					<div className="flex justify-center mb-4">
						<div className="bg-white p-4 rounded-full shadow-sm">
							<Lightbulb className="w-10 h-10 text-[#ecb424]" />
						</div>
					</div>
					<h3 className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-3 text-center px-2">Alta informalidad operativa</h3>
					<p className="text-gray-700 text-base text-justify leading-relaxed">
						Y escasa cultura digital en sectores críticos.
					</p>
				</AnimatedCard>

				<AnimatedCard delay={0.6} className="bg-[#dbeafe] rounded-2xl p-6 border border-[#3b82f6]/20">
					<div className="flex justify-center mb-4">
						<div className="bg-white p-4 rounded-full shadow-sm">
							<Code className="w-10 h-10 text-[#3b82f6]" />
						</div>
					</div>
					<h3 className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-3 text-center px-2">Creciente apertura hacia soluciones tecnológicas</h3>
					<p className="text-gray-700 text-base text-justify leading-relaxed">
						Con foco en eficiencia, producto de la necesidad urgente de reducir costos, errores y tiempos de operación.
					</p>
				</AnimatedCard>

				<AnimatedCard delay={0.8} className="bg-[#fef2f2] rounded-2xl p-6 border border-red-300">
					<div className="flex justify-center mb-4">
						<div className="bg-white p-4 rounded-full shadow-sm">
							<AlertTriangle className="w-10 h-10 text-red-500" />
						</div>
					</div>
					<h3 className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-3 text-center px-2">Limitaciones estructurales</h3>
					<p className="text-gray-700 text-base text-justify leading-relaxed">
						(Conectividad, acceso a plataformas de pago, capacidad de inversión), pero también un ecosistema emergente de emprendedores y decisores
						dispuestos a experimentar con nuevas herramientas.
					</p>
				</AnimatedCard>
			</div>
		</div>
	)
}
