'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedCard } from '@src/components/AnimatedElements'
import { User, Briefcase, MapPin } from 'lucide-react'

export function BuyerPersonas() {
	return (
		<div className="bg-white w-screen h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
			<SlideTitle title="Buyer Personas" gradientColor="from-[#3b82f6] to-[#ce609c]" darkBackground={false} />

			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
				<AnimatedCard delay={0.2} className="bg-gradient-to-br from-[#dbeafe] to-[#e0e7ff] rounded-2xl p-6 shadow-lg">
					<div className="flex items-center gap-3 mb-4">
						<User className="w-8 h-8 text-[#3b82f6]" />
						<h3 className="text-2xl font-bold text-gray-900">Carlos Confianza</h3>
					</div>
					<div className="space-y-2 mb-4 text-gray-700">
						<p className="flex items-center gap-2">
							<Briefcase className="w-4 h-4" />
							<span className="text-sm">Masculino, 40-50 años</span>
						</p>
						<p className="flex items-center gap-2">
							<MapPin className="w-4 h-4" />
							<span className="text-sm">Venezuela</span>
						</p>
						<p className="text-sm font-semibold">Empresa familiar industrial o B2B</p>
					</div>
					<div className="space-y-3">
						<div>
							<h4 className="font-bold text-sm text-gray-900 mb-1">Motivadores:</h4>
							<p className="text-sm text-gray-700">Credibilidad, seguridad y formalidad. Busca verse legítimo ante bancos y clientes.</p>
						</div>
						<div>
							<h4 className="font-bold text-sm text-gray-900 mb-1">Inhibidores:</h4>
							<p className="text-sm text-gray-700">Desconfianza, incertidumbre, complejidad técnica.</p>
						</div>
					</div>
				</AnimatedCard>

				<AnimatedCard delay={0.4} className="bg-gradient-to-br from-[#fce7f3] to-[#fbcfe8] rounded-2xl p-6 shadow-lg">
					<div className="flex items-center gap-3 mb-4">
						<User className="w-8 h-8 text-[#ce609c]" />
						<h3 className="text-2xl font-bold text-gray-900">Valeria Ventas</h3>
					</div>
					<div className="space-y-2 mb-4 text-gray-700">
						<p className="flex items-center gap-2">
							<Briefcase className="w-4 h-4" />
							<span className="text-sm">Femenino, 30-45 años</span>
						</p>
						<p className="flex items-center gap-2">
							<MapPin className="w-4 h-4" />
							<span className="text-sm">Miami, EE. UU.</span>
						</p>
						<p className="text-sm font-semibold">Servicios o educación con foco en captación</p>
					</div>
					<div className="space-y-3">
						<div>
							<h4 className="font-bold text-sm text-gray-900 mb-1">Motivadores:</h4>
							<p className="text-sm text-gray-700">Crecimiento, conversión, profesionalismo. Web que genere resultados medibles.</p>
						</div>
						<div>
							<h4 className="font-bold text-sm text-gray-900 mb-1">Inhibidores:</h4>
							<p className="text-sm text-gray-700">Lentitud, falta de estrategia, resultados débiles.</p>
						</div>
					</div>
				</AnimatedCard>

				<AnimatedCard delay={0.6} className="bg-gradient-to-br from-[#d1fae5] to-[#a7f3d0] rounded-2xl p-6 shadow-lg">
					<div className="flex items-center gap-3 mb-4">
						<User className="w-8 h-8 text-[#16a34a]" />
						<h3 className="text-2xl font-bold text-gray-900">Dr. Rafael Racionaliza</h3>
					</div>
					<div className="space-y-2 mb-4 text-gray-700">
						<p className="flex items-center gap-2">
							<Briefcase className="w-4 h-4" />
							<span className="text-sm">Masculino, 30-45 años</span>
						</p>
						<p className="flex items-center gap-2">
							<MapPin className="w-4 h-4" />
							<span className="text-sm">Caracas</span>
						</p>
						<p className="text-sm font-semibold">Dueño, director médico o gerente de laboratorio/clínica</p>
					</div>
					<div className="space-y-3">
						<div>
							<h4 className="font-bold text-sm text-gray-900 mb-1">Motivadores:</h4>
							<p className="text-sm text-gray-700">Eficiencia, control, prestigio. Reducir caos operativo y elevar percepción.</p>
						</div>
						<div>
							<h4 className="font-bold text-sm text-gray-900 mb-1">Inhibidores:</h4>
							<p className="text-sm text-gray-700">Costo, escepticismo, resistencia al cambio.</p>
						</div>
					</div>
				</AnimatedCard>
			</div>
		</div>
	)
}
