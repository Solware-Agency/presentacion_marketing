'use client'

import { useEffect, useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { User, MapPin, Building2, X } from 'lucide-react'

type PersonaId = 'carlos' | 'valeria' | 'rafael'

interface Persona {
	id: PersonaId
	nombre: string
	ubicacion: string
	perfil: string
	problema: string
	motivadores: string[]
	inhibidores: string[]
	comportamiento: string[]
	color: string
}

const PERSONAS: Persona[] = [
	{
		id: 'carlos',
		nombre: 'Carlos Confianza',
		ubicacion: 'Venezuela',
		perfil: 'Masculino, 40-50 años · Empresa familiar industrial o B2B',
		problema:
			'Su negocio tiene trayectoria y mueve buen volumen, pero no tiene presencia digital, lo que genera desconfianza externa. Entiende que hoy la web es sinónimo de autoridad: si no existe online, parece informal o sospechoso.',
		motivadores: ['Credibilidad', 'Seguridad', 'Formalidad'],
		inhibidores: ['Desconfianza', 'Incertidumbre', 'Complejidad técnica'],
		comportamiento: ['Compra por necesidad', 'Proceso simple', 'Resultados rápidos'],
		color: 'from-[#1f2937] to-[#271944]',
	},
	{
		id: 'valeria',
		nombre: 'Valeria Ventas',
		ubicacion: 'Miami, EE. UU.',
		perfil: 'Femenino, 30-45 años · Servicios/educación con foco en captación',
		problema:
			'Sabe que una web debe atraer y convertir; busca un portal claro y amigable para lograr acciones (inscribirse, pedir cita, contactar, comprar). Ha investigado y es específica con sus solicitudes.',
		motivadores: ['Crecimiento', 'Conversión', 'Profesionalismo'],
		inhibidores: ['Lentitud', 'Falta de estrategia', 'Resultados débiles'],
		comportamiento: ['Proactiva', 'Evalúa portafolio/casos', 'Decide por resultados medibles'],
		color: 'from-[#34182f] to-[#3b82f6]/20',
	},
	{
		id: 'rafael',
		nombre: 'Dr. Rafael Racionaliza',
		ubicacion: 'Caracas',
		perfil: 'Masculino, 30-45 años · Dueño/director médico o gerente',
		problema:
			'Opera con procesos largos y desordenados (registro manual, gestión lenta, información dispersa). Sabe que esto frena la eficiencia y aumenta errores; necesita una solución clara que ordene sin complicar.',
		motivadores: ['Eficiencia', 'Control', 'Prestigio'],
		inhibidores: ['Costo', 'Escepticismo', 'Resistencia al cambio'],
		comportamiento: ['Decide con evidencia', 'Demostraciones/impacto', 'Acompañamiento y soporte'],
		color: 'from-[#1f2937] to-[#3aa465]/20',
	},
]

interface Props {
	onRequestNext?: () => void
}

export function BuyerPersonas({ onRequestNext }: Props) {
	const [focus, setFocus] = useState<PersonaId | null>(null)
	const [step, setStep] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>(0)

	const advance = useCallback(() => {
		setStep((s) => {
			const next = (s + 1) as typeof step
			if (next === 1) setFocus('carlos')
			if (next === 2) setFocus(null)
			if (next === 3) setFocus('valeria')
			if (next === 4) setFocus(null)
			if (next === 5) setFocus('rafael')
			if (next === 6) setFocus(null)
			if (next === 7) {
				onRequestNext?.()
				return 0 as typeof step
			}
			return next
		})
	}, [onRequestNext])

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.code === 'Space') {
				e.preventDefault()
				advance()
			}
			if (e.key === 'Escape') {
				setFocus(null)
			}
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [advance])

	return (
		<section
			data-slide="buyer-personas"
			aria-label="Buyer Personas"
			className="w-screen h-screen overflow-hidden bg-gradient-to-br from-[#111827] to-[#1e293b] text-white"
		>
			<div className="mx-auto max-w-7xl h-full flex flex-col p-8">
				<header className="text-center">
					<h1 className="text-5xl md:text-6xl font-bold">Buyer Personas</h1>
					<div className="mx-auto mt-3 h-1 w-32 rounded-full bg-gradient-to-r from-[#3b82f6] via-[#bc81f8] to-[#ce609c]" />
				</header>

				<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 place-content-center">
					{PERSONAS.map((p) => (
						<TarjetaPersona key={p.id} persona={p} onOpen={() => setFocus(p.id)} />
					))}
				</div>

				<p className="mt-6 text-center text-[#dbeafe]">
					Presiona <span className="font-semibold">→</span> o <span className="font-semibold">Espacio</span> para explorar cada perfil
				</p>
			</div>

			<AnimatePresence>{focus && <ModalPersona persona={PERSONAS.find((x) => x.id === focus)!} onClose={() => setFocus(null)} />}</AnimatePresence>
		</section>
	)
}

