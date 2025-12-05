import Link from 'next/link'
import { Button } from '@src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@src/components/ui/card'
import { Play, Presentation } from 'lucide-react'

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-[#271944] via-[#34182f] to-[#1f2937] flex items-center justify-center">
			<div className="container mx-auto px-4 py-16">
				<div className="flex justify-center items-center">
					<Card className="hover:shadow-2xl transition-shadow border-white/10 bg-white/5 backdrop-blur-sm max-w-2xl w-full">
						<CardHeader className="text-center pt-10 pb-6">
							<div className="w-20 h-20 bg-[#3b82f6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
								<Presentation className="w-10 h-10 text-[#3b82f6]" />
							</div>
							<CardTitle className="text-5xl font-bold text-white mb-3">
								Presentación interactiva
							</CardTitle>
							<p className="text-lg text-white/80 max-w-lg mx-auto">
								Inicia la presentación y navega con las flechas o la barra espaciadora.
							</p>
						</CardHeader>
						<CardContent className="text-center pb-10">
							<Link href="/slides">
								<Button
									size="lg"
									className="w-full bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white font-semibold rounded-xl px-6 py-6 text-lg transition focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900"
								>
									<Play className="w-5 h-5 mr-2" />
									Iniciar presentación
								</Button>
							</Link>
							<p className="text-[#dbeafe] text-sm mt-6">
								Sugerencia: usa <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Espacio</kbd> o{' '}
								<kbd className="px-2 py-1 bg-white/10 rounded text-xs">→</kbd> para avanzar
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
