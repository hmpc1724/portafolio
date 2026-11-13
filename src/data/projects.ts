import { Project, Certificate } from '@/types';

export const CATEGORIES = [
  { id: 'all', label: 'Todos los Nichos' },
  { id: 'saas-ia', label: '🏢 SaaS & IA' },
  { id: 'gastronomia', label: '🍲 Restaurantes & Guisos' },
  { id: 'salud', label: '🏥 Salud & Dental' },
  { id: 'construccion', label: '🏗️ Construcción & Climas' },
  { id: 'turismo', label: '🏖️ Hotelería San Carlos' },
  { id: 'servicios', label: '🧹 Limpieza & Oficios' },
  { id: 'ecommerce', label: '🛍️ E-Commerce & Retail' },
  { id: 'sustentabilidad', label: '☀️ Energía Solar & Seguridad' },
  { id: 'media', label: '🎬 Media & Streaming' },
  { id: 'portafolio', label: '💎 Marca & Creativos' },
] as const;

export const PROJECTS: Project[] = [
  // 🏢 NICHO 1: SAAS & IA
  {
    id: 'proj-radar',
    slug: 'radar-clientes',
    title: 'Radar de Clientes B2B & Auditoría IA',
    category: 'saas-ia',
    categoryLabel: 'SaaS & IA',
    nicheLabel: 'Prospección B2B & Inteligencia Artificial',
    suggestedPackage: 'Paquete Escalable / App IA',
    packagePrice: '$14,900 MXN',
    description: 'Plataforma de prospección automatizada de comercios con IA Gemini, geolocalización Google Maps y pipeline de ventas.',
    longDescription: 'Radar de Clientes B2B es una solución de inteligencia comercial diseñada para la captación automatizada de clientes locales en Sonora. Integra el SDK oficial de Google AI Studio (@google/genai) con Gemini 2.5 Flash para auditar la presencia web y SEO de los prospectos, visualización interactiva sobre Google Maps, pipeline Kanban de ventas y módulo de cobranza de anticipos del 50%. Cuenta con filtro segmentado por Códigos Postales y colonias de Guaymas y San Carlos.',
    image: '/images/projects/radar-clientes.svg',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Google Gemini SDK', 'Google Maps API', 'Node.js Express'],
    features: [
      'Auditoría inteligente de sitios web y redes sociales con Google Gemini en 0.4s',
      'Filtro de prospectos por Código Postal (85400 Centro, 85506 San Carlos, etc.)',
      'Pipeline comercial Kanban con arrastre de prospectos en 4 fases de cierre',
      'Facturación de anticipos (50%) y liquidaciones con control de pólizas recurrentes',
      'Despacho de propuestas comerciales con 1 clic hacia WhatsApp'
    ],
    demoUrl: '/proyecto/radar-clientes?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Automatizar la búsqueda y calificación de prospectos locales multiplicando la captación comercial.',
    metrics: [
      { label: 'Prospección', value: '+140 Leads/h' },
      { label: 'Tiempo Auditoría', value: '< 1s' },
      { label: 'Precisión IA', value: '98.5%' }
    ],
    featured: true,
    accentColor: '#0ea5e9'
  },
  {
    id: 'proj-pulse',
    slug: 'pulse-metrics',
    title: 'PulseMetrics SaaS Analytics',
    category: 'saas-ia',
    categoryLabel: 'SaaS & IA',
    nicheLabel: 'Fintech & Inteligencia de Negocios',
    suggestedPackage: 'Paquete Escalable / App IA',
    packagePrice: '$14,900 MXN',
    description: 'Suite analítica en tiempo real para negocios digitales con dashboards predictivos y monitoreo de MRR.',
    longDescription: 'PulseMetrics es una plataforma B2B concebida para fundadores y equipos de producto. Proporciona visualización en tiempo real de ingresos recurrentes (MRR/ARR), retención de usuarios por cohortes y alertas automatizadas mediante webhooks. Su interfaz combina tarjetas de vidrio esmerilado con acentos neón para facilitar la lectura de métricas críticas bajo cualquier condición lumínica.',
    image: '/images/projects/pulse-metrics.svg',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Supabase'],
    features: [
      'Dashboards interactivos con gráficos vectoriales y zoom temporal dinámico',
      'Cálculo algorítmico de Churn Rate y Customer Lifetime Value (LTV)',
      'Exportación automatizada de reportes ejecutivos en formato PDF y CSV',
      'Sistema de notificaciones push y alertas configurables por umbral',
      'Autenticación multifactor y roles granulares de equipo'
    ],
    demoUrl: '/proyecto/pulse-metrics?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Reducir el tiempo necesario para tomar decisiones de negocio mediante analítica predictiva accesible.',
    metrics: [
      { label: 'Eventos/seg', value: '15.000+' },
      { label: 'Latencia sync', value: '< 45ms' },
      { label: 'Disponibilidad', value: '99.98%' }
    ],
    featured: false,
    accentColor: '#818cf8'
  },
  {
    id: 'proj-novapay',
    slug: 'novapay-billing',
    title: 'NovaPay Billing Engine',
    category: 'saas-ia',
    categoryLabel: 'SaaS & IA',
    nicheLabel: 'Facturación Recurrente & Cobros',
    suggestedPackage: 'Paquete Escalable / App IA',
    packagePrice: '$14,900 MXN',
    description: 'Infraestructura de facturación por uso y pasarela de cobro recurrente con conciliación bancaria instantánea.',
    longDescription: 'NovaPay simplifica la monetización de software moderno. Gestiona modelos de suscripción escalonados, cobros por consumo y facturas electrónicas automáticas con soporte multimoneda. Su panel de control permite monitorear cobros fallidos y automatizar campañas de cobro con correos inteligentes.',
    image: '/images/projects/novapay-billing.svg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe Connect', 'Webhooks API'],
    features: [
      'Gestión de planes de suscripción: mensual, anual y cobro por llamadas de API',
      'Panel de simulación de facturación con webhook sandbox para desarrolladores',
      'Generador automático de facturas en PDF con código QR fiscal',
      'Monitoreo de eventos de pago en tiempo real con status badge translúcidos',
      'Alertas de retención preventiva antes de la fecha de expiración de tarjetas'
    ],
    demoUrl: '/proyecto/novapay-billing?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Automatizar la facturación empresarial reduciendo la fricción de pago a cero.',
    metrics: [
      { label: 'Volumen procesado', value: '$2.4M+' },
      { label: 'Recuperación pagos', value: '94%' },
      { label: 'Integración', value: '10 min' }
    ],
    featured: false,
    accentColor: '#06b6d4'
  },

  // 🍲 NICHO 2: GASTRONOMÍA & RESTAURANTES
  {
    id: 'proj-guisos',
    slug: 'la-olla-de-barro',
    title: 'La Olla de Barro — Menú del Día',
    category: 'gastronomia',
    categoryLabel: 'Restaurantes & Alimentos',
    nicheLabel: 'Restaurantes, Fondas & Dark Kitchens',
    suggestedPackage: 'Paquete Profesional',
    packagePrice: '$8,900 MXN',
    description: 'App web gastronómica de comida corrida: menú de 6 tiempos ($129), comanda de cocina y despacho a WhatsApp.',
    longDescription: 'La Olla de Barro es una aplicación web interactiva (PWA) diseñada para negocios gastronómicos tradicionales y dark kitchens. Permite al comensal personalizar su menú del día de 6 tiempos, elegir su guisado en cazuela caliente, indicar el nivel de picante, seleccionar guarniciones y despachar el pedido con ticket formal de cocina directamente al WhatsApp del negocio, evitando comisiones del 30% de plataformas de delivery.',
    image: '/images/projects/guisos-app.svg',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Lucide React', 'WhatsApp API'],
    features: [
      'Menú del día rotativo de 6 tiempos a $129 MXN con actualización en segundos',
      'Selector interactivo de cazuelas con indicador dinámico de picante',
      'Generación automática de comanda con desglose de ingredientes y notas del cliente',
      'Despacho instantáneo de la orden hacia WhatsApp sin cobro de comisiones',
      'Diseño mobile-first ultra ligero adaptado para pantallas de celular'
    ],
    demoUrl: '/proyecto/la-olla-de-barro?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Eliminar el pago de altas comisiones a apps de delivery y centralizar los pedidos por WhatsApp.',
    metrics: [
      { label: 'Ahorro Comisión', value: '30% por orden' },
      { label: 'Tiempo de Pedido', value: '< 40s' },
      { label: 'Ticket Promedio', value: '$129 MXN' }
    ],
    featured: true,
    accentColor: '#f97316'
  },

  // 🏥 NICHO 3: SALUD & DENTAL
  {
    id: 'proj-dentcare',
    slug: 'dentcare-clinica',
    title: 'DentCare — Clínica Dental Especializada',
    category: 'salud',
    categoryLabel: 'Salud & Dental',
    nicheLabel: 'Clínicas Dentales, Médicos & Consultorios',
    suggestedPackage: 'Paquete Profesional',
    packagePrice: '$8,900 MXN',
    description: 'Portal médico y dental con agenda interactiva de citas en vivo, catálogo de tratamientos y testimonios verificados.',
    longDescription: 'Diseñado específicamente para consultorios médicos y clínicas odontológicas de vanguardia. Ofrece un flujo de reserva de citas en línea disponible las 24 horas, eliminando llamadas perdidas. Incluye catálogo de especialidades (ortodoncia, implantes, estética dental), comparador fotográfico de antes/después y recordatorios automáticos hacia WhatsApp del paciente.',
    image: '/images/projects/dentcare-clinic.svg',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Calendario Interactivo'],
    features: [
      'Agendador de citas con selector de especialista, fecha y horario disponible',
      'Recordatorio automático con enlace de confirmación vía WhatsApp',
      'Galería de casos clínicos con visor de comparación antes vs. después',
      'Integración con ficha técnica y expediente digital preliminar',
      'Optimización SEO local para dominar las búsquedas en Google Maps'
    ],
    demoUrl: '/proyecto/dentcare-clinica?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Multiplicar las citas de pacientes cualificados para tratamientos de alto valor.',
    metrics: [
      { label: 'Nuevos Pacientes', value: '+45%' },
      { label: 'Ausentismo (No-show)', value: '-70%' },
      { label: 'Disponibilidad', value: '24/7' }
    ],
    featured: true,
    accentColor: '#0d9488'
  },

  // 🏗️ NICHO 4: CONSTRUCCIÓN, CLIMAS & OFICIOS
  {
    id: 'proj-obra',
    slug: 'obramaestra-cad',
    title: 'ObraMaestra — Calculadora Civil & CAD',
    category: 'construccion',
    categoryLabel: 'Construcción & Climas',
    nicheLabel: 'Ingeniería Civil, Contratistas & Arquitectura',
    suggestedPackage: 'Paquete Escalable',
    packagePrice: '$14,900 MXN',
    description: 'Motor paramétrico de ingeniería civil según normas ACI 318 con +35 tipos de escaleras en SVG dinámico.',
    longDescription: 'ObraMaestra es una herramienta técnica concebida para ingenieros civiles, arquitectos y contratistas de edificación. Permite cuantificar con precisión milimétrica los materiales para muros, bardas perimetrales (bloques, sacos de cemento, arena descontando vanos de puertas y ventanas), cimientos corridos y losas de concreto armado. Su renderizador SVG paramétrico dibuja más de 35 tipologías de escaleras estructurales en tiempo real.',
    image: '/images/projects/obramaestra-cad.svg',
    stack: ['React 19', 'Vite', 'SVG Canvas Paramétrico', 'CSS Glassmorphism', 'Norma ACI 318'],
    features: [
      'Cálculo paramétrico de materiales para muros deduciendo vanos de carpintería',
      'Renderizador interactivo de +35 tipos de escaleras con cotas en tiempo real',
      'Cuantificación de morteros y dosificación de concreto (fc 200, 250 kg/cm²)',
      'Generador de presupuestos de obra con mano de obra y costos de insumos editables',
      'Exportación de planos acotados en PDF para presentación ante clientes'
    ],
    demoUrl: '/proyecto/obramaestra-cad?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Reducir el desperdicio de insumos en obra hasta en un 18% y acelerar presupuestos.',
    metrics: [
      { label: 'Modelos Escalera', value: '+35 SVG' },
      { label: 'Ahorro Material', value: '18%' },
      { label: 'Norma Técnica', value: 'ACI 318' }
    ],
    featured: true,
    accentColor: '#f59e0b'
  },
  {
    id: 'proj-aircon',
    slug: 'aircon-climas',
    title: 'AirCon — Refrigeración & Minisplits Sonora',
    category: 'construccion',
    categoryLabel: 'Construcción & Climas',
    nicheLabel: 'Refrigeración, Climas & Talleres Técnicos',
    suggestedPackage: 'Paquete Esencial',
    packagePrice: '$4,900 MXN',
    description: 'Landing comercial para servicio de mantenimiento y reparación urgente de aires acondicionados en Guaymas/San Carlos.',
    longDescription: 'Solución esencial de alta conversión para técnicos y talleres de refrigeración en el caluroso clima de Sonora. Diseñada para responder solicitudes de auxilio técnico en menos de 45 minutos. Incorpora cotizador de mantenimiento preventivo, recarga de gas ecológico e instalación de minisplits inverter, enlazado directamente a WhatsApp con geolocalización del cliente.',
    image: '/images/projects/aircon-climas.svg',
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'WhatsApp API'],
    features: [
      'Botón de auxilio técnico urgente con envío de ubicación por GPS',
      'Calculadora de capacidad térmica (BTUs) según los m² de la habitación',
      'Tarifario transparente de mantenimiento, limpieza y recarga de gas',
      'Garantía por escrito de 90 días en mano de obra y refacciones',
      'Integración con reseñas verificadas de Google Maps'
    ],
    demoUrl: '/proyecto/aircon-climas?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Captar llamadas de emergencia de refrigeración y cerrar servicios al instante.',
    metrics: [
      { label: 'Tiempo Respuesta', value: '< 45 min' },
      { label: 'Conversión Móvil', value: '38%' },
      { label: 'Zona Cobertura', value: '100% Local' }
    ],
    featured: false,
    accentColor: '#38bdf8'
  },
  {
    id: 'proj-zenith',
    slug: 'zenith-architects',
    title: 'Zenith Studio Arquitectura',
    category: 'construccion',
    categoryLabel: 'Construcción & Climas',
    nicheLabel: 'Despachos de Arquitectura & Proyectos',
    suggestedPackage: 'Paquete Profesional',
    packagePrice: '$8,900 MXN',
    description: 'Portal de presentación arquitectónica con visor de maquetas interactivas, memoria de calidades y dossier de proyectos.',
    longDescription: 'Diseñado para una firma de arquitectura bioclimática contemporánea. El sitio presenta proyectos mediante transiciones fluidas de planos técnicos a fotografías terminadas, despiece interactivo de materiales sostenibles y un generador personalizado de dossiers en PDF para clientes institucionales e inversores privados.',
    image: '/images/projects/zenith-architects.svg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Canvas Shaders', 'Three.js Lite'],
    features: [
      'Visor interactivo con deslizador de capas: Plano estructural vs. Render finalizado',
      'Calculadora de eficiencia energética y ahorro de emisiones por m² construido',
      'Solicitud de visita guiada con selector interactivo de fechas disponibles',
      'Efectos de cristal ahumado mate con tipografía minimalista suiza',
      'Descarga segura de pliegos técnicos mediante enlace con caducidad'
    ],
    demoUrl: '/proyecto/zenith-architects?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Transmitir vanguardia tecnológica y rigor constructivo para licitaciones internacionales.',
    metrics: [
      { label: 'Proyectos expuestos', value: '45+' },
      { label: 'Consultas VIP', value: '+110%' },
      { label: 'Premio Web', value: 'Site of the Day' }
    ],
    featured: false,
    accentColor: '#14b8a6'
  },

  // 🏖️ NICHO 5: TURISMO & HOTELERÍA SAN CARLOS
  {
    id: 'proj-hotel',
    slug: 'luxury-hotel-guest-app',
    title: 'Luxury Hotel Guest Experience App (PWA)',
    category: 'turismo',
    categoryLabel: 'Hotelería San Carlos',
    nicheLabel: 'Hoteles Boutique, Condos & Resorts San Carlos',
    suggestedPackage: 'Paquete Escalable / App IA',
    packagePrice: '$14,900 MXN',
    description: 'Aplicación web progresiva para huéspedes con llave digital NFC, control domótico de clima y room service interactivo.',
    longDescription: 'Plataforma para huéspedes de hoteles de lujo, condominios frente al mar y rentas vacacionales en San Carlos, Sonora. Permite a los visitantes abrir la puerta de su suite mediante su teléfono con simulación NFC, regular la temperatura del aire acondicionado antes de entrar a la habitación, solicitar Room Service con seguimiento de pedido en vivo y contratar tours náuticos.',
    image: '/images/projects/luxury-hotel-app.svg',
    stack: ['React 19', 'Next.js', 'Tailwind CSS', 'Web NFC API', 'WebSockets'],
    features: [
      'Llave digital NFC virtual para apertura sin contacto de habitaciones',
      'Control de clima HVAC inteligente (rango de confort 18°C a 26°C)',
      'Catálogo interactivo de Room Service con rastreo en vivo de entrega',
      'Conserjería virtual y reserva de yates, pesca deportiva y buceo',
      'Soporte bilingüe automático (Español / Inglés)'
    ],
    demoUrl: '/proyecto/luxury-hotel-guest-app?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Elevar la valoración en TripAdvisor y Airbnb a 5 estrellas brindando una experiencia ultra premium.',
    metrics: [
      { label: 'Check-in Veloz', value: '< 30s' },
      { label: 'Ticket Room Service', value: '+35%' },
      { label: 'Idiomas', value: 'Bilingüe' }
    ],
    featured: true,
    accentColor: '#818cf8'
  },

  // 🧹 NICHO 6: SERVICIOS LOCALES & LIMPIEZA
  {
    id: 'proj-limpia',
    slug: 'limpiapro-servicios',
    title: 'LimpiaPro — Cotizador de Limpieza',
    category: 'servicios',
    categoryLabel: 'Limpieza & Oficios',
    nicheLabel: 'Empresas de Limpieza, Desinfección & Oficinas',
    suggestedPackage: 'Paquete Profesional',
    packagePrice: '$8,900 MXN',
    description: 'Cotizador dinámico reactivo en 3 pasos por m² con reserva de turnos para residencias, oficinas y naves.',
    longDescription: 'LimpiaPro automatiza el cálculo de tarifas de limpieza profesional. Los clientes introducen los metros cuadrados de su inmueble, seleccionan servicios adicionales como desinfección UV profunda o lavado de tapicería, y obtienen un presupuesto transparente en segundos, eliminando visitas previas no remuneradas y asegurando el anticipo.',
    image: '/images/projects/limpiapro-service.svg',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business API'],
    features: [
      'Calculadora reactiva en 3 pasos por tipo de inmueble (casa, oficina, comercio)',
      'Selección de extras especializados: desinfección UV, alfombras y cristales altos',
      'Asignación de cuadrillas y cálculo estimado de horas de servicio',
      'Generación de ticket formal con botón directo de confirmación por WhatsApp',
      'Panel de control de turnos y agenda semanal para el equipo de operaciones'
    ],
    demoUrl: '/proyecto/limpiapro-servicios?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Automatizar el 100% de las cotizaciones y recibir clientes decididos por WhatsApp.',
    metrics: [
      { label: 'Tiempo Cotización', value: '15 seg' },
      { label: 'Cierre WhatsApp', value: '92%' },
      { label: 'Ahorro Visitas', value: '10 hrs/sem' }
    ],
    featured: true,
    accentColor: '#0284c7'
  },

  // 🛍️ NICHO 7: E-COMMERCE & RETAIL
  {
    id: 'proj-lumina',
    slug: 'lumina-store',
    title: 'Lumina Store Boutique',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Retail',
    nicheLabel: 'Boutiques, Moda & Accesorios de Lujo',
    suggestedPackage: 'Paquete Profesional',
    packagePrice: '$8,900 MXN',
    description: 'Boutique digital de alta gama con checkout instantáneo, visualización 360° y microinteracciones fluidas.',
    longDescription: 'Lumina Store es una plataforma de comercio electrónico de última generación concebida para marcas de diseño de vanguardia. Integra una pasarela de pago sin fricciones con Stripe, cálculo de envío geolocalizado en tiempo real, gestión optimizada de variantes de producto y transiciones visuales de cristal líquido que incrementan la tasa de conversión en un 28%.',
    image: '/images/projects/lumina-store.svg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Zustand'],
    features: [
      'Carrito de compras deslizable con persistencia en localStorage y sync en nube',
      'Filtrado instantáneo por atributos, tallas, paleta de colores y rango de precio',
      'Checkout optimizado en un solo paso con validaciones en tiempo real',
      'Efectos de vidrio esmerilado translúcido con reflejos especulares al hover',
      'Arquitectura responsive diseñada para una experiencia móvil ultra veloz'
    ],
    demoUrl: '/proyecto/lumina-store?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Elevar el valor percibido de marca y maximizar la conversión en dispositivos móviles.',
    metrics: [
      { label: 'Velocidad de carga', value: '0.8s' },
      { label: 'Conversión móvil', value: '+28%' },
      { label: 'Puntaje Lighthouse', value: '99/100' }
    ],
    featured: true,
    accentColor: '#38bdf8'
  },
  {
    id: 'proj-artisan',
    slug: 'artisan-market',
    title: 'Artisan Market Regional',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Retail',
    nicheLabel: 'Marketplaces & Artesanías de Sonora',
    suggestedPackage: 'Paquete Profesional',
    packagePrice: '$8,900 MXN',
    description: 'Marketplace para artesanos y diseñadores independientes con split de pagos y trazabilidad de piezas únicas.',
    longDescription: 'Una plataforma de comercio que conecta a maestros artesanos con coleccionistas globales. Cada producto incluye un certificado digital de autenticidad, cálculo dinámico de costes de importación y una experiencia de compra táctil donde cada tarjeta refleja texturas y destellos líquidos que resaltan el valor manual de las piezas.',
    image: '/images/projects/artisan-market.svg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Algolia Search', 'Zustand'],
    features: [
      'Búsqueda facetada instantánea por técnica ancestral, material y procedencia',
      'Muro interactivo de historias de artesanos con micro-documentales en video',
      'Checkout con distribución automática de comisiones hacia las cuentas de artesanos',
      'Reseñas verificadas con subida de fotos de compradores y valoraciones por estrellas',
      'Puntos de recogida locales y cálculo de huella de carbono neutralizada'
    ],
    demoUrl: '/proyecto/artisan-market?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Empoderar a comunidades artesanales facilitando ventas internacionales sin intermediarios abusivos.',
    metrics: [
      { label: 'Creadores activos', value: '1.200+' },
      { label: 'Países destino', value: '34' },
      { label: 'Satisfacción', value: '4.9/5' }
    ],
    featured: false,
    accentColor: '#f59e0b'
  },

  // ☀️ NICHO 8: ENERGÍA SOLAR & SEGURIDAD
  {
    id: 'proj-solar',
    slug: 'solartec-energia',
    title: 'Solartec — Paneles Solares & Ahorro CFE',
    category: 'sustentabilidad',
    categoryLabel: 'Energía Solar & Seguridad',
    nicheLabel: 'Instaladores Solares, Alarmas & CCTV',
    suggestedPackage: 'Paquete Profesional',
    packagePrice: '$8,900 MXN',
    description: 'Portal comercial con simulador fotovoltaico que calcula el ahorro en recibos de luz CFE para Sonora.',
    longDescription: 'En Sonora el gasto eléctrico por altas temperaturas es crítico. Solartec ofrece un simulador interactivo donde el usuario ingresa su gasto bimestral de CFE y ve de inmediato su reducción a la tarifa mínima, el número de paneles requeridos y el retorno de inversión en años. Cuenta con botón de envío de fotografía del recibo a WhatsApp para cotización formal.',
    image: '/images/projects/solartec-energia.svg',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Simulador Fotovoltaico', 'WhatsApp API'],
    features: [
      'Simulador interactivo de ahorro bimestral CFE (hasta 95% de descuento)',
      'Calculadora de retorno de inversión (ROI) y amortización de paneles',
      'Recepción de fotografías de recibos de luz directamente por WhatsApp',
      'Catálogo de inversores inteligentes y garantías de 25 años en celdas',
      'Formulario de validación para trámite de interconexión oficial con CFE'
    ],
    demoUrl: '/proyecto/solartec-energia?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Multiplicar los prospectos residenciales e industriales interesados en energía solar.',
    metrics: [
      { label: 'Ahorro Promedio', value: 'Hasta 95%' },
      { label: 'Retorno Inversión', value: '2.4 Años' },
      { label: 'Cierres Express', value: '+52%' }
    ],
    featured: true,
    accentColor: '#eab308'
  },

  // 🎬 NICHO 9: MEDIA & STREAMING
  {
    id: 'proj-cine',
    slug: 'cinevault-v3',
    title: 'CineVault v3 — Streaming Social',
    category: 'media',
    categoryLabel: 'Media & Streaming',
    nicheLabel: 'Plataformas de Streaming & Creadores',
    suggestedPackage: 'Paquete Escalable',
    packagePrice: '$14,900 MXN',
    description: 'Catálogo cinematográfico estilo streaming con reproducción de trailers, watchlist comunitaria y reseñas.',
    longDescription: 'CineVault es una plataforma de video y entretenimiento inspirada en las grandes marcas de streaming (Netflix/HBO). Diseñada con una estética oscura y acentos Liquid Glass, permite explorar catálogos por géneros, reproducir trailers en ventanas modales en alta definición a 60 FPS, guardar títulos en watchlists personalizadas y calificar producciones con estrellas.',
    image: '/images/projects/cinevault-streaming.svg',
    stack: ['React 19', 'Firebase', 'Tailwind CSS', 'Video Player API', 'TMDB API'],
    features: [
      'Reproductor modal de trailers cinemáticos en alta resolución a 60 FPS',
      'Watchlist personalizada con persistencia en la nube y modo offline',
      'Sistema de valoración por estrellas y reseñas comunitarias en tiempo real',
      'Filtros inteligentes por categorías, año de estreno y tendencias virales',
      'Diseño Glass Dark ultra fluido adaptado para TV, desktop y móvil'
    ],
    demoUrl: '/proyecto/cinevault-v3?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Proporcionar una experiencia de consumo multimedia inmersiva y de alto rendimiento.',
    metrics: [
      { label: 'Framerate', value: '60 FPS' },
      { label: 'Latencia Buffer', value: '< 120ms' },
      { label: 'Calificación UI', value: '4.9/5' }
    ],
    featured: true,
    accentColor: '#ef4444'
  },
  {
    id: 'proj-kroma',
    slug: 'kroma-visuals',
    title: 'Kroma Motion & Visuals',
    category: 'media',
    categoryLabel: 'Media & Streaming',
    nicheLabel: 'Estudios de Animación, VFX & WebGL',
    suggestedPackage: 'Paquete Escalable',
    packagePrice: '$14,900 MXN',
    description: 'Experiencia interactiva de diseño cinético, shaders en WebGL y dirección creativa para la industria musical.',
    longDescription: 'Un laboratorio visual donde el diseño web y el arte generativo convergen. Construido con una estética radical de cristal líquido, incluye reactividad sonora al interactuar con el ratón, deformación de mallas en tiempo real y tipografías cinéticas que responden a la velocidad del scroll del usuario.',
    image: '/images/projects/kroma-visuals.svg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebGL Canvas', 'Web Audio API'],
    features: [
      'Generador de texturas de cristal líquido procedurales en tiempo real',
      'Sintetizador de audio sutil opcional con osciladores de baja frecuencia',
      'Catálogo navegable de identidades visuales para festivales y artistas globales',
      'Modo de inspección técnica con desglose de parámetros matemáticos',
      'Rendimiento optimizado a 60 FPS garantizado en pantallas Retina y ProMotion'
    ],
    demoUrl: '/proyecto/kroma-visuals?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Demostrar capacidades técnicas y visuales insuperables para contratos de diseño experimental.',
    metrics: [
      { label: 'Framerate', value: '60 FPS' },
      { label: 'Interacciones', value: '450K+' },
      { label: 'Impacto visual', value: 'Viral' }
    ],
    featured: false,
    accentColor: '#ec4899'
  },

  // 💎 NICHO 10: MARCA PERSONAL & CREATIVOS
  {
    id: 'proj-veloce',
    slug: 'studio-veloce',
    title: 'Studio Veloce Agencia',
    category: 'portafolio',
    categoryLabel: 'Marca & Creativos',
    nicheLabel: 'Agencias Creativas & Consultoría VIP',
    suggestedPackage: 'Paquete Profesional',
    packagePrice: '$8,900 MXN',
    description: 'Plataforma web para agencia de diseño de alta gama con agendador de consultorías y cotizador en vivo.',
    longDescription: 'Sitio corporativo concebido para una prestigiosa consultora de branding y diseño digital. Incorpora una calculadora interactiva de presupuestos donde los clientes pueden modelar el alcance de sus proyectos, un sistema de reserva directa conectado a calendarios y un showcase inmersivo con efectos hápticos visuales.',
    image: '/images/projects/studio-veloce.svg',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Cal.com Embed', 'TypeScript'],
    features: [
      'Cotizador dinámico paso a paso con desglose instantáneo de entregables y plazos',
      'Integración con agenda online para reservar llamadas de descubrimiento',
      'Secciones de casos de estudio con comparativas antes/después interactiva',
      'Fondo líquido cromático reactivo al movimiento del cursor',
      'Formularios de contacto de alta conversión con validaciones tipadas'
    ],
    demoUrl: '/proyecto/studio-veloce?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Multiplicar las solicitudes de clientes cualificados con presupuestos superiores a 5 dígitos.',
    metrics: [
      { label: 'Leads generados', value: '+64%' },
      { label: 'Tiempo en sitio', value: '3m 40s' },
      { label: 'Tasa de cierre', value: '42%' }
    ],
    featured: true,
    accentColor: '#f43f5e'
  },
  {
    id: 'proj-aura',
    slug: 'aura-creative',
    title: 'Aura Creative Studio',
    category: 'portafolio',
    categoryLabel: 'Marca & Creativos',
    nicheLabel: 'Fotografía Profesional & Dirección de Arte',
    suggestedPackage: 'Paquete Esencial',
    packagePrice: '$4,900 MXN',
    description: 'Portafolio inmersivo para dirección de arte y fotografía digital con galería fluida y modo cinemático.',
    longDescription: 'Diseñado para destacar obras visuales con la máxima elegancia. Cada galería cuenta con modos de visualización en cuadrícula o pantalla completa cinemática, soporte para metadatos EXIF, paleta de colores reactiva que se adapta automáticamente a los tonos dominantes de cada fotografía y transiciones etéreas de cristal líquido.',
    image: '/images/projects/aura-creative.svg',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'CSS Glassmorphism', 'TypeScript'],
    features: [
      'Visor fotográfico en alta resolución con zoom sin pérdida y modo oscuro puro',
      'Extracción algorítmica de color dominante para orbes líquidos contextuales',
      'Navegación por teclado (teclas de flechas y atajos directos)',
      'Diseño editorial con tipografía de alto contraste y grillas asimétricas',
      'Optimización de imágenes con carga progresiva y blur placeholder'
    ],
    demoUrl: '/proyecto/aura-creative?demo=live',
    githubUrl: 'https://github.com/abrakza03-jpg',
    clientGoal: 'Crear una presencia digital inolvidable para atraer marcas de lujo y editoriales de moda.',
    metrics: [
      { label: 'Premios ganados', value: 'Awwwards' },
      { label: 'Carga de medios', value: 'Optimizada' },
      { label: 'Engagement', value: '+85%' }
    ],
    featured: false,
    accentColor: '#c084fc'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'master-frameworks-javascript',
    title: 'Master en Frameworks JavaScript: Aprende Angular, React, Vue',
    issuer: 'Udemy',
    instructors: 'Víctor Robles',
    date: '26 de junio de 2025',
    duration: '28 horas en total',
    category: 'frontend',
    categoryLabel: 'Frontend & Frameworks',
    image: '/certificates/master-frameworks-javascript.png',
    pdfUrl: '/certificates/master-frameworks-javascript.pdf',
    credentialId: 'UC-c0d1da80-8389-4747-8962-dd975d7d94d6',
    verificationUrl: 'https://ude.my/UC-c0d1da80-8389-4747-8962-dd975d7d94d6',
    description: 'Especialización intensiva en desarrollo frontend moderno dominando los tres frameworks líderes: React, Angular y Vue.js, con TypeScript y patrones de arquitectura escalables.',
    badgeColor: 'from-sky-500 to-indigo-600',
    topics: ['React', 'Angular', 'Vue.js', 'TypeScript', 'SPA', 'Hooks & State']
  },
  {
    id: 'desarrollo-web-moderno',
    title: 'Desarrollo Web Moderno con HTML5, CSS3 y Javascript 2025',
    issuer: 'Udemy',
    instructors: 'render2web (140,000+ estudiantes)',
    date: '26 de junio de 2025',
    duration: '53 horas en total',
    category: 'web',
    categoryLabel: 'Fundamentos & Estándares Web',
    image: '/certificates/desarrollo-web-moderno.png',
    pdfUrl: '/certificates/desarrollo-web-moderno.pdf',
    credentialId: 'UC-9a5999d0-6416-4933-889e-901a824e2725',
    verificationUrl: 'https://ude.my/UC-9a5999d0-6416-4933-889e-901a824e2725',
    description: 'Más de 50 horas de formación integral en semántica HTML5, técnicas avanzadas de maquetación CSS3 (Flexbox, Grid, Animaciones) y JavaScript moderno ES6+ orientado a interfaces dinámicas.',
    badgeColor: 'from-amber-500 to-orange-600',
    topics: ['HTML5 Semántico', 'CSS3 Avanzado', 'JavaScript ES6+', 'Responsive Design', 'DOM & APIs']
  },
  {
    id: 'desarrollo-ia-produccion',
    title: 'Desarrollo con IA: de 0 a Producción',
    issuer: 'BIG school & {m} mouredev',
    instructors: 'Brais Moure & Romuald Fons',
    date: '16 de marzo de 2026',
    duration: '6 horas',
    category: 'ai',
    categoryLabel: 'IA en Producción',
    image: '/certificates/desarrollo-ia-produccion.png',
    pdfUrl: '/certificates/desarrollo-ia-produccion.pdf',
    description: 'Jornadas formativas de alto nivel sobre integración de Inteligencia Artificial en flujos de producción real, despliegue de aplicaciones y optimización de productividad de software.',
    badgeColor: 'from-emerald-500 to-teal-600',
    topics: ['IA en Producción', 'Arquitectura AI', 'Pipelines & CI/CD', 'Despliegue Full Stack']
  },
  {
    id: 'iniciacion-desarrollo-ia-mouredev',
    title: 'Iniciación al Desarrollo con IA',
    issuer: 'mouredev & BIG school',
    instructors: 'Brais Moure & Romuald Fons',
    date: '05 de octubre de 2026',
    duration: '4 horas',
    category: 'ai',
    categoryLabel: 'Inteligencia Artificial',
    image: '/certificates/iniciacion-desarrollo-ia-mouredev.png',
    pdfUrl: '/certificates/iniciacion-desarrollo-ia-mouredev.pdf',
    description: 'Curso de desarrollo con IA para el nuevo programador. Asimilación de modelos LLM, ingeniería de prompts, pair programming asistido por IA y automatización de flujos de desarrollo.',
    badgeColor: 'from-cyan-500 to-blue-600',
    topics: ['Modelos de Lenguaje', 'Prompt Engineering', 'AI DevTools', 'Flujos Automatizados']
  },
  {
    id: 'hacking-etico-aplicaciones',
    title: 'Hacking Ético: de 0 a Hackear Aplicaciones',
    issuer: 'BIG school',
    instructors: 'Mario Álvarez & Romuald Fons',
    date: '23 de octubre de 2026',
    duration: '6 horas',
    category: 'security',
    categoryLabel: 'Ciberseguridad & Hacking Ético',
    image: '/certificates/hacking-etico-aplicaciones.png',
    pdfUrl: '/certificates/hacking-etico-aplicaciones.pdf',
    description: 'Capacitación en seguridad informática aplicada, identificación de vulnerabilidades web (OWASP Top 10), análisis de vectores de ataque y buenas prácticas de protección y blindaje.',
    badgeColor: 'from-emerald-600 to-green-700',
    topics: ['Ciberseguridad', 'OWASP Top 10', 'Auditoría Web', 'Seguridad en Aplicaciones']
  }
];

