interface SlideTitleProps {
	title: string
	subtitle?: string
}

export function SlideTitle({ title, subtitle }: SlideTitleProps) {
	return (
		<div className="text-center mb-4 sm:mb-6 md:mb-8 h-auto sm:h-20 md:h-24 flex flex-col justify-center px-4">
			<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#41e2b8' }}>{title}</h1>
			{subtitle && <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2" style={{ color: '#41e2b8' }}>{subtitle}</h2>}
			<div className="w-24 sm:w-28 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] via-[#bc81f8] to-[#ce609c] mx-auto rounded-full"></div>
		</div>
	)
}
