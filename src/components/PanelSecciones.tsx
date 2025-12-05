'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Input } from '@src/components/ui/input'
import { cn } from '@src/lib/utils'
import { useSlidesRegistry } from '@src/context/SlidesContext'
import { groupSlidesBySeccion, filterSlides, getSlideTitle, getSlidePosition } from '@src/lib/slideUtils'
import { Search, X } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

interface PanelSeccionesProps {
	isOpen: boolean
	onClose: () => void
	triggerRef?: React.RefObject<HTMLElement>
}

export function PanelSecciones({ isOpen, onClose, triggerRef }: PanelSeccionesProps) {
	const { slides, currentIndex, setCurrentIndex, total } = useSlidesRegistry()
	const [searchTerm, setSearchTerm] = useState('')
	const [focusedIndex, setFocusedIndex] = useState(0)
	const panelRef = useRef<HTMLDivElement>(null)
	const searchInputRef = useRef<HTMLInputElement>(null)
	const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

	const filteredSlides = filterSlides(slides, searchTerm)
	const groupedSlides = groupSlidesBySeccion(filteredSlides)
	const flatFilteredSlides = filteredSlides.filter((s) => !s.ocultarEnIndice)

	useEffect(() => {
		if (isOpen) {
			searchInputRef.current?.focus()
			setFocusedIndex(0)
		} else {
			setSearchTerm('')
		}
	}, [isOpen])

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				onClose()
				triggerRef?.current?.focus()
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [isOpen, onClose, triggerRef])

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (isOpen && panelRef.current && !panelRef.current.contains(e.target as Node)) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [isOpen, onClose])

	const handleKeyNavigation = useCallback(
		(e: KeyboardEvent) => {
			if (!isOpen || flatFilteredSlides.length === 0) return

			switch (e.key) {
				case 'ArrowDown':
					e.preventDefault()
					setFocusedIndex((prev) => (prev + 1) % flatFilteredSlides.length)
					break
				case 'ArrowUp':
					e.preventDefault()
					setFocusedIndex((prev) => (prev - 1 + flatFilteredSlides.length) % flatFilteredSlides.length)
					break
				case 'Enter':
					e.preventDefault()
					const targetSlide = flatFilteredSlides[focusedIndex]
					if (targetSlide) {
						const index = slides.findIndex((s) => s.id === targetSlide.id)
						if (index !== -1) {
							setCurrentIndex(index)
							onClose()
							triggerRef?.current?.focus()
						}
					}
					break
			}
		},
		[isOpen, flatFilteredSlides, focusedIndex, slides, setCurrentIndex, onClose, triggerRef],
	)

	useEffect(() => {
		document.addEventListener('keydown', handleKeyNavigation)
		return () => document.removeEventListener('keydown', handleKeyNavigation)
	}, [handleKeyNavigation])

	useEffect(() => {
		itemRefs.current[focusedIndex]?.focus()
	}, [focusedIndex])

	const handleSlideClick = (slideId: string) => {
		const index = slides.findIndex((s) => s.id === slideId)
		if (index !== -1) {
			setCurrentIndex(index)
			onClose()
			triggerRef?.current?.focus()
		}
	}

	const getIcon = (iconName?: string) => {
		if (!iconName) return null
		const Icon = (LucideIcons as any)[iconName] as React.ComponentType<any>
		return Icon ? <Icon className="w-4 h-4" /> : null
	}

	if (!isOpen) return null

	return (
		<div
			ref={panelRef}
			role="dialog"
			aria-modal="true"
			aria-labelledby="panel-title"
			aria-describedby="panel-description"
			className={cn(
				'fixed top-20 left-4 z-50 w-[400px] max-h-[calc(100vh-8rem)]',
				'bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl',
				'transform transition-all duration-300 ease-in-out',
				isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95',
			)}
		>
			<div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-white/10 p-4 z-10">
				<div className="flex items-center justify-between mb-3">
					<h2 id="panel-title" className="text-lg font-semibold text-white">
						Navegación de Diapositivas
					</h2>
					<button
						onClick={onClose}
						className="p-1 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900"
						aria-label="Cerrar panel de navegación"
					>
						<X className="w-5 h-5 text-white/70" />
					</button>
				</div>

				<p id="panel-description" className="sr-only">
					Panel de navegación con búsqueda de diapositivas. Use las flechas arriba/abajo para navegar y Enter para
					seleccionar.
				</p>

				<div className="relative">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
					<Input
						ref={searchInputRef}
						type="text"
						placeholder="Buscar sección..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6]"
						aria-label="Buscar sección o diapositiva"
					/>
				</div>
			</div>

			<div className="overflow-y-auto max-h-[calc(100vh-16rem)] p-4 space-y-4">
				{Object.keys(groupedSlides).length === 0 ? (
					<div className="text-center py-8 text-white/50">
						<p>No se encontraron resultados</p>
					</div>
				) : (
					Object.entries(groupedSlides).map(([grupo, slidesInGroup]) => (
						<div key={grupo} className="space-y-2">
							<h3 className="text-sm font-semibold text-white/70 uppercase tracking-wide px-2">{grupo}</h3>

							<div className="space-y-1" role="group" aria-label={`Sección ${grupo}`}>
								{slidesInGroup.map((slide) => {
									const slideIndex = slides.findIndex((s) => s.id === slide.id)
									const isActive = slideIndex === currentIndex
									const flatIndex = flatFilteredSlides.findIndex((s) => s.id === slide.id)
									const isFocused = flatIndex === focusedIndex

									return (
										<button
											key={slide.id}
											ref={(el) => {
												if (flatIndex !== -1) {
													itemRefs.current[flatIndex] = el
												}
											}}
											onClick={() => handleSlideClick(slide.id)}
											tabIndex={isFocused ? 0 : -1}
											className={cn(
												'w-full text-left px-4 py-3 rounded-xl transition-all duration-200',
												'flex items-center justify-between gap-3',
												'focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900',
												isActive
													? 'bg-[#3b82f6] text-white shadow-lg transform scale-105'
													: 'bg-white/5 text-white/80 hover:bg-white/10 hover:scale-102',
												isFocused && !isActive && 'ring-2 ring-white/30',
											)}
											aria-current={isActive ? 'true' : undefined}
											aria-label={`${getSlideTitle(slide)}, diapositiva ${getSlidePosition(slideIndex, total)}`}
										>
											<div className="flex items-center gap-3 flex-1 min-w-0">
												{slide.icono && (
													<div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
														{getIcon(slide.icono)}
													</div>
												)}
												<div className="flex-1 min-w-0">
													<p className="font-medium truncate">{getSlideTitle(slide)}</p>
												</div>
											</div>
											<span className="text-xs font-mono opacity-70 flex-shrink-0">
												{getSlidePosition(slideIndex, total)}
											</span>
										</button>
									)
								})}
							</div>
						</div>
					))
				)}
			</div>

			<div
				role="status"
				aria-live="polite"
				aria-atomic="true"
				className="sr-only"
				aria-relevant="additions text"
			>
				{flatFilteredSlides.length > 0 &&
					`Mostrando ${flatFilteredSlides.length} de ${total} diapositivas. ${
						flatFilteredSlides[focusedIndex] ? `Enfocado en: ${getSlideTitle(flatFilteredSlides[focusedIndex])}` : ''
					}`}
			</div>
		</div>
	)
}
