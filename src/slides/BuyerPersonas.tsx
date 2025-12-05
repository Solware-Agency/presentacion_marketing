'use client'

import { useEffect, useCallback, useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { User, MapPin, Building2, Calendar, UserRound } from 'lucide-react'
import { LogoCorner } from '@src/components/LogoCorner'

type PersonaId = 'carlos' | 'valeria' | 'rafael'

interface Persona {
	id: PersonaId
	nombre: string
	sexo: string
	edad: string
	ubicacion: string
	tipoNegocio: string
	insights: readonly string[]
	problema: string
	motivadores: string[]
	inhibidores: string[]
	comportamiento: string[]
}

const PERSONAS: Persona[] = [
	{
		id: 'carlos',
		nombre: 'Carlos Confianza',
		sexo: 'Masculino',
		edad: '40–50 años',
		ubicacion: 'Venezuela',
		tipoNegocio: 'Empresa familiar industrial o B2B',
		insights: ['Busca formalidad', 'Quiere credibilidad', 'Proceso simple'],
		problema:
			'Su negocio tiene trayectoria y mueve buen volumen, pero no tiene presencia digital, lo que genera desconfianza externa. Entiende que hoy la web es sinónimo de autoridad: si no existe online, parece informal o sospechoso.',
		motivadores: ['Credibilidad', 'Seguridad', 'Formalidad'],
		inhibidores: ['Desconfianza', 'Incertidumbre', 'Complejidad técnica'],
		comportamiento: ['Compra por necesidad', 'Proceso simple', 'Resultados rápidos'],
	},
	{
		id: 'valeria',
		nombre: 'Valeria Ventas',
		sexo: 'Femenino',
		edad: '30–45 años',
		ubicacion: 'Miami, EE. UU.',
		tipoNegocio: 'Servicios o educación con foco en captación',
		insights: ['Resultados medibles', 'Proactiva', 'Evalúa portafolio'],
		problema:
			'Sabe que una web debe atraer y convertir; busca un portal claro y amigable para lograr acciones (inscribirse, pedir cita, contactar, comprar). Ha investigado y es específica con sus solicitudes.',
		motivadores: ['Crecimiento', 'Conversión', 'Profesionalismo'],
		inhibidores: ['Lentitud', 'Falta de estrategia', 'Resultados débiles'],
		comportamiento: ['Proactiva', 'Evalúa portafolio/casos', 'Decide por resultados medibles'],
	},
	{
		id: 'rafael',
		nombre: 'Dr. Rafael Racionaliza',
		sexo: 'Masculino',
		edad: '30–45 años',
		ubicacion: 'Caracas',
		tipoNegocio: 'Dueño/director médico o gerente general del laboratorio/clínica',
		insights: ['Eficiencia', 'Control', 'Prestigio'],
		problema:
			'Opera con procesos largos y desordenados (registro manual, gestión lenta, información dispersa). Sabe que esto frena la eficiencia y aumenta errores; necesita una solución clara que ordene sin complicar.',
		motivadores: ['Eficiencia', 'Control', 'Prestigio'],
		inhibidores: ['Costo', 'Escepticismo', 'Resistencia al cambio'],
		comportamiento: ['Decide con evidencia', 'Demostraciones/impacto', 'Acompañamiento y soporte'],
	},
]

interface Props {
	onRequestNext?: () => void
}

export function BuyerPersonas({ onRequestNext }: Props) {
	const [focus, setFocus] = useState<PersonaId | null>(null)
	const [step, setStep] = useState(0)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (step === 1) {
			setFocus('carlos')
		} else if (step === 2) {
			setFocus(null)
		} else if (step === 3) {
			setFocus('valeria')
		} else if (step === 4) {
			setFocus(null)
		} else if (step === 5) {
			setFocus('rafael')
		} else if (step === 6) {
			setFocus(null)
		} else if (step === 7) {
			onRequestNext?.()
			setStep(0)
		}
	}, [step, onRequestNext])

	const advance = useCallback(() => {
		setStep((s) => s + 1)
	}, [])

	const goBack = useCallback(() => {
		setStep((s) => Math.max(0, s - 1))
	}, [])

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect()
				const clickX = e.clientX - rect.left
				const halfWidth = rect.width / 2

				if (clickX > halfWidth) {
					advance()
				} else {
					goBack()
				}
			}
		},
		[advance, goBack],
	)

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.code === 'Space') {
				e.preventDefault()
				advance()
			}
			if (e.key === 'ArrowLeft') {
				e.preventDefault()
				goBack()
			}
			if (e.key === 'Escape' && focus) {
				e.preventDefault()
				advance()
			}
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [advance, goBack, focus])

	return (
		<section
			ref={containerRef}
			data-slide="buyer-personas"
			aria-label="Buyer Personas"
			onClick={handleClick}
			className="w-screen h-screen overflow-hidden bg-gradient-to-br from-[#111827] to-[#1e293b] text-white cursor-pointer relative"
		>
			<LogoCorner />
			<div
				className={`mx-auto max-w-7xl h-full flex flex-col p-8 transition-opacity duration-300 ${focus ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
				aria-hidden={focus ? 'true' : 'false'}
			>
				<header className="text-center mb-8 h-24 flex flex-col justify-center">
					<h1 className="text-4xl font-bold mb-2" style={{ color: '#41e2b8' }}>Buyer Personas</h1>
					<div className="w-32 h-1 bg-gradient-to-r from-[#3b82f6] via-[#bc81f8] to-[#ce609c] mx-auto rounded-full"></div>
				</header>

				<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 place-content-center">
					{PERSONAS.map((p) => (
						<TarjetaPersonaCompacta key={p.id} persona={p} />
					))}
				</div>

				<p className="mt-6 text-center text-[#dbeafe] font-bold">
					Presiona <span className="font-semibold">→</span> o <span className="font-semibold">Espacio</span> para explorar cada perfil
				</p>
			</div>

			<AnimatePresence>{focus && <ModalPersona persona={PERSONAS.find((x) => x.id === focus)!} />}</AnimatePresence>
		</section>
	)
}

function TarjetaPersonaCompacta({ persona }: { persona: Persona }) {
	return (
		<motion.div
			layoutId={`card-${persona.id}`}
			className="text-left bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition duration-300 ease-in-out hover:scale-105 hover:border-[#3b82f6]/50"
		>
			<div className="flex items-center gap-3 mb-6">
				<User className="w-6 h-6 text-white/90" aria-hidden="true" />
				<h3 className="text-2xl font-semibold">{persona.nombre}</h3>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="flex items-center gap-2 text-white/90 text-sm" aria-label={`Sexo: ${persona.sexo}`}>
					<UserRound className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
					<span className="font-bold">{persona.sexo}</span>
				</div>

				<div className="flex items-center gap-2 text-white/90 text-sm" aria-label={`Edad: ${persona.edad}`}>
					<Calendar className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
					<span className="font-bold">{persona.edad}</span>
				</div>

				<div className="flex items-center gap-2 text-white/90 text-sm" aria-label={`Ubicación: ${persona.ubicacion}`}>
					<MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
					<span className="font-bold">{persona.ubicacion}</span>
				</div>

				<div className="flex items-start gap-2 text-white/90 text-sm md:col-span-2" aria-label={`Tipo de negocio: ${persona.tipoNegocio}`}>
					<Building2 className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
					<span className="line-clamp-2 font-bold">{persona.tipoNegocio}</span>
				</div>
			</div>

			<div className="mt-4 flex flex-wrap gap-2" role="list" aria-label="Características clave">
				{persona.insights.map((insight) => (
					<span
						key={insight}
						role="listitem"
						className="inline-flex rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-white/80 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] font-bold"
					>
						{insight}
					</span>
				))}
			</div>
		</motion.div>
	)
}

function ModalPersona({ persona }: { persona: Persona }) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40"
				aria-hidden="true"
			/>
			<motion.div
				layoutId={`card-${persona.id}`}
				role="dialog"
				aria-modal="true"
				aria-label={`Detalle de ${persona.nombre}`}
				initial={{ opacity: 0, y: 8, scale: 0.98 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				exit={{ opacity: 0, y: 8, scale: 0.98 }}
				transition={{ duration: 0.35, ease: 'easeOut' }}
				className="fixed inset-0 grid place-items-center p-4 z-50 pointer-events-none"
			>
				<div className="w-[90vw] md:w-[56vw] max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-[#1f2937] via-[#271944] to-[#34182f] p-8 shadow-2xl text-white pointer-events-auto">
					<div className="flex items-start justify-between gap-4">
						<div>
							<h3 className="text-3xl font-semibold">{persona.nombre}</h3>
							<div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-white/70 text-sm">
								<span className="flex items-center gap-2 font-bold" aria-label={`Sexo: ${persona.sexo}`}>
									<UserRound className="w-4 h-4" aria-hidden="true" />
									{persona.sexo}
								</span>
								<span className="flex items-center gap-2 font-bold" aria-label={`Edad: ${persona.edad}`}>
									<Calendar className="w-4 h-4" aria-hidden="true" />
									{persona.edad}
								</span>
								<span className="flex items-center gap-2 font-bold" aria-label={`Ubicación: ${persona.ubicacion}`}>
									<MapPin className="w-4 h-4" aria-hidden="true" />
									{persona.ubicacion}
								</span>
							</div>
							<div className="mt-2 flex items-start gap-2 text-white/70 text-sm">
								<Building2 className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
								<span className="font-bold">{persona.tipoNegocio}</span>
							</div>
						</div>
					</div>

					<div className="mt-6">
						<h4 className="text-lg font-semibold text-[#dbeafe]">Problema</h4>
						<p className="mt-2 text-white/90 leading-relaxed text-lg font-bold">{persona.problema}</p>
					</div>

					<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
						<ChipGroup titulo="Motivadores" chips={persona.motivadores} />
						<ChipGroup titulo="Inhibidores" chips={persona.inhibidores} />
						<ChipGroup titulo="Comportamiento" chips={persona.comportamiento} />
					</div>

					<p className="mt-8 text-center text-[#dbeafe]/70 text-sm font-bold">
						Presiona <span className="font-semibold">→</span> para continuar o <span className="font-semibold">←</span> para retroceder
					</p>
				</div>
			</motion.div>
		</>
	)
}

function ChipGroup({ titulo, chips }: { titulo: string; chips: string[] }) {
	return (
		<div>
			<h5 className="text-base font-semibold text-white/90 mb-3">{titulo}</h5>
			<div className="flex flex-wrap gap-2">
				{chips.map((c) => (
					<span
						key={c}
						className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white/90 transition duration-300 ease-in-out"
					>
						{c}
					</span>
				))}
			</div>
		</div>
	)
}
