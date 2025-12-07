'use client'

import { useMemo, useEffect, useState, useRef } from 'react'
import { DeckControls } from '@src/components/DeckControls'
import { TimerWrapper } from '@src/components/TimerWrapper'
import { Logo } from '@src/components/Logo'
import { FadeTransition } from '@src/components/SlideTransition'
import { useSlideAnimations } from '@src/hooks/useSlideAnimations'
import { SlidesProvider, useSlidesRegistry } from '@src/context/SlidesContext'
import { slidesConfig } from '@src/config/slidesConfig'

function SlidesContent() {
	const { slides, currentIndex, setCurrentIndex } = useSlidesRegistry()
	const [timerIniciado, setTimerIniciado] = useState(false)
	const previousSlideRef = useRef(0)

	const { getTransitionDirection } = useSlideAnimations()

	const cambiarSlide = (nuevoSlide: number) => {
		if (nuevoSlide >= 0 && nuevoSlide < slides.length) {
			previousSlideRef.current = currentIndex
			setCurrentIndex(nuevoSlide)
		}
	}

	useEffect(() => {
		if (currentIndex === 1) {
			setTimerIniciado(true)
		} else if (currentIndex === 0) {
			setTimerIniciado(false)
		}
	}, [currentIndex])

	const direction = getTransitionDirection(previousSlideRef.current, currentIndex)

	const timerComponent = useMemo(
		() => (
			<TimerWrapper
				defaultDuration={20 * 60}
				autoStart={timerIniciado}
				onTimeUp={() => {
					console.log('Tiempo del pitch agotado')
				}}
			/>
		),
		[timerIniciado],
	)

	return (
		<div className="min-h-screen w-screen overflow-y-auto overflow-x-hidden">
			<DeckControls />

			<div className="min-h-screen w-full relative">
				<FadeTransition slideIndex={currentIndex} direction={direction} className="w-full min-h-screen">
					{(() => {
						const SlideComponent = slides[currentIndex].component
						const currentSlideId = slides[currentIndex].id

						if (currentSlideId === 'buyer-personas') {
							const plataformasIndex = slides.findIndex((s) => s.id === 'plataformas-buyer-persona')
							return <SlideComponent onRequestNext={() => cambiarSlide(plataformasIndex)} />
						}

						if (currentSlideId === 'plataformas-buyer-persona') {
							const observacionesSeoIndex = slides.findIndex((s) => s.id === 'observaciones-seo')
							return <SlideComponent onRequestNext={() => cambiarSlide(observacionesSeoIndex)} />
						}

						if (currentSlideId === 'plataformas-digitales') {
							const publicidadDigitalIndex = slides.findIndex((s) => s.id === 'publicidad-digital')
							return <SlideComponent onRequestNext={() => cambiarSlide(publicidadDigitalIndex)} />
						}

						if (currentSlideId === 'agradecimiento') {
							return (
								<SlideComponent onFinish={() => cambiarSlide(0)} onPrevious={() => cambiarSlide(currentIndex - 1)} />
							)
						}

						return <SlideComponent />
					})()}
				</FadeTransition>
			</div>

			<Logo />

			{timerComponent}
		</div>
	)
}

export default function SlidesPage() {
	return (
		<SlidesProvider slides={slidesConfig} initialIndex={0}>
			<SlidesContent />
		</SlidesProvider>
	)
}