function TarjetaPersona({ persona, onOpen }: { persona: Persona; onOpen: () => void }) {
	return (
		<motion.button
			onClick={onOpen}
			layoutId={`card-${persona.id}`}
			aria-label={`Ver detalle de ${persona.nombre}`}
			className="text-left bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:scale-105 hover:border-[#3b82f6]/50 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
		>
			<div className="flex items-center gap-3">
				<User className="w-6 h-6 text-white/90" aria-hidden />
				<h3 className="text-2xl font-semibold">{persona.nombre}</h3>
			</div>
			<div className="mt-3 flex items-center gap-3 text-white/80">
				<Building2 className="w-5 h-5" aria-hidden />
				<span className="text-sm">{persona.perfil}</span>
			</div>
			<div className="mt-1 flex items-center gap-3 text-white/80">
				<MapPin className="w-5 h-5" aria-hidden />
				<span className="text-sm">{persona.ubicacion}</span>
			</div>
			<p className="mt-4 text-white/90 line-clamp-3">{persona.problema}</p>
		</motion.button>
	)
}

function ModalPersona({ persona, onClose }: { persona: Persona; onClose: () => void }) {
	return (
		<>
			<motion.div
				onClick={onClose}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 bg-black/60 z-40"
				aria-hidden
			/>
			<motion.div
				layoutId={`card-${persona.id}`}
				role="dialog"
				aria-label={`Detalle de ${persona.nombre}`}
				initial={{ opacity: 0, y: 8, scale: 0.98 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				exit={{ opacity: 0, y: 8, scale: 0.98 }}
				transition={{ duration: 0.35, ease: 'easeOut' }}
				className="fixed inset-0 grid place-items-center p-4 z-50"
			>
				<div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-br from-[#1f2937] via-[#271944] to-[#34182f] p-6 shadow-xl text-white">
					<div className="flex items-start justify-between gap-4">
						<h3 className="text-2xl font-semibold">{persona.nombre}</h3>
						<button
							onClick={onClose}
							aria-label="Cerrar"
							className="p-2 rounded-lg hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
						>
							<X className="w-5 h-5" aria-hidden />
						</button>
					</div>

					<div className="mt-4">
						<h4 className="font-semibold text-[#dbeafe]">Problema</h4>
						<p className="mt-1 text-white/90 leading-relaxed">{persona.problema}</p>
					</div>

					<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
						<ChipGroup titulo="Motivadores" chips={persona.motivadores} />
						<ChipGroup titulo="Inhibidores" chips={persona.inhibidores} />
						<ChipGroup titulo="Comportamiento" chips={persona.comportamiento} />
					</div>
				</div>
			</motion.div>
		</>
	)
}

function ChipGroup({ titulo, chips }: { titulo: string; chips: string[] }) {
	return (
		<div>
			<h5 className="text-sm font-semibold text-white/90">{titulo}</h5>
			<div className="mt-2 flex flex-wrap gap-2">
				{chips.map((c) => (
					<span
						key={c}
						className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/90 transition duration-300 ease-in-out"
					>
						{c}
					</span>
				))}
			</div>
		</div>
	)
}
