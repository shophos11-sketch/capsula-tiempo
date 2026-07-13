import { Product } from '../types/product';

export const products: Product[] = [
  // Ropa
  {
    id: '1',
    name: 'Conjunto Deportivo Premium',
    price: 45,
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjByZXRhaWwlMjBzdG9yZXxlbnwxfHx8fDE3ODM4ODU5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Ropa',
    description: 'Conjunto deportivo de alta calidad con tela transpirable y diseño ergonómico. Ideal para entrenamientos intensos o uso diario. Disponible en tallas S al XL.'
  },
  {
    id: '2',
    name: 'Casaca de Invierno',
    price: 89,
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjByZXRhaWwlMjBzdG9yZXxlbnwxfHx8fDE3ODM4ODU5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Ropa',
    description: 'Casaca abrigadora con relleno de alta densidad y exterior impermeable. Perfecta para los días más fríos. Bolsillos laterales con cierre.'
  },
  {
    id: '3',
    name: 'Blusa Elegante',
    price: 35,
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjByZXRhaWwlMjBzdG9yZXxlbnwxfHx8fDE3ODM4ODU5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Ropa',
    description: 'Blusa de corte moderno en tela suave y fluida. Perfecta para reuniones de trabajo o salidas informales. Múltiples colores disponibles.'
  },
  {
    id: '4',
    name: 'Pantalón de Vestir',
    price: 55,
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjByZXRhaWwlMjBzdG9yZXxlbnwxfHx8fDE3ODM4ODU5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Ropa',
    description: 'Pantalón de vestir con corte recto y tela de alta resistencia. Ideal para el ambiente de oficina o eventos formales. Lavado a máquina.'
  },
  // Regalos
  {
    id: '5',
    name: 'Caja de Regalo Premium',
    price: 25,
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwcHJlc2VudCUyMHdyYXBwZWQlMjBib3h8ZW58MXx8fHwxNzgzODg1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Regalos',
    description: 'Caja de regalo decorada con moño y papel de regalo incluido. Perfecta para cualquier ocasión especial: cumpleaños, aniversarios o Navidad.'
  },
  {
    id: '6',
    name: 'Set de Velas Aromáticas',
    price: 30,
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwcHJlc2VudCUyMHdyYXBwZWQlMjBib3h8ZW58MXx8fHwxNzgzODg1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Regalos',
    description: 'Set de 6 velas aromáticas con fragancias naturales de lavanda, vainilla y canela. Tiempo de quema de 30 horas cada una. Presentación en caja de madera.'
  },
  {
    id: '7',
    name: 'Marco de Fotos Decorativo',
    price: 18,
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwcHJlc2VudCUyMHdyYXBwZWQlMjBib3h8ZW58MXx8fHwxNzgzODg1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Regalos',
    description: 'Marco de madera rústica para fotos de 15x20 cm. Viene con soporte trasero para mesa y ganchos para pared. Ideal como regalo personalizado.'
  },
  // Mascotas
  {
    id: '8',
    name: 'Juguete Interactivo para Perros',
    price: 22,
    image: 'https://images.unsplash.com/photo-1589924749359-9697080c3577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBhY2Nlc3NvcmllcyUyMHRveXMlMjBkb2d8ZW58MXx8fHwxNzgzODg1OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mascotas',
    description: 'Juguete mordedor resistente con dispensador de premios. Estimula la actividad mental y física de tu perro. Material no tóxico y lavable.'
  },
  {
    id: '9',
    name: 'Cama Confortable para Gatos',
    price: 42,
    image: 'https://images.unsplash.com/photo-1589924749359-9697080c3577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBhY2Nlc3NvcmllcyUyMHRveXMlMjBkb2d8ZW58MXx8fHwxNzgzODg1OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mascotas',
    description: 'Cama redonda con bordes altos para mayor comodidad. Relleno de espuma de memoria. Funda removible y lavable a máquina. Talla única para gatos.'
  },
  {
    id: '10',
    name: 'Collar Ajustable',
    price: 15,
    image: 'https://images.unsplash.com/photo-1589924749359-9697080c3577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBhY2Nlc3NvcmllcyUyMHRveXMlMjBkb2d8ZW58MXx8fHwxNzgzODg1OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mascotas',
    description: 'Collar de nylon resistente con hebilla de acero y argolla para plaquita. Ajustable del tamaño S al L. Disponible en varios colores.'
  },
  {
    id: '11',
    name: 'Comedero Doble',
    price: 28,
    image: 'https://images.unsplash.com/photo-1589924749359-9697080c3577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBhY2Nlc3NvcmllcyUyMHRveXMlMjBkb2d8ZW58MXx8fHwxNzgzODg1OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mascotas',
    description: 'Comedero doble de acero inoxidable con base antideslizante. Capacidad de 500ml por recipiente. Fácil limpieza y durabilidad garantizada.'
  },
  // Tecnología
  {
    id: '12',
    name: 'Auriculares Bluetooth',
    price: 65,
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZ2FkZ2V0cyUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc4Mzg4NTk4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tecnología',
    description: 'Auriculares inalámbricos con cancelación de ruido activa. Batería de 30 horas de duración. Conectividad Bluetooth 5.0 y sonido estéreo de alta fidelidad.'
  },
  {
    id: '13',
    name: 'Mouse Inalámbrico',
    price: 38,
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZ2FkZ2V0cyUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc4Mzg4NTk4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tecnología',
    description: 'Mouse ergonómico inalámbrico con receptor USB nano. Sensor óptico de 1600 DPI y 3 botones programables. Compatible con Windows y Mac.'
  },
  {
    id: '14',
    name: 'Cargador Portátil 20000mAh',
    price: 52,
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZ2FkZ2V0cyUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc4Mzg4NTk4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tecnología',
    description: 'Power bank de 20000mAh con carga rápida 22.5W. Dos puertos USB-A y un puerto USB-C. Carga hasta 4 dispositivos a la vez. Indicador LED de batería.'
  },
  {
    id: '15',
    name: 'Teclado Mecánico RGB',
    price: 95,
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZ2FkZ2V0cyUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc4Mzg4NTk4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tecnología',
    description: 'Teclado mecánico con iluminación RGB por tecla. Switches blue de tacto clicky. Construcción en aluminio con reposamuñecas desmontable. Anti-ghosting completo.'
  },
  // Hogar & Deco
  {
    id: '16',
    name: 'Lámpara de Mesa Moderna',
    price: 48,
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3ODM4ODU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Hogar & Deco',
    description: 'Lámpara de mesa con base de madera y pantalla de tela. Luz cálida de 3000K y regulador de intensidad táctil. Cable de 1.8m con enchufe estándar.'
  },
  {
    id: '17',
    name: 'Cojines Decorativos Set 4',
    price: 32,
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3ODM4ODU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Hogar & Deco',
    description: 'Set de 4 cojines decorativos de 45x45 cm con relleno de fibra hueca. Funda removible en algodón con cierre invisible. Colores neutros para cualquier estilo.'
  },
  {
    id: '18',
    name: 'Espejo de Pared Grande',
    price: 78,
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3ODM4ODU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Hogar & Deco',
    description: 'Espejo rectangular de 80x120 cm con marco de madera tallada. Incluye ganchos de pared y nivel de burbuja para instalación perfecta. Acabado en nogal natural.'
  },
  {
    id: '19',
    name: 'Reloj de Pared Vintage',
    price: 40,
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3ODM4ODU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Hogar & Deco',
    description: 'Reloj de pared de 40 cm diámetro con diseño vintage. Mecanismo silencioso de cuarzo. Requiere 1 pila AA. Marco en metal envejecido dorado.'
  },
  // Cocina
  {
    id: '20',
    name: 'Juego de Ollas Acero Inoxidable',
    price: 125,
    image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY29va3dhcmUlMjB1dGVuc2lsc3xlbnwxfHx8fDE3ODM4ODU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cocina',
    description: 'Set de 5 ollas en acero inoxidable 18/10 con tapa de vidrio. Compatible con todo tipo de cocinas incluida inducción. Apto para lavavajillas.'
  },
  {
    id: '21',
    name: 'Set de Cuchillos Profesional',
    price: 88,
    image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY29va3dhcmUlMjB1dGVuc2lsc3xlbnwxfHx8fDE3ODM4ODU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cocina',
    description: 'Set de 6 cuchillos de acero alemán con mango ergonómico antideslizante. Incluye bloque de madera. Bordes afilados de fábrica y alta durabilidad.'
  },
  {
    id: '22',
    name: 'Licuadora de Alta Potencia',
    price: 145,
    image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY29va3dhcmUlMjB1dGVuc2lsc3xlbnwxfHx8fDE3ODM4ODU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cocina',
    description: 'Licuadora de 1200W con vaso de vidrio templado de 1.5L. 5 velocidades y función pulse. Ideal para smoothies, sopas y salsas. Garantía de 2 años.'
  },
  {
    id: '23',
    name: 'Tabla de Cortar Bambú',
    price: 22,
    image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY29va3dhcmUlMjB1dGVuc2lsc3xlbnwxfHx8fDE3ODM4ODU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cocina',
    description: 'Tabla de cortar en bambú orgánico de 40x28 cm. Superficie antibacteriana natural. Con ranura para jugos y asas laterales. Lavado a mano recomendado.'
  },
  // Remates
  {
    id: '24',
    name: 'Mochila Urbana - Oferta',
    price: 35,
    image: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlJTIwY2xlYXJhbmNlJTIwZGlzY291bnQlMjBwcm9kdWN0c3xlbnwxfHx8fDE3ODM4ODU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Remates',
    description: '¡Precio de remate! Mochila urbana de 30L con puerto USB integrado y compartimento para laptop de 15". Material resistente al agua. Stock limitado.'
  },
  {
    id: '25',
    name: 'Zapatillas Running - Liquidación',
    price: 55,
    image: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlJTIwY2xlYXJhbmNlJTIwZGlzY291bnQlMjBwcm9kdWN0c3xlbnwxfHx8fDE3ODM4ODU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Remates',
    description: '¡Liquidación total! Zapatillas de running con suela amortiguadora y malla transpirable. Tallas del 38 al 44. Última temporada a precio de costo.'
  },
  {
    id: '26',
    name: 'Reloj Digital - Saldo',
    price: 28,
    image: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlJTIwY2xlYXJhbmNlJTIwZGlzY291bnQlMjBwcm9kdWN0c3xlbnwxfHx8fDE3ODM4ODU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Remates',
    description: '¡A precio de saldo! Reloj digital con pantalla LED, cronómetro, alarma y resistencia al agua 30m. Correa de silicona intercambiable. Batería incluida.'
  },
  {
    id: '27',
    name: 'Termo Acero - Último Stock',
    price: 18,
    image: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlJTIwY2xlYXJhbmNlJTIwZGlzY291bnQlMjBwcm9kdWN0c3xlbnwxfHx8fDE3ODM4ODU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Remates',
    description: '¡Últimas unidades! Termo de acero inoxidable de doble pared de 500ml. Mantiene bebidas frías 24h y calientes 12h. Sin BPA. Ideal para llevar al trabajo.'
  }
];

export const categories = [
  'Ropa',
  'Regalos',
  'Mascotas',
  'Tecnología',
  'Hogar & Deco',
  'Cocina',
  'Remates'
];
