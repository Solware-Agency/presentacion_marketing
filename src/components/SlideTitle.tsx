interface SlideTitleProps {
	title: string
	subtitle?: string
}

export function SlideTitle({ title, subtitle }: SlideTitleProps) {
	return (
		<div className="text-center mb-4 sm:mb-6 md:mb-8 h-auto sm:h-20 md:h-24 flex flex-col justify-center px-4">
			<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#41e2b8' }}>{title}</h1>
			<div className="w-40 sm:w-56 md:w-72 h-2 sm:h-2 md:h-2.5 mx-auto rounded-full mb-4 bg-gradient-to-r from-[#3b82f6] via-[#bc81f8] to-[#ce609c] shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_20px_rgba(188,129,248,0.3),0_0_30px_rgba(206,96,156,0.2)]"></div>
			{subtitle && <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4" style={{ color: '#41e2b8' }}>{subtitle}</h2>}
			{subtitle && <div className="w-32 sm:w-44 md:w-56 h-2 sm:h-2 md:h-2.5 mx-auto rounded-full mb-2 bg-gradient-to-r from-[#3b82f6] via-[#bc81f8] to-[#ce609c] shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_20px_rgba(188,129,248,0.3),0_0_30px_rgba(206,96,156,0.2)]"></div>}
		</div>
	)
}
