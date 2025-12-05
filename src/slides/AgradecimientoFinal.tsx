'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import Particles from '@src/components/ui/Particles'

interface AgradecimientoFinalProps {
	onFinish?: () => void
	onPrevious?: () => void
}

const FRASES = [
	'Impulsemos tu empresa al siguiente nivel.',
	'Adelante con Solware.',
	'De la idea al impacto, juntos.'
]

export function AgradecimientoFinal({ onFinish, onPrevious }: AgradecimientoFinalProps) {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

	const fraseAleatoria = useMemo(() => {
		return FRASES[Math.floor(Math.random() * FRASES.length)]
	}, [])

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
		setPrefersReducedMotion(mediaQuery.matches)

		const handleChange = (e: MediaQueryListEvent) => {
			setPrefersReducedMotion(e.matches)
		}

		mediaQuery.addEventListener('change', handleChange)
		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [])

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
				e.preventDefault()
				onFinish?.()
			} else if (e.key === 'ArrowLeft') {
				e.preventDefault()
				onPrevious?.()
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [onFinish, onPrevious])

	const handleClickDerecha = () => {
		onFinish?.()
	}

	const handleClickIzquierda = () => {
		onPrevious?.()
	}

	return (
		<motion.section
			initial={{ opacity: 0, scale: 0.98 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.98 }}
			transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
			role="region"
			aria-label="Lámina final de agradecimiento"
			className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#271944] via-[#34182f] to-[#1f2937] text-white grid place-items-center p-8"
		>
			<div className="absolute inset-0 opacity-30" aria-hidden="true">
				<Particles />
			</div>

			<div className="relative z-10 max-w-4xl w-full text-center space-y-8">
				<motion.div
					initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
					animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
					className="mx-auto w-40 h-40 md:w-56 md:h-56 relative"
					aria-label="Animación de cohete despegando"
				>
					{prefersReducedMotion ? (
						<div className="text-9xl flex items-center justify-center h-full" role="img" aria-label="Cohete">
							🚀
						</div>
					) : (
						<svg
							viewBox="0 0 200 200"
							className="w-full h-full"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Cohete despegando"
						>
							<motion.g
								initial={{ y: 40, opacity: 0 }}
								animate={{ y: -20, opacity: 1 }}
								transition={{
									duration: 1.2,
									ease: [0.4, 0, 0.2, 1],
									repeat: Infinity,
									repeatType: 'reverse',
									repeatDelay: 0.5
								}}
							>
								<motion.path
									d="M100 160 L90 180 L95 180 L100 170 L105 180 L110 180 Z"
									fill="#f97316"
									opacity={0.6}
									animate={{
										opacity: [0.3, 0.7, 0.3],
										scaleY: [0.8, 1.2, 0.8]
									}}
									transition={{
										duration: 0.8,
										repeat: Infinity,
										ease: 'easeInOut'
									}}
								/>

								<motion.path
									d="M85 180 L75 200 L80 200 L85 190 Z"
									fill="#fbbf24"
									opacity={0.4}
									animate={{
										opacity: [0.2, 0.5, 0.2],
										scaleY: [0.7, 1.3, 0.7]
									}}
									transition={{
										duration: 0.7,
										repeat: Infinity,
										ease: 'easeInOut',
										delay: 0.1
									}}
								/>

								<motion.path
									d="M115 180 L125 200 L120 200 L115 190 Z"
									fill="#fbbf24"
									opacity={0.4}
									animate={{
										opacity: [0.2, 0.5, 0.2],
										scaleY: [0.7, 1.3, 0.7]
									}}
									transition={{
										duration: 0.7,
										repeat: Infinity,
										ease: 'easeInOut',
										delay: 0.15
									}}
								/>

								<path
									d="M100 20 L120 80 L120 140 C120 150 110 160 100 160 C90 160 80 150 80 140 L80 80 Z"
									fill="#3b82f6"
									stroke="#dbeafe"
									strokeWidth="2"
								/>

								<ellipse cx="100" cy="60" rx="15" ry="20" fill="#1e40af" />

								<circle cx="90" cy="100" r="8" fill="#1e293b" opacity={0.6} />
								<circle cx="110" cy="100" r="8" fill="#1e293b" opacity={0.6} />
								<circle cx="100" cy="130" r="8" fill="#1e293b" opacity={0.6} />

								<path d="M80 80 L60 100 L80 120 Z" fill="#ef4444" />
								<path d="M120 80 L140 100 L120 120 Z" fill="#ef4444" />

								<motion.circle
									cx="100"
									cy="40"
									r="3"
									fill="#dbeafe"
									animate={{
										opacity: [0.3, 1, 0.3],
										scale: [0.8, 1.2, 0.8]
									}}
									transition={{
										duration: 1,
										repeat: Infinity,
										ease: 'easeInOut'
									}}
								/>
							</motion.g>

							<motion.g
								initial={{ opacity: 0 }}
								animate={{ opacity: [0, 0.3, 0] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: 'easeInOut',
									delay: 0.5
								}}
							>
								<circle cx="50" cy="100" r="2" fill="#dbeafe" />
								<circle cx="150" cy="120" r="2" fill="#dbeafe" />
								<circle cx="40" cy="140" r="1.5" fill="#dbeafe" />
								<circle cx="160" cy="90" r="1.5" fill="#dbeafe" />
							</motion.g>
						</svg>
					)}
				</motion.div>

				<motion.h1
					initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
					animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
					className="text-6xl md:text-7xl font-bold text-white"
				>
					¡Gracias por acompañarnos! 🚀
				</motion.h1>

				<motion.p
					initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
					animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
					className="text-xl md:text-2xl text-[#dbeafe]"
				>
					Sigamos impulsando la innovación.
				</motion.p>

				<motion.p
					initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
					animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
					className="text-lg md:text-xl text-white/90 italic"
				>
					{fraseAleatoria}
				</motion.p>
			</div>

			<button
				onClick={handleClickIzquierda}
				className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer focus:outline-none"
				aria-label="Retroceder a la diapositiva anterior"
				style={{ background: 'transparent' }}
			/>

			<button
				onClick={handleClickDerecha}
				className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer focus:outline-none"
				aria-label="Finalizar presentación"
				style={{ background: 'transparent' }}
			/>
		</motion.section>
	)
}
