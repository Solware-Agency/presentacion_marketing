'use client'

import Particles from '@src/components/ui/Particles'
import { CodeXml, ArrowUp } from 'lucide-react'
import { Qr } from '@src/components/Qr'

export function Portada() {
	return (
		<div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 w-full min-h-screen flex items-center justify-center py-8 px-4 relative">
			<Particles />
			<div className="flex flex-col items-center">
				<div className="mb-6 sm:mb-8">
					<h1 className="text-blue-100 text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans flex items-center justify-center gap-1 sm:gap-2 px-2 leading-tight">
						{' '}
						<CodeXml className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 stroke-2" /> Solware
					</h1>
				</div>
				<p className="text-white/90 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold px-2">
					Sistema Administrativo Web para Laboratorios y Clínicas
				</p>
				<div className="mt-6 sm:mt-8 mb-6 sm:mb-8 text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl italic px-2">Eugenio Andreone y Jesús Freites - Caracas, 2025</div>
				<Qr />
				<p className="text-white text-3xl font-bold italic flex flex-col items-center justify-center gap-1 mt-3">
					<ArrowUp className="w-6 h-6 animate-bounce" /> Escanea el QR para ver la presentación
				</p>
			</div>
		</div>
	)
}
