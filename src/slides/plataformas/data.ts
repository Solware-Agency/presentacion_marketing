export type PlataformaKey = "website"|"linkedin"|"instagram"|"facebook"|"email"|"whatsapp"|"youtube"|"tiktok";

export const ORDEN: PlataformaKey[] = [
  "website","linkedin","instagram","facebook","email","whatsapp",
  "youtube","tiktok"
];

export const CONTENIDO: Record<PlataformaKey, {
  nombre: string;
  tipo: "Primaria"|"Secundaria";
  resumen: string;
  recomendaciones: string[];
  ejemplo?: string;
  imagenSrc?: string;
  imagenAlt?: string;
}> = {
  website: {
    nombre: "Website",
    tipo: "Primaria",
    resumen:
      "Hub central de la estrategia: sitio claro, veloz y orientado a conversión. Explica servicios, diferenciadores y casos; CTAs visibles (formularios, agenda, WhatsApp).",
    recomendaciones: [
      "Trabajar SEO (palabras clave, metadatos, headings).",
      "Agregar lead magnets (guías/checklists/diagnósticos/mini ebooks).",
      "Conducir tráfico desde redes y email a páginas/landing específicas."
    ],
    ejemplo:
      "'Guía rápida para saber si la tecnología de tu empresa se quedó obsoleta', descargable desde un artículo con formulario para crear base de datos.",
    imagenSrc: "/mnt/data/ppt_solware_web.png",
    imagenAlt: "Captura de pantalla de la página web de Solware mostrando ejemplo de lead magnet"
  },
  linkedin: {
    nombre: "LinkedIn",
    tipo: "Primaria",
    resumen:
      "Canal B2B para decisores. Publicar casos de uso, insights y aprendizajes desde la página de empresa y perfiles de líderes; interacción con potenciales clientes.",
    recomendaciones: [
      "Contenido de autoridad (casos reales, reflexiones de negocio).",
      "CTAs hacia la web o agenda de reunión.",
      "Usar LinkedIn Ads si hay presupuesto; webinars para posicionar Solhub en salud."
    ],
    ejemplo:
      "Post 'Cómo una web bien hecha redujo el tiempo de respuesta comercial en 40%', con enlace a la web para leer más o agendar.",
    imagenSrc: "/mnt/data/ppt_solware_linkeid.png",
    imagenAlt: "Captura de pantalla de publicaciones en LinkedIn de Solware"
  },
  instagram: {
    nombre: "Instagram",
    tipo: "Primaria",
    resumen:
      "Reels y carruseles para explicar soluciones, antes/después de webs, tips y detrás de cámaras. Tráfico hacia web o WhatsApp.",
    recomendaciones: [
      "Reels con procesos y demostraciones breves.",
      "Destacadas: servicios, testimonios, preguntas frecuentes.",
      "Usar enlace de la bio y UTMs."
    ],
    ejemplo:
      "Reel 'Así lanzamos la web de X empresa en 7 días' con cierre: '¿Quieres algo así? Escríbenos por DM o en la bio'.",
    imagenSrc: "/mnt/data/ppt_solware_insta.png",
    imagenAlt: "Interfaz móvil mostrando grid de publicaciones de Instagram de Solware"
  },
  facebook: {
    nombre: "Facebook",
    tipo: "Primaria",
    resumen:
      "Refuerzo de presencia y requisito para campañas en Meta. Mantener fan page actualizada y compartir piezas clave.",
    recomendaciones: [
      "Sincronizar contenidos clave desde web/Instagram.",
      "Campañas de tráfico/conversión a landings.",
      "Cuidar reseñas y tiempos de respuesta en mensajes."
    ],
    ejemplo:
      "Publicación '3 procesos que podrías automatizar este mes' con enlace a landing para diagnóstico y botón de WhatsApp.",
    imagenSrc: "/mnt/data/ppt_solware_insta.png",
    imagenAlt: "Interfaz móvil mostrando publicaciones de Facebook"
  },
  email: {
    nombre: "Email marketing",
    tipo: "Primaria",
    resumen:
      "Nurturing y conversión a lo largo del embudo: entrega de recursos, derribar objeciones, casos de éxito y fidelización post-venta.",
    recomendaciones: [
      "Construir base desde formularios en la web.",
      "Enviar boletín mensual con contenido útil y mejoras recientes.",
      "Automatizar workflows por intención (descargas/visitas)."
    ],
    ejemplo:
      "Correo 'Lo que aprendimos automatizando procesos este mes' + mini caso + artículo del blog + CTA 'Agenda una llamada de diagnóstico'.",
    imagenSrc: "/mnt/data/ppt_solware_mail.png",
    imagenAlt: "Esquema de email marketing con ejemplos de asuntos y estructura de correos"
  },
  whatsapp: {
    nombre: "WhatsApp Business",
    tipo: "Primaria",
    resumen:
      "Canal principal de cierre y seguimiento: dudas, propuestas, coordinación de reuniones y atención personalizada.",
    recomendaciones: [
      "Número oficial, mensaje de bienvenida y respuestas rápidas.",
      "Etiquetas para organizar leads (nuevo, en propuesta, cliente).",
      "Botón/enlace en web, Instagram, Facebook y LinkedIn."
    ],
    ejemplo:
      "CTA desde redes: 'Escríbenos al WhatsApp para una asesoría gratuita'. Respuesta automática: 'Hola, gracias por contactarnos 👋 Cuéntanos brevemente sobre tu empresa y qué te gustaría mejorar'.",
    imagenSrc: "/mnt/data/ppt_solware_wa.png",
    imagenAlt: "Interfaz de WhatsApp Business mostrando conversación con potencial cliente"
  },
  youtube: {
    nombre: "YouTube",
    tipo: "Secundaria",
    resumen:
      "Alcance y posicionamiento con videos cortos (Shorts) y largos. Tutoriales, demostraciones y formato podcast.",
    recomendaciones: [
      "Guías visuales y demos funcionales.",
      "Adaptar reels/cápsulas a YouTube con SEO en títulos y descripciones.",
      "Integrar videos en web, blog y campañas de email."
    ],
    ejemplo:
      "'Conversaciones en Código' – Episodio 1 con cierre a agendar diagnóstico o visitar la web.",
    imagenSrc: "/mnt/data/ppt_solware_yt.png",
    imagenAlt: "Interfaz de canal de YouTube de Solware mostrando Shorts y videos de contenido"
  },
  tiktok: {
    nombre: "TikTok",
    tipo: "Secundaria",
    resumen:
      "Educativo ágil: tutoriales breves y cápsulas de valor; posible formato podcast visual con expertos.",
    recomendaciones: [
      "Reutilizar reels educativos/casos desde Instagram.",
      "Probar formatos cercanos; no depender como canal B2B principal.",
      "CTAs a la web o WhatsApp."
    ],
    ejemplo:
      "Video '3 cosas que delatan que tu web se quedó en el 2010' con cierre a visitar la web o escribir por IG/WhatsApp.",
    imagenSrc: "/mnt/data/ppt_solware_tiktok.png",
    imagenAlt: "Interfaz de perfil de TikTok mostrando cuadrícula de videos educativos"
  }
};
