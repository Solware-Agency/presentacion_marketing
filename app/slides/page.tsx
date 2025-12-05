'use client'

import { useState, useRef, useMemo, useEffect } from 'react'
import { DeckControls } from '@src/components/DeckControls'
import { TimerWrapper } from '@src/components/TimerWrapper'
import { Logo } from '@src/components/Logo'
import { FadeTransition } from '@src/components/SlideTransition'
import { useSlideAnimations } from '@src/hooks/useSlideAnimations'
import {
	EstrategiaPortada,
	QuienEsSolware,
	PropuestaValor,
	AnalisisMacro,
	MicroentornoMonartechAvila,
	VentajasOportunidades,
	VentajasOportunidadesDos,
	MicroentornoInboundInfoLab,
	ObjetivosComerciales,
	ObjetivosDigitales,
	BuyerPersonas,
	PlataformasBuyerPersona,
	ObservacionesSeo,
	PilaresContenido,
	SeccionPlataformas,
	PublicidadDigital,
	PlanAccion,
	AgradecimientoFinal,
} from '@src/slides/index'

const slides = [
	{
		id: 'portada',
		component: EstrategiaPortada,
	},
	{
		id: 'quien-es-solware',
		component: QuienEsSolware,
	},
	{
		id: 'propuesta-valor',
		component: PropuestaValor,
	},
	{
		id: 'analisis-macro',
		component: AnalisisMacro,
	},
	{
		id: 'microentorno-monartech-avila',
		component: MicroentornoMonartechAvila,
	},
	{
		id: 'ventajas-oportunidades',
		component: VentajasOportunidadesDos,
	},
	{
		id: 'microentorno-inbound-infolab',
		component: MicroentornoInboundInfoLab,
	},
	{
		id: 'ventajas-oportunidades-dos',
		component: VentajasOportunidades,
	},
	{
		id: 'objetivos-comerciales',
		component: ObjetivosComerciales,
	},
	{
		id: 'objetivos-digitales',
		component: ObjetivosDigitales,
	},
	{
		id: 'buyer-personas',
		component: BuyerPersonas,
	},
	{
		id: 'plataformas-buyer-persona',
		component: PlataformasBuyerPersona,
	},
	{
		id: 'observaciones-seo',
		component: ObservacionesSeo,
	},
	{
		id: 'pilares-contenido',
		component: PilaresContenido,
	},
	{
		id: 'plataformas-digitales',
		component: SeccionPlataformas,
	},
	{
		id: 'publicidad-digital',
		component: PublicidadDigital,
	},
	{
		id: 'plan-accion',
		component: PlanAccion,
	},
	{
		id: 'agradecimiento',
		component: AgradecimientoFinal,
	},
]

export default function SlidesPage() {
	const [slideActual, setSlideActual] = useState(0)
	const [mostrarInteractividad, setMostrarInteractividad] = useState(false)
	const [timerIniciado, setTimerIniciado] = useState(false)
	const previousSlideRef = useRef(0)

	const totalSlides = slides.length
	const { getTransitionDirection } = useSlideAnimations()

	const cambiarSlide = (nuevoSlide: number) => {
		if (nuevoSlide >= 0 && nuevoSlide < totalSlides) {
			previousSlideRef.current = slideActual
			setSlideActual(nuevoSlide)
		}
	}

	const toggleInteractividad = () => {
		setMostrarInteractividad(!mostrarInteractividad)
	}

	useEffect(() => {
		if (slideActual === 1) {
			setTimerIniciado(true)
		} else if (slideActual === 0) {
			setTimerIniciado(false)
		}
	}, [slideActual])

	const direction = getTransitionDirection(previousSlideRef.current, slideActual)

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
		<div className="h-screen w-screen overflow-hidden">
			<DeckControls
				slideActual={slideActual}
				totalSlides={totalSlides}
				onCambiarSlide={cambiarSlide}
				onToggleInteractividad={toggleInteractividad}
				participantes={0}
			/>

			<div className="h-full w-full overflow-hidden relative">
				<FadeTransition slideIndex={slideActual} direction={direction} className="w-full h-full">
					{(() => {
						const SlideComponent = slides[slideActual].component
						const currentSlideId = slides[slideActual].id

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
								<SlideComponent
									onFinish={() => cambiarSlide(0)}
									onPrevious={() => cambiarSlide(slideActual - 1)}
								/>
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