export const PROFILE_INFO = {
  name: 'Hector Miguel Palomares Cota',
  role: 'Diseñador & Desarrollador Web Full Stack Senior | AI & SaaS Architect',
  tagline: 'Construyo experiencias digitales que fusionan la estética de cristal líquido con código robusto y rendimiento excepcional.',
  bio: 'Especialista en interfaces web de alto impacto, diseño UI/UX Liquid Glass y arquitectura full stack moderna con Next.js, React, TypeScript e Inteligencia Artificial (Google AI Studio / Gemini). Implemento un flujo sin riesgo para empresas: 1. Boceto visual en Google Stitch → 2. Demo interactivo en vivo → 3. Producción en Google Antigravity.',
  location: 'Guaymas, Sonora, México',
  phone: '622 225 9974',
  phoneFormatted: '+52 (622) 225-9974',
  phoneTel: 'tel:+526222259974',
  whatsappUrl: 'https://wa.me/526222259974?text=Hola%20Hector,%20vi%20tu%20portafolio%20Liquid%20Glass%20y%20me%20gustar%C3%ADa%20ver%20un%20boceto%20en%20Stitch%20para%20mi%20negocio',
  cvUrl: '/cv-hector-palomares.pdf',
  radarUrl:
    typeof window !== 'undefined'
      ? `http://${window.location.hostname}:3210/agencia`
      : 'http://192.168.100.90:3210/agencia',
  status: 'Disponible para nuevos proyectos',
  email: 'abrakza03@gmail.com',
  social: {
    github: 'https://github.com/abrakza03-jpg',
    whatsapp: 'https://wa.me/526222259974',
    stitch: 'https://stitch.withgoogle.com',
    aistudio: 'https://aistudio.google.com'
  },
  stats: [
    { value: '100+', label: 'Soluciones comerciales por nicho' },
    { value: '14', label: 'Demos interactivos por nicho' },
    { value: '5', label: 'Certificaciones profesionales' },
    { value: '97+', label: 'Horas de formación certificada' }
  ],
  skills: [
    { category: 'Frontend & Liquid Glass UI', items: ['Next.js 16', 'React 19', 'TypeScript', 'Angular', 'Vue.js', 'Tailwind CSS', 'Liquid Glass UI', 'Google Stitch'] },
    { category: 'IA & Automatización Comercial', items: ['Google AI Studio (@google/genai)', 'Google Antigravity', 'Agentes WhatsApp 24/7', 'Prompt Engineering', 'LLMs en Producción'] },
    { category: 'Backend & Ciberseguridad', items: ['Node.js', 'Next.js App Router API', 'REST & Webhooks', 'Hacking Ético', 'OWASP Top 10', 'Supabase / PostgreSQL'] },
    { category: 'Diseño, Conversión & SEO Local', items: ['Figma & Stitch Pro', 'Design Systems', 'Microanimaciones', 'Glassmorphism', 'Core Web Vitals 99+', 'Google Maps SEO'] }
  ],
  processSteps: [
    {
      step: '01',
      title: 'Boceto Visual en Google Stitch',
      description: 'Antes de escribir código o pedirte anticipo, plasmamos la interfaz visual de tu negocio en Google Stitch con estética Liquid Glass adaptada a tu giro.'
    },
    {
      step: '02',
      title: 'Demo Interactivo en Vivo',
      description: 'Pruebas en tu celular o computadora un demo funcional de tu plataforma para validar colores, secciones y experiencia de usuario.'
    },
    {
      step: '03',
      title: 'Producción en Google Antigravity',
      description: 'Una vez que confirmas tu pedido (50% anticipo), construimos tu sistema full stack en Next.js / React + TypeScript con máxima seguridad y velocidad.'
    },
    {
      step: '04',
      title: 'Lanzamiento, IA & Crecimiento',
      description: 'Ponemos en marcha tu hosting, dominio y agente IA 24/7 para comenzar a captar y atender clientes en automático.'
    }
  ]
};

