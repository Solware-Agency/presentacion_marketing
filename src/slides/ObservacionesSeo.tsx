'use client'

import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import Image from 'next/image'

const OBSERVACIONES_SEO = [
	'Conflicto de marca en Google: "Solware" → sugiere "software".',
	'Propuesta de valor poco clara y sin diferenciación en la web.',
	'Jerarquía débil de contenido: encabezados sin foco en conversión.',
	'CTAs escasos: sin recorridos ni acciones por perfil de usuario.',
	'Sin blog/contenido indexable: limita SEO orgánico y estrategia editorial.',
	'SEO técnico básico pendiente: metadescripciones, headings, keywords, ALT, semántica.',
]

interface ChipSEOProps {
	texto: string
	delay: number
}

function ChipSEO({ texto, delay }: ChipSEOProps) {
	return (
		<motion.span
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.4, delay }}
			className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm md:text-base text-white/90 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900"
			role="status"
			aria-label={`Observación SEO: ${texto}`}
			title={texto}
		>
			<AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-[#3b82f6] flex-shrink-0" aria-hidden="true" />
			<span className="text-left">{texto}</span>
		</motion.span>
	)
}

export function ObservacionesSeo() {
	return (
		<div className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-screen h-screen flex flex-col items-center justify-start p-8 overflow-hidden">
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-12 text-center"
			>
				Observaciones SEO
			</motion.h1>

			<div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="flex flex-col gap-3 md:gap-4"
				>
					{OBSERVACIONES_SEO.map((observacion, index) => (
						<ChipSEO key={index} texto={observacion} delay={0.3 + index * 0.1} />
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="hidden lg:flex justify-center items-start"
				>
					<div className="relative w-full h-auto">
						<Image
							src="/mnt/data/estrategia_digital_solware_agency.png"
							alt="Resultados en Google al buscar 'solware'"
							width={800}
							height={600}
							className="rounded-2xl border border-white/10 shadow-xl w-full h-auto object-contain"
							priority={false}
						/>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.8 }}
				className="mt-8 lg:hidden flex justify-center w-full"
			>
				<div className="relative w-full max-w-md">
					<Image
						src="/mnt/data/estrategia_digital_solware_agency.png"
						alt="Resultados en Google al buscar 'solware'"
						width={800}
						height={600}
						className="rounded-2xl border border-white/10 shadow-xl w-full h-auto object-contain"
						priority={false}
					/>
				</div>
			</motion.div>
		</div>
	)
}
