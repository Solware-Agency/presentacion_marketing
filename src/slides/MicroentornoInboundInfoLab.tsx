'use client'

import { AnimatedCard } from '@src/components/AnimatedElements'
import { Instagram, Linkedin, Facebook, Globe } from 'lucide-react'

export function MicroentornoInboundInfoLab() {
	return (
		<div className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-screen h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
			<header className="w-full max-w-6xl flex items-start justify-between mb-8">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold text-white">Análisis competitivo</h1>
					<h2 className="text-2xl font-semibold text-white/80 mt-2">Microentorno</h2>
				</div>
				<div className="text-right">
					<p className="text-2xl font-semibold text-[#dbeafe]">Solware</p>
				</div>
			</header>

			<div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch justify-center">
				<AnimatedCard
					delay={0.2}
					className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition duration-300 ease-in-out hover:scale-105 hover:border-[#3b82f6]/50 focus-within:ring-2 focus-within:ring-[#3b82f6]"
				>
					<h3 className="text-2xl font-semibold text-white mb-4">Inbound Group</h3>
					<p className="text-white/90 text-lg leading-relaxed mb-6">
						Agencia integral de marketing de contenidos y SEO (modelo Inbound). Enfoque en atracción orgánica a largo plazo y embudo
						digital automatizado; se presentan como socio estratégico para nutrir leads calificados sin depender únicamente de pauta
						tradicional.
					</p>
					<div className="flex items-center gap-3">
						<a
							href="https://instagram.com/inboundgroup"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram de Inbound Group"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Instagram className="w-6 h-6" />
						</a>
						<a
							href="https://inboundgroup.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Sitio web de Inbound Group"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Globe className="w-6 h-6" />
						</a>
						<a
							href="https://linkedin.com/company/inbound-group"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn de Inbound Group"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Linkedin className="w-6 h-6" />
						</a>
						<a
							href="https://facebook.com/inboundgroup"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook de Inbound Group"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Facebook className="w-6 h-6" />
						</a>
					</div>
				</AnimatedCard>

				<AnimatedCard
					delay={0.4}
					className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition duration-300 ease-in-out hover:scale-105 hover:border-[#3b82f6]/50 focus-within:ring-2 focus-within:ring-[#3b82f6]"
				>
					<h3 className="text-2xl font-semibold text-white mb-4">InfoLab</h3>
					<p className="text-white/90 text-lg leading-relaxed mb-6">
						Sistema de gestión integral de laboratorios con mayor trayectoria en Venezuela. Enfoque en funcionalidad completa y seguridad
						operativa, desde recepción hasta emisión de resultados; comunicación de solución histórica y estable para instituciones que
						priorizan robustez sobre innovación.
					</p>
					<div className="flex items-center gap-3">
						<a
							href="https://instagram.com/infolab"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram de InfoLab"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Instagram className="w-6 h-6" />
						</a>
						<a
							href="https://infolab.com.ve"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Sitio web de InfoLab"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Globe className="w-6 h-6" />
						</a>
						<a
							href="https://facebook.com/infolab"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook de InfoLab"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Facebook className="w-6 h-6" />
						</a>
					</div>
				</AnimatedCard>
			</div>
		</div>
	)
}
