interface SlideTitleProps {
	title: string
	subtitle?: string
	color?: string
}

export function SlideTitle({ title, subtitle, color = '#41e2b8' }: SlideTitleProps) {
	return (
		<div className="text-center w-full px-4 pt-4 sm:pt-6 md:pt-8 mb-6 sm:mb-8">
			<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color }}>{title}</h1>
			<div className="w-40 sm:w-56 md:w-72 h-1.5 sm:h-2 md:h-2.5 mx-auto rounded-full mb-4" style={{ background: 'linear-gradient(to right, #3b82f6, #a855f7, #ec4899)', boxShadow: '0 0 15px rgba(59, 130, 246, 0.7), 0 0 30px rgba(168, 85, 247, 0.5), 0 0 45px rgba(236, 72, 153, 0.3)' }}></div>
			{subtitle && (
				<>
					<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4" style={{ color }}>{subtitle}</h2>
				</>
			)}
		</div>
	)
}
