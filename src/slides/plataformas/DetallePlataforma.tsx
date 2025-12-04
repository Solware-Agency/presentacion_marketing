'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { type PlataformaKey, CONTENIDO } from './data'

interface DetallePlataformaProps {
	plataforma: PlataformaKey
	onNext: () => void
	onPrev: () => void
}

export function DetallePlataforma({ plataforma, onNext, onPrev }: DetallePlataformaProps) {
	const data = CONTENIDO[plataforma]

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
			className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-screen h-screen flex flex-col items-center justify-center p-6 overflow-hidden relative"
			onKeyDown={handleKeyDown}
			tabIndex={0}
		>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.45, ease: 'easeOut' }}
				className="text-center mb-6"
			>
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
					Plataformas a utilizar
				</h1>
				<div className="flex items-center justify-center gap-3 mt-4">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3b82f6]">
						{data.nombre}
					</h2>
					<span className={`px-3 py-1 rounded-full text-sm font-semibold ${
						data.tipo === 'Primaria'
							? 'bg-[#3b82f6]/20 text-[#3b82f6]'
							: 'bg-[#bc81f8]/20 text-[#bc81f8]'
					}`}>
						{data.tipo}
					</span>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
				className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
			>
				<div className="flex flex-col gap-6">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
						className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
					>
						<h3 className="text-xl font-bold text-[#3b82f6] mb-3">Resumen</h3>
						<p className="text-base lg:text-lg text-white/90 leading-relaxed">
							{data.resumen}
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.32, ease: 'easeOut' }}
						className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
					>
						<h3 className="text-xl font-bold text-[#3b82f6] mb-4">Recomendaciones</h3>
						<ul className="space-y-2.5">
							{data.recomendaciones.map((rec, idx) => (
								<motion.li
									key={idx}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.45, delay: 0.4 + idx * 0.08, ease: 'easeOut' }}
									className="flex items-start gap-3"
								>
									<span className="inline-block w-2 h-2 rounded-full bg-[#3b82f6] mt-2 flex-shrink-0" />
									<span className="text-base text-white/90">{rec}</span>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{data.ejemplo && (
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.45, delay: 0.56, ease: 'easeOut' }}
							className="rounded-2xl border border-[#3b82f6]/30 bg-[#3b82f6]/10 backdrop-blur-sm p-5"
						>
							<h3 className="text-lg font-bold text-[#3b82f6] mb-2">Ejemplo</h3>
							<p className="text-sm lg:text-base text-white/90 italic leading-relaxed">
								{data.ejemplo}
							</p>
						</motion.div>
					)}
				</div>

				{data.imagenSrc && (
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.45, delay: 0.3, ease: 'easeOut' }}
						className="flex justify-center items-center"
					>
						<div className="relative w-full h-auto">
							<Image
								src={data.imagenSrc}
								alt={data.imagenAlt || `Captura de ${data.nombre}`}
								width={800}
								height={600}
								className="rounded-2xl border border-white/10 shadow-2xl w-full h-auto object-contain"
								priority={false}
							/>
						</div>
					</motion.div>
				)}
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
