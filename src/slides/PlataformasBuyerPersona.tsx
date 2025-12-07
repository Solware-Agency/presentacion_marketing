'use client'

import { useEffect, useCallback, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogoCorner } from '@src/components/LogoCorner'

type PersonaId = 'carlos' | 'valeria' | 'rafael'

interface PlataformaData {
	nombre: string
	carlos: number
	valeria: number
	rafael: number
}

const PLATAFORMAS: PlataformaData[] = [
	{ nombre: 'Website', carlos: 5, valeria: 5, rafael: 5 },
	{ nombre: 'Instagram', carlos: 3, valeria: 5, rafael: 2 },
	{ nombre: 'LinkedIn', carlos: 4, valeria: 4, rafael: 5 },
	{ nombre: 'Email marketing', carlos: 4, valeria: 4, rafael: 4 },
	{ nombre: 'TikTok', carlos: 1, valeria: 3, rafael: 1 },
]

const PERSONAS = {
	carlos: 'Carlos Confianza',
	valeria: 'Valeria Ventas',
	rafael: 'Dr. Rafael Racionaliza',
}

const getLikertColor = (value: number) => {
	switch (value) {
		case 5:
			return { bg: 'bg-[#3aa465]/20', text: 'text-[#3aa465]' }
		case 4:
			return { bg: 'bg-[#5d9ff0]/20', text: 'text-[#5d9ff0]' }
		case 3:
			return { bg: 'bg-[#ecb424]/20', text: 'text-[#ecb424]' }
		case 2:
			return { bg: 'bg-[#bc81f8]/20', text: 'text-[#bc81f8]' }
		case 1:
			return { bg: 'bg-[#ce609c]/20', text: 'text-[#ce609c]' }
		default:
			return { bg: 'bg-white/10', text: 'text-white' }
	}
}

interface Props {
	onRequestNext?: () => void
}

