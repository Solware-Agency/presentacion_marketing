'use client'

import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedCard } from '@src/components/AnimatedElements'
import { LogoCorner } from '@src/components/LogoCorner'
import { Package, BookOpen, MessageSquare, Heart, Globe, Instagram, Linkedin, Facebook, Mail, Youtube, Video } from 'lucide-react'
import { motion } from 'framer-motion'

type TipoPlataforma = 'website' | 'instagram' | 'linkedin' | 'facebook' | 'tiktok' | 'youtube' | 'email'

const PLATAFORMAS_POR_PILAR: Record<string, TipoPlataforma[]> = {
	produccion: ['instagram', 'website', 'linkedin', 'facebook', 'email'],
	decisores: ['instagram', 'website', 'linkedin', 'facebook', 'email', 'tiktok', 'youtube'],
	casos: ['instagram', 'tiktok', 'linkedin'],
	solhub: ['instagram', 'linkedin', 'facebook', 'email', 'tiktok', 'youtube'],
}

const LABELS_PLATAFORMAS: Record<TipoPlataforma, string> = {
	website: 'Sitio Web',
	instagram: 'Instagram',
	linkedin: 'LinkedIn',
	facebook: 'Facebook',
	tiktok: 'TikTok',
	youtube: 'YouTube',
	email: 'Email',
}

interface ChipPlataformaProps {
	tipo: TipoPlataforma
	delay?: number
}

function ChipPlataforma({ tipo, delay = 0 }: ChipPlataformaProps) {
	const getIconoYColor = () => {
		switch (tipo) {
			case 'website':
				return { Icon: Globe, colorClass: 'text-[#3b82f6]', label: 'Abrir Sitio Web' }
			case 'instagram':
				return { Icon: Instagram, colorClass: 'text-pink-400', label: 'Perfil de Instagram' }
			case 'linkedin':
				return { Icon: Linkedin, colorClass: 'text-[#5d9ff0]', label: 'Perfil de LinkedIn' }
			case 'facebook':
				return { Icon: Facebook, colorClass: 'text-blue-500', label: 'Página de Facebook' }
			case 'tiktok':
				return { Icon: Video, colorClass: 'text-fuchsia-400', label: 'Canal de TikTok' }
			case 'youtube':
				return { Icon: Youtube, colorClass: 'text-red-500', label: 'Canal de YouTube' }
			case 'email':
				return { Icon: Mail, colorClass: 'text-rose-400', label: 'Email Marketing' }
			default:
				return { Icon: Globe, colorClass: 'text-white', label: 'Plataforma' }
		}
	}

	const { Icon, colorClass, label } = getIconoYColor()

	return (
		<motion.span
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3, delay }}
			className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-white/90 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-gray-900"
			role="button"
			tabIndex={0}
			aria-label={label}
			title={label}
		>
			<Icon className={`w-4 h-4 ${colorClass}`} aria-hidden="true" />
			<span className="hidden sm:inline">{LABELS_PLATAFORMAS[tipo]}</span>
		</motion.span>
	)
}

interface PilarCardProps {
	id: string
	icon: React.ComponentType<{ className?: string }>
	titulo: string
	subtitulo: string
	descripcion: string
	borderColor: string
	iconBgColor: string
	iconColor: string
	subtituloColor: string
	delay: number
}

function PilarCard({
	id,
	icon: Icon,
	titulo,
	subtitulo,
	descripcion,
	borderColor,
	iconBgColor,
	iconColor,
	subtituloColor,
	delay,
}: PilarCardProps) {
	const plataformas = PLATAFORMAS_POR_PILAR[id] || []

	return (
		<AnimatedCard delay={delay} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border ${borderColor} flex flex-col`}>
			<div className="flex justify-center mb-4">
				<div className={`${iconBgColor} p-4 rounded-full`}>
					<Icon className={`w-10 h-10 ${iconColor}`} />
				</div>
			</div>
			<h3 className="text-white text-xl font-bold text-center mb-2">{titulo}</h3>
			<p className={`${subtituloColor} text-sm font-semibold text-center mb-3`}>{subtitulo}</p>
			<p className="text-white/80 text-sm leading-relaxed text-center mb-4">{descripcion}</p>

			<motion.div
				className="flex flex-wrap items-center justify-center gap-2 mt-auto pt-4 border-t border-white/10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4, delay: delay + 0.3 }}
			>
				{plataformas.map((plataforma, idx) => (
					<ChipPlataforma key={plataforma} tipo={plataforma} delay={delay + 0.4 + idx * 0.1} />
				))}
			</motion.div>
		</AnimatedCard>
	)
}

export function PilaresContenido() {
	return (
		<div className="bg-gradient-to-br from-[#111827] to-[#1e293b] w-full min-h-screen flex flex-col items-center justify-center p-8  relative">
			<LogoCorner />
			<SlideTitle title="Pilares de Contenido" />

			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
				<PilarCard
					id="produccion"
					icon={Package}
					titulo="Soluciones en producción"
					subtitulo="COMERCIAL - 20%"
					descripcion="Servicios que ofrece Solware: páginas web, automatizaciones, integraciones y soluciones con IA. Explicando qué hace la agencia y los resultados concretos."
					borderColor="border-[#ecb424]/30"
					iconBgColor="bg-[#ecb424]/20"
					iconColor="text-[#ecb424]"
					subtituloColor="text-[#ecb424]"
					delay={0.2}
				/>

				<PilarCard
					id="decisores"
					icon={BookOpen}
					titulo="Tech para decisores"
					subtitulo="INFORMATIVO - 35%"
					descripcion="Contenido educativo que traduce tecnología al idioma de los clientes. Guías, explicaciones simples y contexto sobre digitalización, eficiencia y automatización."
					borderColor="border-[#5d9ff0]/30"
					iconBgColor="bg-[#5d9ff0]/20"
					iconColor="text-[#5d9ff0]"
					subtituloColor="text-[#5d9ff0]"
					delay={0.4}
				/>

				<PilarCard
					id="casos"
					icon={MessageSquare}
					titulo="Casos de la vida real"
					subtitulo="TESTIMONIAL - 25%"
					descripcion="Muestra la tecnología en acción: testimonios de clientes, antes y después, aprendizajes de proyectos y experiencias del equipo con datos reales."
					borderColor="border-[#ce609c]/30"
					iconBgColor="bg-[#ce609c]/20"
					iconColor="text-[#ce609c]"
					subtituloColor="text-[#ce609c]"
					delay={0.6}
				/>

				<PilarCard
					id="solhub"
					icon={Heart}
					titulo="Solhub"
					subtitulo="SALUD - 20%"
					descripcion="Enfocado en la propuesta de valor de Solhub para el sector salud: plataforma que lleva laboratorios y clínicas de procesos manuales a operación digital ordenada."
					borderColor="border-[#16a34a]/30"
					iconBgColor="bg-[#16a34a]/20"
					iconColor="text-[#16a34a]"
					subtituloColor="text-[#16a34a]"
					delay={0.8}
				/>
			</div>
		</div>
	)
}
