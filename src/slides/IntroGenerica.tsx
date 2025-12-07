'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Presentation, X, Keyboard } from 'lucide-react'

interface IntroGenericaProps {
	onStart: () => void
	onOpenAdmin?: () => void
	onResume?: () => void
	mostrarInstrucciones?: boolean
}

export default function IntroGenerica({
	onStart,
	onOpenAdmin,
	onResume,
	mostrarInstrucciones = true
}: IntroGenericaProps) {
	const [mostrarModal, setMostrarModal] = useState(false)
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

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
			if (mostrarModal) {
				if (e.key === 'Escape') {
					setMostrarModal(false)
				}
				return
			}

			if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
				e.preventDefault()
				onStart()
			}

			if (e.key === 'i' || e.key === 'I') {
				e.preventDefault()
				setMostrarModal(true)
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [mostrarModal, onStart])

	const handleClickDerecha = () => {
		onStart()
	}

	const animationProps = prefersReducedMotion
		? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
		: {
				initial: { opacity: 0, y: 8 },
				animate: { opacity: 1, y: 0 },
				exit: { opacity: 0, y: 8 }
		  }

	const transitionProps = { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const }

	return (
		<div className="relative w-full min-h-screen  bg-gradient-to-br from-[#271944] via-[#34182f] to-[#1f2937]">
			<div className="absolute inset-0 flex items-center justify-center p-4">
				<motion.div
					{...animationProps}
					transition={transitionProps}
					role="region"
					aria-label="Inicio de la presentación"
					className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 max-w-2xl w-full shadow-2xl"
				>
					<div className="flex flex-col items-center text-center space-y-6">
						<motion.div
							{...animationProps}
							transition={{ ...transitionProps, delay: 0.1 }}
							className="rounded-full bg-[#3b82f6]/10 p-4"
						>
							<Presentation className="w-12 h-12 text-[#3b82f6]" aria-hidden="true" />
						</motion.div>

						<motion.div
							{...animationProps}
							transition={{ ...transitionProps, delay: 0.2 }}
							className="space-y-3"
						>
							<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white px-2 leading-tight">
								Presentación interactiva
							</h1>
							<p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-lg mx-auto px-2">
								Inicia la presentación y navega con las flechas o la barra espaciadora.
							</p>
						</motion.div>

						<motion.div
							{...animationProps}
							transition={{ ...transitionProps, delay: 0.3 }}
							className="flex flex-col sm:flex-row gap-4 w-full max-w-md pt-4"
						>
							{onResume && (
								<motion.button
									onClick={onResume}
									whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
									whileTap={prefersReducedMotion ? {} : { scale: 1.0 }}
									transition={{ duration: 0.3 }}
									className="flex-1 bg-[#10b981] hover:bg-[#10b981]/90 text-white font-semibold rounded-xl px-5 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:ring-offset-2 focus:ring-offset-gray-900"
									aria-label="Reanudar presentación desde donde la dejaste"
								>
									Reanudar presentación
								</motion.button>
							)}

							<motion.button
								onClick={onStart}
								whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
								whileTap={prefersReducedMotion ? {} : { scale: 1.0 }}
								transition={{ duration: 0.3 }}
								className="flex-1 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white font-semibold rounded-xl px-5 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900"
								aria-label="Iniciar la presentación desde el principio"
							>
								Iniciar presentación
							</motion.button>
						</motion.div>

						{mostrarInstrucciones && (
							<motion.div
								{...animationProps}
								transition={{ ...transitionProps, delay: 0.4 }}
								className="pt-2"
							>
								<button
									onClick={() => setMostrarModal(true)}
									className="text-white/90 hover:text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
									aria-label="Ver instrucciones de navegación"
								>
									Ver instrucciones
								</button>
							</motion.div>
						)}

						{onOpenAdmin && (
							<motion.div
								{...animationProps}
								transition={{ ...transitionProps, delay: 0.5 }}
								className="pt-2 border-t border-white/10 w-full"
							>
								<button
									onClick={onOpenAdmin}
									className="text-white/60 hover:text-white/90 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
									aria-label="Abrir panel de administración"
								>
									Abrir panel de administración
								</button>
							</motion.div>
						)}
					</div>
				</motion.div>
			</div>

			<motion.div
				{...animationProps}
				transition={{ ...transitionProps, delay: 0.6 }}
				className="absolute bottom-8 left-0 right-0 text-center"
			>
				<p className="text-[#dbeafe] text-sm" role="status" aria-live="polite">
					Sugerencia: usa <kbd className="px-2 py-1 bg-white/10 rounded">Espacio</kbd> o{' '}
					<kbd className="px-2 py-1 bg-white/10 rounded">→</kbd> para avanzar,{' '}
					<kbd className="px-2 py-1 bg-white/10 rounded">←</kbd> para retroceder.
				</p>
			</motion.div>

			<button
				onClick={handleClickDerecha}
				className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer focus:outline-none focus:ring-0"
				aria-label="Avanzar a la siguiente diapositiva"
				style={{ background: 'transparent' }}
			/>

			<AnimatePresence>
				{mostrarModal && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
							onClick={() => setMostrarModal(false)}
							aria-hidden="true"
						/>

						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.3, ease: 'easeOut' }}
							role="dialog"
							aria-modal="true"
							aria-labelledby="modal-titulo"
							className="fixed inset-0 z-50 flex items-center justify-center p-4"
						>
							<div className="relative rounded-2xl border border-white/10 bg-[#1f2937] backdrop-blur-sm p-8 max-w-lg w-full shadow-2xl">
								<button
									onClick={() => setMostrarModal(false)}
									className="absolute top-4 right-4 text-white/60 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded p-1"
									aria-label="Cerrar instrucciones"
								>
									<X className="w-6 h-6" aria-hidden="true" />
								</button>

								<div className="flex items-center gap-3 mb-6">
									<Keyboard className="w-8 h-8 text-[#3b82f6]" aria-hidden="true" />
									<h2 id="modal-titulo" className="text-2xl font-bold text-white">
										Atajos de teclado
									</h2>
								</div>

								<div className="space-y-4 text-white/90">
									<div className="flex items-center gap-3">
										<div className="flex gap-2">
											<kbd className="px-3 py-2 bg-white/10 rounded font-mono text-sm">→</kbd>
											<kbd className="px-3 py-2 bg-white/10 rounded font-mono text-sm">Espacio</kbd>
										</div>
										<span className="flex-1">Avanzar a la siguiente diapositiva</span>
									</div>

									<div className="flex items-center gap-3">
										<kbd className="px-3 py-2 bg-white/10 rounded font-mono text-sm">←</kbd>
										<span className="flex-1">Retroceder a la diapositiva anterior</span>
									</div>

									<div className="flex items-center gap-3">
										<kbd className="px-3 py-2 bg-white/10 rounded font-mono text-sm">Esc</kbd>
										<span className="flex-1">Cerrar modales y diálogos</span>
									</div>

									<div className="flex items-center gap-3">
										<div className="flex gap-2">
											<kbd className="px-3 py-2 bg-white/10 rounded font-mono text-sm">F</kbd>
											<kbd className="px-3 py-2 bg-white/10 rounded font-mono text-sm">F11</kbd>
										</div>
										<span className="flex-1">Pantalla completa (si está disponible)</span>
									</div>

									<div className="flex items-center gap-3">
										<kbd className="px-3 py-2 bg-white/10 rounded font-mono text-sm">I</kbd>
										<span className="flex-1">Abrir/cerrar instrucciones</span>
									</div>
								</div>

								<div className="mt-6 pt-6 border-t border-white/10">
									<p className="text-white/70 text-sm">
										También puedes hacer clic en los lados derecho o izquierdo de la pantalla para
										navegar.
									</p>
								</div>

								<button
									onClick={() => setMostrarModal(false)}
									className="mt-6 w-full bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white font-semibold rounded-xl px-5 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900"
									aria-label="Cerrar instrucciones y volver"
								>
									Entendido
								</button>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	)
}
