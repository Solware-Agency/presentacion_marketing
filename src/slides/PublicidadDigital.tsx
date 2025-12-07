'use client'

import { motion } from 'framer-motion'
import { Megaphone, Linkedin, Search } from 'lucide-react'
import type { ReactNode } from 'react'

interface CardPublicidadProps {
	icon: ReactNode
	titulo: string
	objetivo: string
	bullets: string[]
	kpis?: string[]
	delay: number
	ariaLabel: string
}

function CardPublicidad({ icon, titulo, objetivo, bullets, kpis, delay, ariaLabel }: CardPublicidadProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.45, delay, ease: 'easeOut' }}
			className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-7 shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:border-[#3b82f6]/50 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900"
			aria-label={ariaLabel}
			tabIndex={0}
		>
			<div className="flex items-start gap-4 mb-4">
				<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 grid place-items-center text-[#3b82f6] flex-shrink-0">
					{icon}
				</div>
				<h3 className="text-xl md:text-2xl font-bold text-white pt-1">{titulo}</h3>
			</div>

			<p className="text-lg md:text-xl font-bold text-[#5d9ff0] mb-4 leading-snug">
				{objetivo}
			</p>

			<ul className="space-y-2.5 mb-4" role="list">
				{bullets.map((bullet, idx) => (
					<motion.li
						key={idx}
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: delay + 0.1 + idx * 0.08, ease: 'easeOut' }}
						className="flex items-start gap-2.5"
					>
						<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2 flex-shrink-0" />
						<span className="text-sm md:text-base text-white/90 leading-relaxed font-bold">{bullet}</span>
					</motion.li>
				))}
			</ul>

			{kpis && kpis.length > 0 && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.45, delay: delay + 0.3, ease: 'easeOut' }}
					className="flex flex-wrap gap-2"
				>
					{kpis.map((kpi, idx) => (
						<span
							key={idx}
							className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-white/80"
							aria-label={`Indicador: ${kpi}`}
						>
							{kpi}
						</span>
					))}
				</motion.div>
			)}
		</motion.div>
	)
}

export function PublicidadDigital() {
	const plataformas: Array<Omit<CardPublicidadProps, 'delay'>> = [
		{
			icon: <Megaphone className="w-5 h-5 md:w-6 md:h-6" />,
			titulo: 'Meta ADS',
			objetivo: 'Incrementar visibilidad y leads para Solware; awareness inicial de Solhub.',
			bullets: [
				'Tráfico y generación de clientes potenciales a landings o WhatsApp.',
				'Remarketing a quienes visitaron la web o interactuaron con contenidos.'
			],
			kpis: ['CTR', 'Formularios enviados', 'Conversión a WhatsApp'],
			ariaLabel: 'Meta ADS'
		},
		{
			icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />,
			titulo: 'LinkedIn ADS',
			objetivo: 'Alcanzar nichos de doctores, dueños/directores y tomadores de decisión.',
			bullets: [
				'Sponsored Content y Lead Gen Forms (captura sin salir de LinkedIn).',
				'Segmentación por cargo, industria y tamaño de empresa en Venezuela y ciudades clave.'
			],
			kpis: ['Leads B2B', 'Costo por lead', 'Tasa de calificación'],
			ariaLabel: 'LinkedIn ADS'
		},
		{
			icon: <Search className="w-5 h-5 md:w-6 md:h-6" />,
			titulo: 'Google ADS',
			objetivo: 'Captar demanda activa y posicionar Solware/Solhub cuando el usuario busca soluciones.',
			bullets: [
				'Búsqueda con keywords: desarrollo web B2B, automatización de procesos, agencia tecnológica.',
				'Salud (Solhub): software para laboratorios, sistema para laboratorio, plataforma de gestión.'
			],
			kpis: ['Impresiones en búsqueda', 'Tasa de clics', 'Conversiones'],
			ariaLabel: 'Google ADS'
		}
	]

	return (
		<div className="w-full min-h-screen  bg-gray-900 text-white p-6 md:p-8 flex flex-col items-center justify-center relative">
			<motion.header
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center mb-8 h-24 flex flex-col justify-center"
			>
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#41e2b8' }}>
					Publicidad digital
				</h1>
				<div className="w-40 sm:w-56 md:w-72 h-2 sm:h-2 md:h-2.5 mx-auto rounded-full bg-gradient-to-r from-[#3b82f6] via-[#bc81f8] to-[#ce609c] shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_20px_rgba(188,129,248,0.3),0_0_30px_rgba(206,96,156,0.2)]"></div>
			</motion.header>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.1 }}
				className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
			>
				{plataformas.map((plataforma, idx) => (
					<CardPublicidad
						key={plataforma.titulo}
						{...plataforma}
						delay={0.2 + idx * 0.12}
					/>
				))}
			</motion.div>
		</div>
	)
}
