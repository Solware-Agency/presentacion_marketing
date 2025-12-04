'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@src/lib/utils'

interface EscalaLikertProps {
	pregunta: string
	onChange?: (valor: number) => void
	valorInicial?: number
	className?: string
}

const opciones = [
	{ valor: 1, etiqueta: 'Totalmente en desacuerdo', color: 'solware-disagree-strong' },
	{ valor: 2, etiqueta: 'En desacuerdo', color: 'solware-disagree' },
	{ valor: 3, etiqueta: 'Neutral', color: 'white/80' },
	{ valor: 4, etiqueta: 'De acuerdo', color: 'solware-agree' },
	{ valor: 5, etiqueta: 'Totalmente de acuerdo', color: 'solware-agree' },
]

export function EscalaLikert({ pregunta, onChange, valorInicial, className }: EscalaLikertProps) {
	const [seleccionado, setSeleccionado] = useState<number | null>(valorInicial || null)

	const manejarSeleccion = (valor: number) => {
		setSeleccionado(valor)
		onChange?.(valor)
	}

	return (
		<div className={cn('w-full', className)}>
			<h3 className="text-white text-lg font-semibold mb-4">{pregunta}</h3>
			<div className="flex flex-col md:flex-row gap-3">
				{opciones.map((opcion) => {
					const estaSeleccionado = seleccionado === opcion.valor
					return (
						<motion.button
							key={opcion.valor}
							onClick={() => manejarSeleccion(opcion.valor)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={cn(
								'flex-1 py-3 px-4 rounded-xl',
								'transition duration-300 ease-in-out',
								'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900',
								'border-2',
								estaSeleccionado
									? `border-${opcion.color} bg-${opcion.color}/20`
									: 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40',
								estaSeleccionado && `focus:ring-${opcion.color}`,
								!estaSeleccionado && 'focus:ring-white/50',
							)}
							style={{
								borderColor: estaSeleccionado
									? opcion.color.includes('/')
										? 'rgba(255, 255, 255, 0.8)'
										: opcion.color === 'solware-disagree-strong'
											? '#ce609c'
											: opcion.color === 'solware-disagree'
												? '#bc81f8'
												: '#3aa465'
									: undefined,
								backgroundColor: estaSeleccionado
									? opcion.color.includes('/')
										? 'rgba(255, 255, 255, 0.1)'
										: opcion.color === 'solware-disagree-strong'
											? 'rgba(206, 96, 156, 0.2)'
											: opcion.color === 'solware-disagree'
												? 'rgba(188, 129, 248, 0.2)'
												: 'rgba(58, 164, 101, 0.2)'
									: undefined,
							}}
							aria-label={`${opcion.etiqueta} - ${opcion.valor} de 5`}
							aria-pressed={estaSeleccionado}
						>
							<div className="flex flex-col items-center gap-1">
								<span
									className={cn('text-2xl font-bold', estaSeleccionado ? 'text-white' : 'text-white/60')}
									style={{
										color: estaSeleccionado
											? opcion.color.includes('/')
												? 'rgba(255, 255, 255, 0.9)'
												: opcion.color === 'solware-disagree-strong'
													? '#ce609c'
													: opcion.color === 'solware-disagree'
														? '#bc81f8'
														: '#3aa465'
											: undefined,
									}}
								>
									{opcion.valor}
								</span>
								<span className={cn('text-xs text-center', estaSeleccionado ? 'text-white/90' : 'text-white/50')}>{opcion.etiqueta}</span>
							</div>
						</motion.button>
					)
				})}
			</div>
		</div>
	)
}
