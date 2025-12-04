'use client'

import Particles from '@src/components/ui/Particles'
import { CodeXml } from 'lucide-react'

export function EstrategiaPortada() {
	return (
		<div className="bg-gradient-to-br from-[#1e0c2f] via-[#2a1350] to-[#4b1c7a] w-screen h-screen flex items-center justify-center overflow-hidden">
			<Particles />
			<div className="flex flex-col items-center z-10">
				<div className="mb-12">
					<h1 className="text-white text-center font-bold text-8xl font-sans flex items-center justify-center gap-4">
						<CodeXml className="w-24 h-24 stroke-2 text-[#3b82f6]" />
						<span>Solware</span>
					</h1>
				</div>
				<h2 className="text-white/95 text-center text-6xl font-bold mb-4">ESTRATEGIA DIGITAL</h2>
				<div className="mt-8 text-[#dbeafe] text-3xl text-center leading-relaxed">
					<p>Ana Fraute</p>
					<p>María Jesús Vallejo</p>
					<p>Claudia Castro</p>
				</div>
			</div>
		</div>
	)
}
