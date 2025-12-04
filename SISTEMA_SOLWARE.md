# Sistema de Diseño Solware

Documentación completa del sistema de diseño de Solware implementado en Next.js + TypeScript + Tailwind CSS.

## Índice

- [Modo Oscuro](#modo-oscuro)
- [Paleta de Colores](#paleta-de-colores)
- [Tipografía](#tipografía)
- [Componentes Reutilizables](#componentes-reutilizables)
- [Utilidades CSS](#utilidades-css)
- [Animaciones](#animaciones)
- [Accesibilidad](#accesibilidad)

## Modo Oscuro

El sistema implementa modo oscuro por defecto con capacidad de alternar a modo claro.

### Uso del Contexto de Tema

```tsx
import { ProveedorTema, useTema } from '@src/context/TemaContext'

// En el componente raíz
function App() {
  return (
    <ProveedorTema>
      <TuAplicacion />
    </ProveedorTema>
  )
}

// En cualquier componente hijo
function MiComponente() {
  const { tema, alternarTema } = useTema()

  return (
    <button onClick={alternarTema}>
      Cambiar a modo {tema === 'oscuro' ? 'claro' : 'oscuro'}
    </button>
  )
}
```

**Características:**
- Persistencia en `localStorage` con la clave `solware-tema`
- Respeta `prefers-color-scheme` del sistema
- Alternancia suave sin parpadeos

## Paleta de Colores

### Tokens de Color

Los colores están disponibles como utilidades de Tailwind con el prefijo `solware-`:

#### Fondos
```css
bg-solware-surface      /* #111827 - Fondo principal */
bg-solware-subsurface   /* #1f2937 - Subfondo */
bg-solware-dark-purple  /* #271944 - Morado oscuro */
bg-solware-deep-purple  /* #34182f - Morado profundo */
```

#### Texto
```css
text-solware-difuminado  /* #dbeafe - Texto difuminado */
```

#### Acciones y Botones
```css
bg-solware-primary       /* #3b82f6 - Azul primario */
bg-solware-primary-hover /* #2563eb - Azul hover */
```

#### Iconos y Acentos
```css
text-solware-amarillo  /* #ecb424 */
text-solware-azul      /* #5d9ff0 */
text-solware-verde     /* #3aa465 */
text-solware-fucsia    /* #ce609c */
text-solware-morado    /* #bc81f8 */
```

#### Escala Likert
```css
bg-solware-agree            /* #3aa465 - De acuerdo */
bg-solware-disagree         /* #bc81f8 - En desacuerdo */
bg-solware-disagree-strong  /* #ce609c - Totalmente en desacuerdo */
```

### Gradientes Predefinidos

```css
bg-solware-gradient         /* Gradiente estándar */
bg-solware-gradient-purple  /* Gradiente morado */
```

O usando clases de utilidad:
```css
gradient-solware
gradient-solware-purple
```

## Tipografía

Fuente: **Inter** (ya configurada vía `next/font`)

### Jerarquía

- **Títulos**: `text-4xl md:text-5xl font-bold`
- **Subtítulos**: `text-xl md:text-2xl font-semibold`
- **Cuerpo**: `text-base md:text-lg`
- **Texto secundario**: `text-sm`

### Utilidades de Texto

```css
text-muted       /* Texto blanco al 90% de opacidad */
text-difuminado  /* Texto con color difuminado de marca */
text-on-surface  /* Texto adaptativo: negro en claro, blanco en oscuro */
```

## Componentes Reutilizables

### BotonPrimario

Botón con animaciones de hover y estados.

```tsx
import { BotonPrimario } from '@src/components/solware'

<BotonPrimario
  onClick={() => console.log('Click')}
  variante="primario"  // primario | secundario | exito | peligro
  disabled={false}
  ariaLabel="Descripción del botón"
>
  Texto del botón
</BotonPrimario>
```

**Props:**
- `children`: ReactNode - Contenido del botón
- `onClick`: () => void - Función al hacer clic
- `disabled`: boolean - Estado deshabilitado
- `tipo`: 'button' | 'submit' | 'reset'
- `ariaLabel`: string - Etiqueta de accesibilidad
- `variante`: 'primario' | 'secundario' | 'exito' | 'peligro'

### TarjetaFlip

Tarjeta con efecto de volteo 3D.

```tsx
import { TarjetaFlip } from '@src/components/solware'

<TarjetaFlip
  frente={<div>Contenido del frente</div>}
  reverso={<div>Contenido del reverso</div>}
  onFlip={(volteada) => console.log(volteada)}
/>
```

**Props:**
- `frente`: ReactNode - Contenido frontal
- `reverso`: ReactNode - Contenido trasero
- `className`: string - Clases adicionales
- `onFlip`: (volteada: boolean) => void - Callback al voltear

### EscalaLikert

Escala Likert de 5 puntos con colores de marca.

```tsx
import { EscalaLikert } from '@src/components/solware'

<EscalaLikert
  pregunta="¿Qué tan satisfecho estás con el servicio?"
  onChange={(valor) => console.log(valor)}
  valorInicial={3}
/>
```

**Props:**
- `pregunta`: string - Texto de la pregunta
- `onChange`: (valor: number) => void - Callback al seleccionar
- `valorInicial`: number - Valor preseleccionado (1-5)

**Opciones:**
1. Totalmente en desacuerdo (rosa/fucsia)
2. En desacuerdo (morado)
3. Neutral (blanco transparente)
4. De acuerdo (verde)
5. Totalmente de acuerdo (verde)

### FichaSeccion

Sección con título, subtítulo y animación de entrada.

```tsx
import { FichaSeccion } from '@src/components/solware'

<FichaSeccion
  titulo="Título Principal"
  subtitulo="Texto descriptivo"
  delay={0.2}
>
  <p>Contenido de la sección</p>
</FichaSeccion>
```

**Props:**
- `titulo`: string - Título principal
- `subtitulo`: string - Subtítulo opcional
- `children`: ReactNode - Contenido
- `delay`: number - Retraso de animación en segundos

## Utilidades CSS

### Tarjetas

```css
.card        /* Tarjeta base con glassmorphism */
.card-hover  /* Añade efectos de hover: scale, border, shadow */
```

Ejemplo:
```tsx
<div className="card card-hover p-6">
  Contenido de la tarjeta
</div>
```

### Focus Ring

```css
.focus-ring  /* Anillo de enfoque accesible con color de marca */
```

### Superficies

```css
.surface     /* Fondo principal */
.subsurface  /* Subfondo */
```

## Animaciones

### Keyframes Disponibles

```css
fade-up          /* Fade in con desplazamiento hacia arriba */
fade-in-scale    /* Fade in con escala */
fade-out-scale   /* Fade out con escala */
slide-in-right   /* Deslizar desde la derecha */
slide-in-left    /* Deslizar desde la izquierda */
```

### Uso con Tailwind

```tsx
<div className="animate-fade-up">
  Aparece con animación
</div>
```

### Uso con Framer Motion

Patrón recomendado:

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
  Contenido animado
</motion.div>
```

### Transiciones de Timing

```css
transition-slide-ease   /* cubic-bezier(0.25, 0.46, 0.45, 0.94) */
transition-spring-ease  /* cubic-bezier(0.4, 0, 0.2, 1) */
transition-bounce-ease  /* cubic-bezier(0.68, -0.55, 0.265, 1.55) */
```

### Duraciones

```css
duration-slide       /* 500ms */
duration-slide-fast  /* 300ms */
duration-slide-slow  /* 700ms */
```

## Accesibilidad

### Contraste

El sistema garantiza contraste AA mínimo:
- Texto claro sobre fondos oscuros
- Texto oscuro sobre fondos claros
- Utilidad `text-on-surface` se adapta automáticamente

### Focus Visible

Todos los elementos interactivos deben incluir `.focus-ring`:

```tsx
<button className="focus-ring">
  Botón accesible
</button>
```

### Etiquetas ARIA

Siempre en español:

```tsx
<button aria-label="Cerrar modal">
  <X />
</button>
```

### Reduced Motion

El sistema respeta `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  /* Todas las animaciones se reducen a 0.01ms */
}
```

## Mejores Prácticas

### 1. Uso de Tokens

✅ **Correcto:**
```tsx
<div className="bg-solware-primary text-white">
```

❌ **Incorrecto:**
```tsx
<div className="bg-[#3b82f6] text-white">
```

### 2. Responsive Design

Usa breakpoints de Tailwind:

```tsx
<div className="text-base md:text-lg lg:text-xl">
  Texto responsive
</div>
```

### 3. Hover States

Combina utilidades de Tailwind con clases personalizadas:

```tsx
<div className="card card-hover hover:scale-105">
  Tarjeta interactiva
</div>
```

### 4. Animaciones

Prefiere Framer Motion para animaciones complejas:

```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Elemento interactivo
</motion.div>
```

## Ejemplos Completos

### Ejemplo 1: Tarjeta Informativa

```tsx
<div className="card card-hover p-6">
  <h3 className="text-2xl font-bold text-white mb-2">
    Título de la Tarjeta
  </h3>
  <p className="text-muted">
    Descripción del contenido de la tarjeta con texto difuminado.
  </p>
</div>
```

### Ejemplo 2: Sección con Animación

```tsx
<FichaSeccion
  titulo="Bienvenido"
  subtitulo="Sistema de diseño Solware"
  delay={0.2}
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="card p-6">Contenido 1</div>
    <div className="card p-6">Contenido 2</div>
  </div>
</FichaSeccion>
```

### Ejemplo 3: Formulario Interactivo

```tsx
<div className="space-y-6">
  <EscalaLikert
    pregunta="¿Cómo calificarías tu experiencia?"
    onChange={(valor) => console.log(valor)}
  />

  <BotonPrimario
    variante="primario"
    tipo="submit"
    ariaLabel="Enviar respuesta"
  >
    Enviar
  </BotonPrimario>
</div>
```

## Soporte

Para más información o reportar problemas, contacta al equipo de desarrollo de Solware.

---

**Versión:** 1.0.0
**Última actualización:** Diciembre 2025
