'use client'

import Image from 'next/image'

interface LogoCornerProps {
	className?: string
}

export function LogoCorner({ className = '' }: LogoCornerProps) {
	return (
		<div className={`fixed -top-2 right-0 sm:top-0 sm:right-2 z-10 ${className}`}>
			<div className="rounded-lg">
				<Image 
					src="/SOLWARE_-_26.png" 
					alt="Logo Solware" 
					width={150} 
					height={150} 
					className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32" 
					priority 
				/>
			</div>
		</div>
	)
}