export function PlataformasBuyerPersona({ onRequestNext }: Props) {
	const [step, setStep] = useState(0)
	const [personaResaltada, setPersonaResaltada] = useState<PersonaId | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (step === 0) {
			setPersonaResaltada(null)
		} else if (step === 1) {
			setPersonaResaltada('carlos')
		} else if (step === 2) {
			setPersonaResaltada('valeria')
		} else if (step === 3) {
			setPersonaResaltada('rafael')
		} else if (step === 4) {
			setPersonaResaltada(null)
			onRequestNext?.()
			setStep(0)
		}
	}, [step, onRequestNext])

	const avanzar = useCallback(() => {
		setStep((s) => s + 1)
	}, [])

	const retroceder = useCallback(() => {
		setStep((s) => Math.max(0, s - 1))
	}, [])

	const manejarClick = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect()
				const clickX = e.clientX - rect.left
				const mitadAncho = rect.width / 2

				if (clickX > mitadAncho) {
					avanzar()
				} else {
					retroceder()
				}
			}
		},
		[avanzar, retroceder],
	)

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.code === 'Space') {
				e.preventDefault()
				avanzar()
			}
			if (e.key === 'ArrowLeft') {
				e.preventDefault()
				retroceder()
			}
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [avanzar, retroceder])

	const obtenerTextoCaption = () => {
		if (!personaResaltada) return null
		return (
			<motion.p
				initial={{ opacity: 0, y: -8 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -8 }}
				className="text-[#dbeafe] text-sm md:text-base text-center mt-6"
			>
				Enfoque en <span className="font-semibold">{PERSONAS[personaResaltada]}</span>
			</motion.p>
		)
	}

	return (
		<section
			ref={containerRef}
			data-slide="plataformas-buyer-persona"
			aria-label="Plataforma digital relevante para cada buyer persona"
			onClick={manejarClick}
			className="w-full min-h-screen  bg-gray-900 text-white p-8 cursor-pointer flex flex-col relative"
		>
			<LogoCorner />
			<header className="text-center mb-8 h-24 flex flex-col justify-center">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl sm:text-5xl md:text-5xl font-bold mb-2"
					style={{ color: '#41e2b8' }}
				>
					Plataforma digital relevante para cada buyer persona
				</motion.h1>
				<div className="w-40 sm:w-56 md:w-72 h-2 sm:h-2 md:h-2.5 mx-auto rounded-full bg-gradient-to-r from-[#3b82f6] via-[#bc81f8] to-[#ce609c] shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_20px_rgba(188,129,248,0.3),0_0_30px_rgba(206,96,156,0.2)]"></div>
			</header>

			<div className="flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto w-full">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl"
				>
					<table className="w-full border-collapse" role="table">
						<thead>
							<tr className="border-b border-white/10">
								<th
									scope="col"
									className="px-6 py-4 text-left font-semibold text-base lg:text-lg uppercase tracking-wide text-white/90"
								>
									Plataforma
								</th>
								<ColumnaPersona
									nombre="Carlos Confianza"
									resaltada={personaResaltada === 'carlos'}
									atenuada={personaResaltada !== null && personaResaltada !== 'carlos'}
								/>
								<ColumnaPersona
									nombre="Valeria Ventas"
									resaltada={personaResaltada === 'valeria'}
									atenuada={personaResaltada !== null && personaResaltada !== 'valeria'}
								/>
								<ColumnaPersona
									nombre="Dr. Rafael Racionaliza"
									resaltada={personaResaltada === 'rafael'}
									atenuada={personaResaltada !== null && personaResaltada !== 'rafael'}
								/>
							</tr>
						</thead>
						<tbody>
							{PLATAFORMAS.map((plataforma, idx) => (
								<motion.tr
									key={plataforma.nombre}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
									className="border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors duration-300"
								>
									<th scope="row" className="px-6 py-4 text-left font-medium text-white/90">
										{plataforma.nombre}
									</th>
									<CeldaValor
										valor={plataforma.carlos}
										resaltada={personaResaltada === 'carlos'}
										atenuada={personaResaltada !== null && personaResaltada !== 'carlos'}
									/>
									<CeldaValor
										valor={plataforma.valeria}
										resaltada={personaResaltada === 'valeria'}
										atenuada={personaResaltada !== null && personaResaltada !== 'valeria'}
									/>
									<CeldaValor
										valor={plataforma.rafael}
										resaltada={personaResaltada === 'rafael'}
										atenuada={personaResaltada !== null && personaResaltada !== 'rafael'}
									/>
								</motion.tr>
							))}
						</tbody>
					</table>
				</motion.div>

				<AnimatePresence mode="wait">{obtenerTextoCaption()}</AnimatePresence>

				<p className="mt-6 text-center text-[#dbeafe]/70 text-sm font-bold">
					Presiona <span className="font-semibold">→</span> o <span className="font-semibold">Espacio</span> para avanzar, <span className="font-semibold">←</span> para retroceder
				</p>
			</div>
		</section>
	)
}

interface ColumnaPersonaProps {
	nombre: string
	resaltada: boolean
	atenuada: boolean
}

function ColumnaPersona({ nombre, resaltada, atenuada }: ColumnaPersonaProps) {
	return (
		<th
			scope="col"
			className={`px-6 py-4 text-center font-semibold text-base lg:text-lg transition-all duration-300 ease-in-out ${
				resaltada ? 'ring-2 ring-[#3b82f6] ring-offset-2 ring-offset-gray-900 scale-105' : ''
			} ${atenuada ? 'opacity-40' : 'opacity-100'}`}
			aria-label={`Columna para ${nombre}`}
		>
			{nombre}
		</th>
	)
}

interface CeldaValorProps {
	valor: number
	resaltada: boolean
	atenuada: boolean
}

function CeldaValor({ valor, resaltada, atenuada }: CeldaValorProps) {
	const colores = getLikertColor(valor)

	return (
		<td
			className={`px-6 py-4 text-center transition-all duration-300 ease-in-out ${
				resaltada ? 'scale-105' : ''
			} ${atenuada ? 'opacity-40' : 'opacity-100'}`}
		>
			<span
				className={`inline-flex min-w-[2rem] justify-center rounded-full px-3 py-1.5 text-sm font-semibold transition-transform duration-300 ease-in-out ${colores.bg} ${colores.text}`}
			>
				{valor}
			</span>
		</td>
	)
}
