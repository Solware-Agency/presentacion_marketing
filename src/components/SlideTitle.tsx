interface SlideTitleProps {
	title: string
	subtitle?: string
	gradientColor?: string
	darkBackground?: boolean
}

export function SlideTitle({ title, subtitle, gradientColor = 'from-blue-400 to-purple-400', darkBackground = true }: SlideTitleProps) {
	const titleColor = darkBackground ? 'text-white' : 'text-gray-900'
	const subtitleColor = darkBackground ? 'text-blue-300' : 'text-gray-700'

	return (
		<div className="text-center mb-8 h-24 flex flex-col justify-center">
			<h1 className={`text-4xl font-bold ${titleColor} mb-2`}>{title}</h1>
			{subtitle && <h2 className={`text-xl font-semibold ${subtitleColor} mb-2`}>{subtitle}</h2>}
			<div className={`w-32 h-1 bg-gradient-to-r ${gradientColor} mx-auto rounded-full`}></div>
		</div>
	)
}
