'use client'

import { AnimatedCard } from '@src/components/AnimatedElements'
import { Instagram, Linkedin, Facebook, Globe } from 'lucide-react'

export function MicroentornoInboundInfoLab() {
	return (
		<div className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-full min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8  relative">
			<div className="text-center w-full px-4 pt-20 sm:pt-24 md:pt-28 mb-6 sm:mb-8">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#41e2b8' }}>Análisis competitivo</h1>
				<div className="w-40 sm:w-56 md:w-72 h-1.5 sm:h-2 md:h-2.5 mx-auto rounded-full mb-4" style={{ background: 'linear-gradient(to right, #3b82f6, #a855f7, #ec4899)', boxShadow: '0 0 15px rgba(59, 130, 246, 0.7), 0 0 30px rgba(168, 85, 247, 0.5), 0 0 45px rgba(236, 72, 153, 0.3)' }}></div>
				<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4" style={{ color: '#41e2b8' }}>Microentorno</h2>
			</div>

			<div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch justify-center px-4">
				<AnimatedCard
					delay={0.2}
					className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-5 md:p-6 transition duration-300 ease-in-out hover:scale-105 hover:border-[#3b82f6]/50 focus-within:ring-2 focus-within:ring-[#3b82f6]"
				>
					<h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Inbound Group</h3>
					<p className="text-white/90 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-bold">
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
					className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-5 md:p-6 transition duration-300 ease-in-out hover:scale-105 hover:border-[#3b82f6]/50 focus-within:ring-2 focus-within:ring-[#3b82f6]"
				>
					<h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">InfoLab</h3>
					<p className="text-white/90 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-bold">
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
