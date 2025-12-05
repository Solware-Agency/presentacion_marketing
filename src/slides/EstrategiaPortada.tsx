'use client'

import Particles from '@src/components/ui/Particles'
import { LogoCorner } from '@src/components/LogoCorner'

export function EstrategiaPortada() {
	return (
		<div className="bg-gradient-to-br from-[#1e0c2f] via-[#2a1350] to-[#4b1c7a] w-screen h-screen flex items-center justify-center overflow-hidden relative">
			<LogoCorner />
			<Particles />
			<div className="flex flex-col items-center z-10">
				<div className="mb-1">
					<img 
						src="/SOLWARE_-_2.png" 
						alt="Logo Solware" 
						className="object-contain max-w-[400px] max-h-[400px]"
						style={{ width: 'auto', height: 'auto' }}
						onError={(e) => {
							console.error('Error cargando imagen:', e);
							e.currentTarget.src = '/images.png';
						}}
					/>
				</div>
				<h2 className="text-white/100 text-center text-6xl font-bold mb-10">ESTRATEGIA DIGITAL</h2>
				<div className="mt-4 text-[#dbeafe] text-3xl text-center leading-relaxed">
					<p>Ana Fraute</p>
					<p>María Jesús Vallejo</p>
					<p>Claudia Castro</p>
				</div>
			</div>
		</div>
	)
}