export const OFFICIAL_AGENCY_PACKAGES = [
  {
    id: 'esencial',
    name: 'Plan Esencial',
    subtitle: 'Landing Page de Alta Conversión (Liquid Glass)',
    priceMxn: 4900,
    depositMxn: 2450,
    deliveryTime: '3 a 5 días',
    highlighted: false,
    description:
      'Ideal para profesionistas y comercios locales que desean una presencia profesional inmediata y captación directa por WhatsApp.',
    features: [
      'Landing Page de una sola página (One-Page) con hasta 4 secciones clave',
      'Diseño exclusivo con estética Liquid Glass adaptado a los colores de tu marca',
      'Botón flotante y enlaces directos a WhatsApp con mensajes prellenados',
      '1.er año de Hosting de alta velocidad y Dominio .com incluido gratis',
      'Optimización móvil al 100% (Mobile-First) y carga ultra rápida en 4G/5G',
      'Certificado de seguridad SSL incluido y formulario de contacto activo'
    ]
  },
  {
    id: 'profesional',
    name: 'Plan Profesional',
    subtitle: 'Sitio Web Completo (6 Vistas) + Agenda / Catálogo',
    priceMxn: 8900,
    depositMxn: 4450,
    deliveryTime: '5 a 7 días',
    highlighted: true,
    description:
      'Nuestra solución más demandada: presencia integral con catálogo de productos o servicios, sistema de agendamiento y posicionamiento local.',
    features: [
      'Sitio Web Completo de hasta 6 vistas (Inicio, Servicios, Nosotros, Catálogo, Blog/Galería, Contacto)',
      'Catálogo interactivo con filtrado por categorías o agenda online de citas',
      'Optimización de SEO Local para aparecer en Google Maps y búsquedas de tu zona',
      '1.er año de Hosting y Dominio incluido gratis',
      'Integración con analítica web y pixel de seguimiento para medir visitantes',
      'Diseño Liquid Glass inmersivo con microanimaciones y soporte para modo oscuro'
    ]
  },
  {
    id: 'escalable',
    name: 'Plan Escalable + IA',
    subtitle: 'Ecosistema Web + Agente IA 24/7 (Gemini) + Panel Admin',
    priceMxn: 14900,
    depositMxn: 7450,
    deliveryTime: '7 a 10 días',
    highlighted: false,
    description:
      'Plataforma digital autónoma con Inteligencia Artificial integrada (Google AI Studio) que atiende, cotiza y califica clientes 24/7.',
    features: [
      'Todo lo incluido en el Plan Profesional (+ 1.er año Hosting y Dominio gratis)',
      'Asistente de Inteligencia Artificial (Gemini) entrenado con tus precios y servicios',
      'Panel autoadministrable en la nube para actualizar catálogo y promociones',
      'Control multi-sucursal o gestión avanzada de citas/clientes (CRM ligero)',
      'Automatización de confirmaciones y recordatorios por WhatsApp/Email',
      'Capacitación en video para tu equipo y 60 días de soporte prioritario directo'
    ]
  }
] as const;

