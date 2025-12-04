'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@src/lib/utils'

interface FichaSeccionProps {
	titulo: string
	subtitulo?: string
	children: ReactNode
	className?: string
	delay?: number
}

export function FichaSeccion({ titulo, subtitulo, children, className, delay = 0 }: FichaSeccionProps) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: 'easeOut', delay }}
			className={cn('w-full', className)}
		>
			<div className="mb-6">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{titulo}</h2>
				{subtitulo && <p className="text-xl text-solware-difuminado">{subtitulo}</p>}
			</div>
			<div className="text-white/90 leading-relaxed">{children}</div>
		</motion.section>
	)
}
