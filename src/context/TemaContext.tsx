'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Tema = 'oscuro' | 'claro'

interface TemaContextType {
	tema: Tema
	alternarTema: () => void
}

const TemaContext = createContext<TemaContextType | undefined>(undefined)

export function ProveedorTema({ children }: { children: ReactNode }) {
	const [tema, setTema] = useState<Tema>('oscuro')
	const [montado, setMontado] = useState(false)

	useEffect(() => {
		setMontado(true)
		const temaGuardado = localStorage.getItem('solware-tema') as Tema
		const preferenciaSistema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro'
		const temaInicial = temaGuardado || preferenciaSistema
		setTema(temaInicial)
		aplicarTema(temaInicial)
	}, [])

	const aplicarTema = (nuevoTema: Tema) => {
		const root = document.documentElement
		root.classList.remove('light', 'dark')
		root.classList.add(nuevoTema === 'oscuro' ? 'dark' : 'light')
	}

	const alternarTema = () => {
		const nuevoTema: Tema = tema === 'oscuro' ? 'claro' : 'oscuro'
		setTema(nuevoTema)
		localStorage.setItem('solware-tema', nuevoTema)
		aplicarTema(nuevoTema)
	}

	if (!montado) {
		return null
	}

	return <TemaContext.Provider value={{ tema, alternarTema }}>{children}</TemaContext.Provider>
}

export function useTema() {
	const contexto = useContext(TemaContext)
	if (contexto === undefined) {
		throw new Error('useTema debe ser usado dentro de un ProveedorTema')
	}
	return contexto
}
