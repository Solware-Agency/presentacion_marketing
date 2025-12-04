'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@src/lib/utils'

interface BotonPrimarioProps {
	children: ReactNode
	onClick?: () => void
	disabled?: boolean
	tipo?: 'button' | 'submit' | 'reset'
	ariaLabel?: string
	className?: string
	variante?: 'primario' | 'secundario' | 'exito' | 'peligro'
}

export function BotonPrimario({
	children,
	onClick,
	disabled = false,
	tipo = 'button',
	ariaLabel,
	className,
	variante = 'primario',
}: BotonPrimarioProps) {
	const variantes = {
		primario: 'bg-solware-primary hover:bg-solware-primary-hover',
		secundario: 'bg-solware-morado hover:bg-solware-morado/90',
		exito: 'bg-solware-verde hover:bg-solware-verde/90',
		peligro: 'bg-solware-fucsia hover:bg-solware-fucsia/90',
	}

	return (
		<motion.button
			type={tipo}
			onClick={onClick}
			disabled={disabled}
			aria-label={ariaLabel}
			whileHover={{ scale: disabled ? 1 : 1.05 }}
			whileTap={{ scale: disabled ? 1 : 1 }}
			className={cn(
				'text-white font-semibold px-5 py-3 rounded-xl',
				'transition duration-300 ease-in-out',
				'active:scale-100',
				'disabled:opacity-50 disabled:cursor-not-allowed',
				'focus:outline-none focus:ring-2 focus:ring-solware-primary focus:ring-offset-2 focus:ring-offset-gray-900',
				variantes[variante],
				className,
			)}
		>
			{children}
		</motion.button>
	)
}
