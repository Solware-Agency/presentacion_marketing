'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@src/components/ui/button'
import { Progress } from '@src/components/ui/progress'
import { ChevronLeft, ChevronRight, Home, Maximize, Minimize, Menu } from 'lucide-react'
import { useSlidesRegistry } from '@src/context/SlidesContext'
import { getSlideTitle } from '@src/lib/slideUtils'
import { PanelSecciones } from './PanelSecciones'

export function DeckControls() {
	const { currentIndex, total, next, prev, goToFirst, goToLast, getCurrentSlide } = useSlidesRegistry()
	const [pantallaCompleta, setPantallaCompleta] = useState(false)
	const [mostrarPanel, setMostrarPanel] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const menuButtonRef = useRef<HTMLButtonElement>(null)

	const progreso = ((currentIndex + 1) / total) * 100
	const slideActual = getCurrentSlide()
	const tituloSlide = slideActual ? getSlideTitle(slideActual) : ''

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}
		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	useEffect(() => {
		const manejarTecla = (e: KeyboardEvent) => {
			if (mostrarPanel) return

			switch (e.key) {
				case 'ArrowLeft':
					prev()
					break
				case 'ArrowRight':
				case ' ':
					e.preventDefault()
					next()
					break
				case 'Home':
					goToFirst()
					break
				case 'End':
					goToLast()
					break
				case 'f':
				case 'F11':
					e.preventDefault()
					togglePantallaCompleta()
					break
			}
		}

		window.addEventListener('keydown', manejarTecla)
		return () => window.removeEventListener('keydown', manejarTecla)
	}, [currentIndex, total, mostrarPanel, next, prev, goToFirst, goToLast])

	const togglePantallaCompleta = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen()
			setPantallaCompleta(true)
		} else {
			document.exitFullscreen()
			setPantallaCompleta(false)
		}
	}

	const handlePanelToggle = () => {
		setMostrarPanel(!mostrarPanel)
	}

	return (
		<>
			<div className="fixed top-0 left-0 right-0 h-20 z-40 group">
				<Progress
					value={progreso}
					className="h-1 rounded-none fixed top-0 left-0 right-0 z-50"
					aria-label={`Progreso de la presentación: diapositiva ${currentIndex + 1} de ${total}`}
				/>

				<div className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-white/10 opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
					<div className="flex items-center justify-between px-4 py-3">
						<div className="flex items-center space-x-4">
							<div className="flex items-center space-x-2" role="status" aria-live="polite">
								<span className="text-sm font-medium text-white font-mono">
									{currentIndex + 1} / {total}
								</span>
								{!isMobile && tituloSlide && (
									<>
										<span className="text-white/30">•</span>
										<span className="text-sm text-white/70 max-w-md truncate">{tituloSlide}</span>
									</>
								)}
							</div>
							<Button
								ref={menuButtonRef}
								variant="ghost"
								size="sm"
								onClick={handlePanelToggle}
								aria-label="Abrir navegación de diapositivas"
								aria-expanded={mostrarPanel}
								aria-controls="panel-secciones"
								className="text-white hover:bg-white/10 focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900"
							>
								<Menu className="w-4 h-4" />
							</Button>
						</div>

						<div className="flex items-center space-x-2">
							<Button
								variant="ghost"
								size="sm"
								onClick={togglePantallaCompleta}
								aria-label={pantallaCompleta ? 'Salir de pantalla completa' : 'Pantalla completa'}
								className="text-white hover:bg-white/10 focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900"
							>
								{pantallaCompleta ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
							</Button>
						</div>
					</div>
				</div>
			</div>

			<PanelSecciones isOpen={mostrarPanel} onClose={() => setMostrarPanel(false)} triggerRef={menuButtonRef} />

			<div className="fixed bottom-0 left-0 right-0 h-20 z-40 group w-full max-w-xs mx-auto">
				<div
					className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300"
					role="navigation"
					aria-label="Controles de navegación de la presentación"
				>
					<div className="flex items-center space-x-2 bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl p-2">
						<Button
							variant="ghost"
							size="sm"
							onClick={goToFirst}
							disabled={currentIndex === 0}
							aria-label="Ir a la primera diapositiva"
							className="text-white hover:bg-white/10 disabled:opacity-30 focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900 transition-transform hover:scale-105"
						>
							<Home className="w-4 h-4" />
						</Button>

						<Button
							variant="ghost"
							size="sm"
							onClick={prev}
							disabled={currentIndex === 0}
							aria-label="Diapositiva anterior"
							className="text-white hover:bg-white/10 disabled:opacity-30 focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900 transition-transform hover:scale-105"
						>
							<ChevronLeft className="w-4 h-4" />
						</Button>

						<span
							className="px-4 py-2 text-sm font-medium font-mono min-w-[80px] text-center text-white"
							role="status"
							aria-live="polite"
							aria-atomic="true"
						>
							{currentIndex + 1} / {total}
						</span>

						<Button
							variant="ghost"
							size="sm"
							onClick={next}
							disabled={currentIndex === total - 1}
							aria-label="Siguiente diapositiva"
							className="text-white hover:bg-white/10 disabled:opacity-30 focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900 transition-transform hover:scale-105"
						>
							<ChevronRight className="w-4 h-4" />
						</Button>
					</div>
				</div>
			</div>

			<div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
				{`Diapositiva ${currentIndex + 1} de ${total}: ${tituloSlide}`}
			</div>
		</>
	)
}
