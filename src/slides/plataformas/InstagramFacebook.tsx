'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CONTENIDO } from './data'

interface InstagramFacebookProps {
	onNext: () => void
	onPrev: () => void
}

export function InstagramFacebook({ onNext, onPrev }: InstagramFacebookProps) {
	const instagramData = CONTENIDO.instagram
	const facebookData = CONTENIDO.facebook

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
			className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-screen h-screen overflow-x-hidden overflow-y-auto relative px-4 sm:px-6 lg:px-8"
			onKeyDown={handleKeyDown}
			tabIndex={0}
		>
			<div className="max-w-7xl mx-auto py-8 sm:py-10">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, ease: 'easeOut' }}
					className="text-center mt-10 sm:mt-12 lg:mt-14 mb-6 sm:mb-8 scroll-mt-24"
				>
					<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
						Primarias — Plataformas a utilizar
					</h1>
					<div className="flex items-center justify-center gap-3 mt-4">
						<h2 className="text-2xl md:text-3xl font-bold text-[#3b82f6]">
							Instagram y Facebook
						</h2>
						<span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#3b82f6]/20 text-[#3b82f6]">
							Primaria
						</span>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
					className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
				>
					<div className="flex flex-col gap-6">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
							className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
						>
							<h3 className="text-xl font-bold text-[#E4405F] mb-3">Instagram</h3>
							<p className="text-base sm:text-lg text-white/90 leading-relaxed mb-4">
								{instagramData.resumen}
							</p>
							<h4 className="text-sm font-bold text-[#3b82f6] mb-2">Recomendaciones</h4>
							<ul className="space-y-2">
								{instagramData.recomendaciones.map((rec, idx) => (
									<li key={idx} className="flex items-start gap-2">
										<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E4405F] mt-2 flex-shrink-0" />
										<span className="text-sm text-white/90">{rec}</span>
									</li>
								))}
							</ul>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.45, delay: 0.32, ease: 'easeOut' }}
							className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
						>
							<h3 className="text-xl font-bold text-[#1877f2] mb-3">Facebook</h3>
							<p className="text-base sm:text-lg text-white/90 leading-relaxed mb-4">
								{facebookData.resumen}
							</p>
							<h4 className="text-sm font-bold text-[#3b82f6] mb-2">Recomendaciones</h4>
							<ul className="space-y-2">
								{facebookData.recomendaciones.map((rec, idx) => (
									<li key={idx} className="flex items-start gap-2">
										<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1877f2] mt-2 flex-shrink-0" />
										<span className="text-sm text-white/90">{rec}</span>
									</li>
								))}
							</ul>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.45, delay: 0.44, ease: 'easeOut' }}
							className="rounded-2xl border border-[#3b82f6]/30 bg-[#3b82f6]/10 backdrop-blur-sm p-5"
						>
							<h3 className="text-lg font-bold text-[#3b82f6] mb-2">Ejemplo</h3>
							<p className="text-sm sm:text-base text-white/90 italic leading-relaxed">
								{instagramData.ejemplo}
							</p>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.45, delay: 0.3, ease: 'easeOut' }}
						className="flex justify-center items-start mt-6 sm:mt-8"
					>
						<div className="mx-auto max-w-[720px] w-full aspect-[9/16] sm:max-w-[540px] lg:max-w-[620px] max-h-[70vh] sm:max-h-[75vh]">
							<Image
								src={instagramData.imagenSrc!}
								alt="Interfaz de Instagram y Facebook con publicaciones de Solware"
								width={800}
								height={1422}
								className="w-full h-full object-contain rounded-2xl shadow-lg"
								loading="lazy"
								decoding="async"
							/>
						</div>
					</motion.div>
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
