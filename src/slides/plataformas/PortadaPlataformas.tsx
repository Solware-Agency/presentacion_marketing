'use client'

import { motion } from 'framer-motion'
import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedText } from '@src/components/AnimatedElements'
import { LogoCorner } from '@src/components/LogoCorner'
import { Globe, Linkedin, Instagram, Facebook, Mail, Youtube } from 'lucide-react'

interface PortadaPlataformasProps {
	onNext: () => void
	onPrev: () => void
	esSegundaVez?: boolean
}

export function PortadaPlataformas({ onNext, onPrev, esSegundaVez = false }: PortadaPlataformasProps) {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'ArrowRight' || e.key === ' ') {
			e.preventDefault()
			onNext()
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault()
			onPrev()
		}
	}

	return (
		<div
			className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-full min-h-screen flex flex-col items-center justify-center p-8  relative"
			onKeyDown={handleKeyDown}
			tabIndex={0}
		>
			<LogoCorner />
			<SlideTitle title="Plataformas Digitales" />

			<div className="max-w-6xl w-full space-y-8 mt-6">
				<AnimatedText delay={0.2}>
					<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#3b82f6]/30">
						<h3 className="text-[#3b82f6] text-2xl font-bold mb-4">Plataformas Primarias</h3>
						<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
							<div className="flex flex-col items-center text-center">
								<div className="bg-[#3b82f6]/20 p-3 rounded-full mb-2">
									<Globe className="w-8 h-8 text-[#3b82f6]" />
								</div>
								<span className="text-white text-sm font-semibold">Website</span>
								<span className="text-white/60 text-xs">Hub central</span>
							</div>
							<div className="flex flex-col items-center text-center">
								<div className="bg-[#0077b5]/20 p-3 rounded-full mb-2">
									<Linkedin className="w-8 h-8 text-[#0077b5]" />
								</div>
								<span className="text-white text-sm font-semibold">LinkedIn</span>
								<span className="text-white/60 text-xs">B2B decisores</span>
							</div>
							<div className="flex flex-col items-center text-center">
								<div className="bg-[#E4405F]/20 p-3 rounded-full mb-2">
									<Instagram className="w-8 h-8 text-[#E4405F]" />
								</div>
								<span className="text-white text-sm font-semibold">Instagram</span>
								<span className="text-white/60 text-xs">Visual + Reels</span>
							</div>
							<div className="flex flex-col items-center text-center">
								<div className="bg-[#1877f2]/20 p-3 rounded-full mb-2">
									<Facebook className="w-8 h-8 text-[#1877f2]" />
								</div>
								<span className="text-white text-sm font-semibold">Facebook</span>
								<span className="text-white/60 text-xs">Presencia + Ads</span>
							</div>
							<div className="flex flex-col items-center text-center">
								<div className="bg-[#ea4335]/20 p-3 rounded-full mb-2">
									<Mail className="w-8 h-8 text-[#ea4335]" />
								</div>
								<span className="text-white text-sm font-semibold">Email</span>
								<span className="text-white/60 text-xs">Nurturing</span>
							</div>
						</div>
					</div>
				</AnimatedText>

				<AnimatedText delay={0.4}>
					<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#bc81f8]/30">
						<h3 className="text-[#bc81f8] text-2xl font-bold mb-4">Plataformas Secundarias</h3>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex items-center gap-4">
								<div className="bg-[#ff0000]/20 p-3 rounded-full">
									<Youtube className="w-8 h-8 text-[#ff0000]" />
								</div>
								<div>
									<span className="text-white text-sm font-semibold block">YouTube</span>
									<span className="text-white/60 text-xs">Tutoriales, shorts, podcast visual</span>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="bg-white/20 p-3 rounded-full">
									<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
									</svg>
								</div>
								<div>
									<span className="text-white text-sm font-semibold block">TikTok</span>
									<span className="text-white/60 text-xs">Educativo, tutoriales breves</span>
								</div>
							</div>
						</div>
					</div>
				</AnimatedText>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.45, delay: 0.6 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<p className="text-[#dbeafe] text-sm text-center">
					{esSegundaVez
						? 'Presiona Espacio/→ para ver YouTube'
						: 'Presiona Espacio/→ para ver Website'}
				</p>
			</motion.div>

			<button
				onClick={onPrev}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault()
						onPrev()
					}
				}}
				className="absolute inset-y-0 left-0 w-1/2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20"
				aria-label="Retroceder a slide anterior"
				tabIndex={-1}
			/>

			<button
				onClick={onNext}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault()
						onNext()
					}
				}}
				className="absolute inset-y-0 right-0 w-1/2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20"
				aria-label="Avanzar a siguiente slide"
				tabIndex={-1}
			/>
		</div>
	)
}
