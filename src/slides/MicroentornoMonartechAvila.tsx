'use client'

import { AnimatedCard } from '@src/components/AnimatedElements'
import { Instagram, Linkedin, Youtube, Facebook, Globe } from 'lucide-react'

export function MicroentornoMonartechAvila() {
	return (
		<div className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-full min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8  relative">
			<div className="text-center w-full px-4 pt-20 sm:pt-24 md:pt-28 mb-6 sm:mb-8">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#4d84fa' }}>Análisis competitivo</h1>
				<div className="w-40 sm:w-56 md:w-72 h-2 sm:h-2 md:h-2.5 mx-auto rounded-full mb-4 bg-gradient-to-r from-[#3b82f6] via-[#bc81f8] to-[#ce609c] shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_20px_rgba(188,129,248,0.3),0_0_30px_rgba(206,96,156,0.2)]"></div>
				<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4" style={{ color: '#4d84fa' }}>Microentorno</h2>
			</div>

			<div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch justify-center px-4">
				<AnimatedCard
					delay={0.2}
					className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-5 md:p-6 transition duration-300 ease-in-out hover:scale-105 hover:border-[#3b82f6]/50 focus-within:ring-2 focus-within:ring-[#3b82f6]"
				>
					<h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Monartech</h3>
					<p className="text-white/90 text-base sm:text-lg text-justify leading-relaxed mb-4 sm:mb-6 font-bold">
						Soluciones impulsadas por IA para negocios; comunicación directa y enfoque en adopción práctica.
					</p>
					<div className="flex items-center gap-2 sm:gap-3">
						<a
							href="https://instagram.com/monartech"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram de Monartech"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
						</a>
						<a
							href="https://monartech.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Sitio web de Monartech"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Globe className="w-6 h-6" />
						</a>
						<a
							href="https://linkedin.com/company/monartech"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn de Monartech"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Linkedin className="w-6 h-6" />
						</a>
						<a
							href="https://youtube.com/@monartech"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="YouTube de Monartech"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Youtube className="w-6 h-6" />
						</a>
					</div>
				</AnimatedCard>

				<AnimatedCard
					delay={0.4}
					className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-5 md:p-6 transition duration-300 ease-in-out hover:scale-105 hover:border-[#3b82f6]/50 focus-within:ring-2 focus-within:ring-[#3b82f6]"
				>
					<h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AvilaTek</h3>
					<p className="text-white/90 text-base sm:text-lg text-justify leading-relaxed mb-4 sm:mb-6 font-bold">
						Socio de desarrollo tecnológico; narrativa de calidad, cercanía y entendimiento del negocio.
					</p>
					<div className="flex items-center gap-3">
						<a
							href="https://instagram.com/avilatek"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram de AvilaTek"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Instagram className="w-6 h-6" />
						</a>
						<a
							href="https://avilatek.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Sitio web de AvilaTek"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Globe className="w-6 h-6" />
						</a>
						<a
							href="https://linkedin.com/company/avilatek"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn de AvilaTek"
							className="text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded"
						>
							<Linkedin className="w-6 h-6" />
						</a>
						<a
							href="https://facebook.com/avilatek"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook de AvilaTek"
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