export const OFFICIAL_RECURRING_PLANS = [
  {
    id: 'renovacion_anual',
    name: 'Renovación Anual Básica',
    priceMxn: 1950,
    period: 'año (desde 2.º año)',
    badge: '1.er Año Gratis',
    description: 'Mantén tu sitio web, dominio .com, certificado SSL y copias de seguridad activas sin cobros mensuales forzosos.'
  },
  {
    id: 'crecimiento_seo',
    name: 'Póliza Crecimiento + SEO Maps',
    priceMxn: 890,
    period: 'mes',
    badge: 'Más Popular',
    description: '2 actualizaciones mensuales de promociones/precios + optimización continua de tu perfil en Google Maps + reporte de prospectos.'
  },
  {
    id: 'business_ia',
    name: 'Póliza Business + Agente IA 24/7',
    priceMxn: 1890,
    period: 'mes',
    badge: 'IA Activa',
    description: 'Todo lo anterior + consumo y entrenamiento continuo de tu Agente IA (Google Gemini) + hasta 4 mejoras evolutivas al mes.'
  },
  {
    id: 'ads_iguala',
    name: 'Iguala Tráfico (Meta / Google Ads)',
    priceMxn: 3500,
    period: 'mes',
    badge: 'Captación Local',
    description: 'Creación de anuncios, segmentación en tu ciudad y optimización continua de campañas (pauta publicitaria pagada directo a Meta/Google).'
  }
] as const;

export const OFFICIAL_PAYMENT_CARDS = [
  {
    id: 'tarjeta_1',
    alias: 'Tarjeta Oficial 1 (Principal)',
    bankNetwork: 'BBVA / Visa Débito',
    formattedNumber: '4152 3147 1472 5713',
    cleanNumber: '4152314714725713',
    holder: 'HP Digital & AI Agency',
    gradient: 'from-sky-500 via-blue-600 to-indigo-600',
    note: 'Depósito o transferencia inmediata a 16 dígitos (Anticipo 50% o Liquidación)'
  },
  {
    id: 'tarjeta_2',
    alias: 'Tarjeta Oficial 2 (Alterna)',
    bankNetwork: 'Inbursa / Visa',
    formattedNumber: '4658 2850 2069 2996',
    cleanNumber: '4658285020692996',
    holder: 'HP Digital & AI Agency',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    note: 'Opción alterna activa 24/7 (Banco Inbursa) para transferencia a tarjeta o depósito directo'
  }
] as const;
