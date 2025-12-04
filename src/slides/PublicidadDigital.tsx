'use client'

import { motion } from 'framer-motion'

interface TarjetaPublicidadProps {
	titulo: string
	objetivo: string
	resumen: string[]
	delay: number
	colorBorde: string
}

function TarjetaPublicidad({ titulo, objetivo, resumen, delay, colorBorde }: TarjetaPublicidadProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.45, delay, ease: 'easeOut' }}
			className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-7 transition duration-300 ease-in-out hover:scale-105 hover:border-${colorBorde}/50 focus:outline-none focus:ring-2 focus:ring-${colorBorde}`}
		>
			<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{titulo}</h3>
			<p className="text-xl md:text-2xl font-bold text-[#3b82f6] mb-5">
				{objetivo}
			</p>
			<ul className="space-y-3">
				{resumen.map((item, idx) => (
					<motion.li
						key={idx}
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: delay + 0.1 + idx * 0.08, ease: 'easeOut' }}
						className="flex items-start gap-3"
					>
						<span className="inline-block w-2 h-2 rounded-full bg-[#3b82f6] mt-2 flex-shrink-0" />
						<span className="text-base lg:text-lg text-white/90 leading-relaxed">{item}</span>
					</motion.li>
				))}
			</ul>
		</motion.div>
	)
}

export function PublicidadDigital() {
	const plataformas = [
		{
			titulo: 'Meta ADS',
			objetivo: 'Incrementar visibilidad y generación de leads para Solware y awareness inicial para Solhub.',
			resumen: [
				'Campañas de tráfico y generación de clientes potenciales a landings con formularios o WhatsApp.',
				'Remarketing a quienes visitaron la web o interactuaron con contenidos.'
			],
			colorBorde: '[#3b82f6]'
		},
		{
			titulo: 'LinkedIn ADS',
			objetivo: 'Llegar a nichos específicos (doctores, dueños de laboratorios, directores médicos y tomadores de decisión) para Solware/Solhub.',
			resumen: [
				'Sponsored Content y Lead Gen Forms para capturar datos sin salir de LinkedIn.',
				'Segmentación por cargo, industria y tamaño de empresa en Venezuela y ciudades clave.'
			],
			colorBorde: '[#3b82f6]'
		},
		{
			titulo: 'Google ADS',
			objetivo: 'Captar demanda activa y posicionar a Solware/Solhub cuando el usuario ya está buscando soluciones.',
			resumen: [
				'Búsqueda con keywords de desarrollo web B2B, automatización de procesos, agencia tecnológica en Venezuela.',
				'Para Solhub: keywords del sector salud (software para laboratorios, sistema para laboratorio, plataforma de gestión).'
			],
			colorBorde: '[#3b82f6]'
		}
	]

	return (
		<div className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-screen h-screen flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden relative">
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-10 text-center"
			>
				Publicidad digital
			</motion.h1>

			<div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
				{plataformas.map((plataforma, idx) => (
					<TarjetaPublicidad
						key={plataforma.titulo}
						titulo={plataforma.titulo}
						objetivo={plataforma.objetivo}
						resumen={plataforma.resumen}
						delay={0.2 + idx * 0.15}
						colorBorde={plataforma.colorBorde}
					/>
				))}
			</div>
		</div>
	)
}
