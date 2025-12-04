'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedList } from '@src/components/AnimatedElements'

export function ObjetivosDigitales() {
	const objetivosSolware = [
		'Aumentar en un 200% las impresiones orgánicas mensuales del sitio web y duplicar el número de keywords posicionadas en el top 10 de Google.',
		'Incrementar en un 150% el alcance mensual combinado en Instagram y LinkedIn mediante contenidos basados en pilares definidos.',
		'Aumentar en un 200% el tráfico mensual al sitio web, con al menos 50% del tráfico de canales orgánicos.',
	]

	const objetivosSolhub = [
		'Generar al menos 120 leads calificados del sector salud mediante pauta en Google Ads, LinkedIn y formularios web.',
		'Aumentar el tráfico mensual a la landing de Solhub en un 300% y alcanzar 10,000 visitas acumuladas.',
		'Publicar al menos 3 casos trimestrales reales de laboratorios clientes en canales digitales clave.',
	]

	return (
		<div className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-screen h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
			<SlideTitle title="Objetivos Digitales" gradientColor="from-[#3b82f6] to-[#bc81f8]" />

			<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
				<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#3b82f6]/30">
					<h3 className="text-[#3b82f6] text-3xl font-bold mb-6">Solware</h3>
					<AnimatedList items={objetivosSolware} delay={0.2} className="text-white/90 text-base leading-relaxed space-y-3" />
				</div>

				<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#16a34a]/30">
					<h3 className="text-[#16a34a] text-3xl font-bold mb-6">Solhub</h3>
					<AnimatedList items={objetivosSolhub} delay={0.4} className="text-white/90 text-base leading-relaxed space-y-3" />
				</div>
			</div>
		</div>
	)
}
