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
			className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-full min-h-screen  relative flex items-center justify-center px-4 sm:px-6 lg:px-8"
			onKeyDown={handleKeyDown}
			tabIndex={0}
		>
			<div className="max-w-7xl mx-auto w-full">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, ease: 'easeOut' }}
					className="text-center mb-4"
				>
					<h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#3b82f6] mb-2">
						Plataformas a utilizar
					</h1>
					<div className="flex items-center justify-center gap-3 mt-2">
						<h2 className="text-xl md:text-2xl font-bold text-white">
							{data.nombre}
						</h2>
						<span className={`px-2 py-1 rounded-full text-xs font-semibold ${
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
					className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
				>
					<div className="flex flex-col gap-3">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
							className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
						>
							<h3 className="text-base font-bold text-[#3b82f6] mb-2">Resumen</h3>
							<p className="text-sm text-white/90 leading-snug">
								{data.resumen}
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.45, delay: 0.32, ease: 'easeOut' }}
							className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
						>
							<h3 className="text-base font-bold text-[#3b82f6] mb-2">Recomendaciones</h3>
							<ul className="space-y-1.5">
								{data.recomendaciones.map((rec, idx) => (
									<motion.li
										key={idx}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.45, delay: 0.4 + idx * 0.08, ease: 'easeOut' }}
										className="flex items-start gap-2"
									>
										<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 flex-shrink-0" />
										<span className="text-sm text-white/90">{rec}</span>
									</motion.li>
								))}
							</ul>
						</motion.div>

						{data.ejemplo && (
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.45, delay: 0.56, ease: 'easeOut' }}
								className="rounded-xl border border-[#3b82f6]/30 bg-[#3b82f6]/10 backdrop-blur-sm p-3"
							>
								<h3 className="text-sm font-bold text-[#3b82f6] mb-1.5">Ejemplo</h3>
								<p className="text-xs text-white/90 italic leading-snug">
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
							<div className="mx-auto w-full max-w-[364px] sm:max-w-[416px] max-h-[72vh]">
								<Image
									src={data.imagenSrc}
									alt={data.imagenAlt || `Captura de pantalla de ${data.nombre}`}
									width={800}
									height={1422}
									className="w-full h-full object-contain rounded-2xl shadow-lg"
									loading="lazy"
									decoding="async"
								/>
							</div>
						</motion.div>
					)}
				</motion.div>
			</div>

			<button
				onClick={onPrev}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault()
						onPrev()
					}
				}}
				className="absolute inset-y-0 left-0 w-1/2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20"
				aria-label="Retroceder a diapositiva anterior"
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
				aria-label="Avanzar a siguiente diapositiva"
				tabIndex={-1}
			/>
		</div>
	)
}
