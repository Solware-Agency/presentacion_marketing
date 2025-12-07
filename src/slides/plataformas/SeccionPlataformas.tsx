'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PortadaPlataformas } from './PortadaPlataformas'
import { DetallePlataforma } from './DetallePlataforma'
import { InstagramFacebook } from './InstagramFacebook'
import { type PlataformaKey } from './data'

interface SeccionPlataformasProps {
	onRequestNext?: () => void
}

type VistaType = 'intro' | 'instagram-facebook' | PlataformaKey

export function SeccionPlataformas({ onRequestNext }: SeccionPlataformasProps) {
	const [indiceInterno, setIndiceInterno] = useState(0)

	const secuencia: VistaType[] = [
		'intro',
		'website',
		'linkedin',
		'instagram-facebook',
		'email',
		'whatsapp',
		'intro',
		'youtube',
		'tiktok'
	]

	const avanzar = () => {
		if (indiceInterno < secuencia.length - 1) {
			setIndiceInterno(indiceInterno + 1)
		} else {
			onRequestNext?.()
		}
	}

	const retroceder = () => {
		if (indiceInterno > 0) {
			setIndiceInterno(indiceInterno - 1)
		}
	}

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.key === ' ') {
				e.preventDefault()
				avanzar()
			} else if (e.key === 'ArrowLeft') {
				e.preventDefault()
				retroceder()
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [indiceInterno])

	const vistaActual = secuencia[indiceInterno]

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={indiceInterno}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3, ease: 'easeOut' }}
				className="w-full min-h-screen"
			>
				{vistaActual === 'intro' ? (
					<PortadaPlataformas onNext={avanzar} onPrev={retroceder} esSegundaVez={indiceInterno === 6} />
				) : vistaActual === 'instagram-facebook' ? (
					<InstagramFacebook onNext={avanzar} onPrev={retroceder} />
				) : (
					<DetallePlataforma plataforma={vistaActual as PlataformaKey} onNext={avanzar} onPrev={retroceder} />
				)}
			</motion.div>
		</AnimatePresence>
	)
}
