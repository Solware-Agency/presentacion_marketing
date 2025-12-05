'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

export interface SlideMetadata {
	id: string
	titulo?: string
	grupo?: string
	icono?: string
	ocultarEnIndice?: boolean
	preview?: string
	component: React.ComponentType<any>
}

interface SlidesContextType {
	slides: SlideMetadata[]
	currentIndex: number
	total: number
	setCurrentIndex: (index: number) => void
	setIndexById: (id: string) => void
	next: () => void
	prev: () => void
	goToFirst: () => void
	goToLast: () => void
	getCurrentSlide: () => SlideMetadata | null
}

const SlidesContext = createContext<SlidesContextType | undefined>(undefined)

interface SlidesProviderProps {
	children: ReactNode
	slides: SlideMetadata[]
	initialIndex?: number
}

export function SlidesProvider({ children, slides, initialIndex = 0 }: SlidesProviderProps) {
	const [currentIndex, setCurrentIndex] = useState(initialIndex)

	const total = slides.length

	const setIndexById = useCallback(
		(id: string) => {
			const index = slides.findIndex((slide) => slide.id === id)
			if (index !== -1) {
				setCurrentIndex(index)
			}
		},
		[slides],
	)

	const next = useCallback(() => {
		if (currentIndex < total - 1) {
			setCurrentIndex(currentIndex + 1)
		}
	}, [currentIndex, total])

	const prev = useCallback(() => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1)
		}
	}, [currentIndex])

	const goToFirst = useCallback(() => {
		setCurrentIndex(0)
	}, [])

	const goToLast = useCallback(() => {
		setCurrentIndex(total - 1)
	}, [total])

	const getCurrentSlide = useCallback(() => {
		return slides[currentIndex] || null
	}, [slides, currentIndex])

	useEffect(() => {
		const hash = window.location.hash.slice(1)
		if (hash) {
			const slideId = hash.replace('slide-', '')
			setIndexById(slideId)
		}
	}, [setIndexById])

	useEffect(() => {
		const currentSlide = slides[currentIndex]
		if (currentSlide) {
			window.history.replaceState(null, '', `#slide-${currentSlide.id}`)
		}
	}, [currentIndex, slides])

	const value: SlidesContextType = {
		slides,
		currentIndex,
		total,
		setCurrentIndex,
		setIndexById,
		next,
		prev,
		goToFirst,
		goToLast,
		getCurrentSlide,
	}

	return <SlidesContext.Provider value={value}>{children}</SlidesContext.Provider>
}

export function useSlidesRegistry(): SlidesContextType {
	const context = useContext(SlidesContext)
	if (context === undefined) {
		throw new Error('useSlidesRegistry debe usarse dentro de un SlidesProvider')
	}
	return context
}
