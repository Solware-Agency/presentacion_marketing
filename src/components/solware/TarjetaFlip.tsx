'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { cn } from '@src/lib/utils'

interface TarjetaFlipProps {
	frente: ReactNode
	reverso: ReactNode
	className?: string
	onFlip?: (volteada: boolean) => void
}

export function TarjetaFlip({ frente, reverso, className, onFlip }: TarjetaFlipProps) {
	const [volteada, setVolteada] = useState(false)

	const manejarClick = () => {
		const nuevoEstado = !volteada
		setVolteada(nuevoEstado)
		onFlip?.(nuevoEstado)
	}

	return (
		<div className={cn('relative w-full h-full cursor-pointer', className)} style={{ perspective: '1000px' }} onClick={manejarClick}>
			<motion.div
				className="relative w-full h-full"
				style={{ transformStyle: 'preserve-3d' }}
				animate={{ rotateY: volteada ? 180 : 0 }}
				transition={{ duration: 0.6, ease: 'easeInOut' }}
			>
				<div
					className={cn(
						'absolute inset-0 w-full h-full',
						'bg-white/10 dark:bg-white/10 backdrop-blur-sm',
						'rounded-2xl border border-white/10',
						'p-6',
						'transition duration-300 ease-in-out',
						'hover:border-solware-primary/50 hover:shadow-xl',
					)}
					style={{
						backfaceVisibility: 'hidden',
						WebkitBackfaceVisibility: 'hidden',
					}}
				>
					{frente}
				</div>

				<div
					className={cn(
						'absolute inset-0 w-full h-full',
						'bg-white/10 dark:bg-white/10 backdrop-blur-sm',
						'rounded-2xl border border-white/10',
						'p-6',
						'transition duration-300 ease-in-out',
						'hover:border-solware-primary/50 hover:shadow-xl',
					)}
					style={{
						backfaceVisibility: 'hidden',
						WebkitBackfaceVisibility: 'hidden',
						transform: 'rotateY(180deg)',
					}}
				>
					{reverso}
				</div>
			</motion.div>
		</div>
	)
}
