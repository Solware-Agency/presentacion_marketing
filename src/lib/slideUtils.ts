import { SlideMetadata } from '@src/context/SlidesContext'

export function getSlideTitle(slide: SlideMetadata): string {
	if (slide.titulo) {
		return slide.titulo
	}

	return slide.id
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}

export function groupSlidesBySeccion(slides: SlideMetadata[]): Record<string, SlideMetadata[]> {
	const grupos: Record<string, SlideMetadata[]> = {}

	slides.forEach((slide) => {
		if (slide.ocultarEnIndice) return

		const grupo = slide.grupo || 'General'
		if (!grupos[grupo]) {
			grupos[grupo] = []
		}
		grupos[grupo].push(slide)
	})

	return grupos
}

export function filterSlides(slides: SlideMetadata[], searchTerm: string): SlideMetadata[] {
	if (!searchTerm.trim()) return slides

	const term = searchTerm.toLowerCase().trim()

	return slides.filter((slide) => {
		const titulo = getSlideTitle(slide).toLowerCase()
		const grupo = (slide.grupo || 'general').toLowerCase()
		const id = slide.id.toLowerCase()

		return titulo.includes(term) || grupo.includes(term) || id.includes(term)
	})
}

export function getSlidePosition(slideIndex: number, total: number): string {
	return `${slideIndex + 1}/${total}`
}
