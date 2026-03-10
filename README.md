# Tema Shopify - Landing Page

## 📋 Descripción

Este es un tema personalizado para Shopify que incluye una landing page moderna y responsive con las siguientes características:

- Hero banner con imagen de fondo y call-to-action
- Sección de productos destacados
- Grid de características del negocio
- Testimonios de clientes
- Formulario de newsletter
- Diseño completamente responsive
- Animaciones suaves al scroll
- Sistema de carrito con AJAX

## 🚀 Instalación

### Opción 1: Subir archivos manualmente

1. Accede a tu panel de administración de Shopify
2. Ve a **Tienda online** > **Temas**
3. Haz clic en **Agregar tema** > **Subir archivo ZIP**
4. Comprime la carpeta del tema en un archivo ZIP
5. Sube el archivo ZIP
6. Haz clic en **Publicar** para activar el tema

### Opción 2: Usar Shopify CLI

```bash
# Instalar Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Conectar con tu tienda
shopify login --store tu-tienda.myshopify.com

# Subir el tema
shopify theme push

# O usar en modo desarrollo
shopify theme dev
```

## 📁 Estructura de archivos

```
PaginaShopify/
├── assets/               # CSS, JS e imágenes
│   ├── theme.css        # Estilos globales
│   └── theme.js         # JavaScript principal
├── config/              # Configuraciones del tema
│   └── settings_schema.json
├── layout/              # Layout principal
│   └── theme.liquid
├── sections/            # Secciones reutilizables
│   ├── hero-banner.liquid
│   ├── featured-products.liquid
│   ├── features-grid.liquid
│   ├── testimonials.liquid
│   └── newsletter.liquid
└── templates/           # Templates de páginas
    └── page.landing.liquid
```

## 🎨 Personalización

### Colores

Edita las variables CSS en `assets/theme.css`:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
}
```

### Configuración desde el editor de temas

1. Ve a **Tienda online** > **Temas** > **Personalizar**
2. Usa el editor visual para:
   - Cambiar textos e imágenes
   - Reordenar secciones
   - Ajustar colores y fuentes
   - Configurar productos destacados

## 📄 Crear una Landing Page

1. En el admin de Shopify, ve a **Tienda online** > **Páginas**
2. Haz clic en **Agregar página**
3. Ingresa título y contenido
4. En la parte derecha, en **Plantilla**, selecciona `page.landing`
5. Guarda la página

## ✨ Características de las secciones

### Hero Banner
- Imagen de fondo personalizable
- Título y subtítulo editables
- Dos botones CTA configurables
- Overlay con opacidad ajustable

### Productos Destacados
- Muestra productos de una colección
- Número de productos configurable (2-12)
- Badges de ofertas automáticos
- Botón "Agregar al carrito" con AJAX

### Features Grid
- Grid responsive de características
- Iconos SVG personalizables
- Título y descripción por característica
- Cantidad ilimitada de bloques

### Testimonios
- Sistema de calificación con estrellas
- Nombre y cargo del autor
- Grid responsive (1-3 columnas)
- Cantidad ilimitada de testimonios

### Newsletter
- Formulario de suscripción
- Validación de email
- Mensajes de éxito/error
- Integración con base de datos de Shopify

## 🔧 JavaScript

El archivo `theme.js` incluye:

- **Carrito AJAX**: Agregar productos sin recargar la página
- **Animaciones al scroll**: Elementos aparecen al hacer scroll
- **Smooth scroll**: Navegación suave entre secciones
- **Validación de formularios**: Validación en tiempo real
- **Lazy loading**: Carga diferida de imágenes

## 📱 Responsive Design

El tema es completamente responsive con breakpoints en:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🎯 Mejores prácticas

- Todas las imágenes deben optimizarse antes de subirlas
- Usa el formato WebP para mejor rendimiento
- Mantén el número de productos destacados entre 4-8
- Actualiza regularmente los testimonios
- Prueba la página en diferentes dispositivos

## 🐛 Solución de problemas

### Los productos no se muestran
- Verifica que hayas seleccionado una colección en la configuración
- Asegúrate de que la colección tenga productos activos

### Los estilos no se aplican
- Limpia la caché de Shopify
- Verifica que el archivo CSS esté correctamente enlazado en `theme.liquid`

### El carrito AJAX no funciona
- Revisa la consola del navegador para errores
- Asegúrate de que el tema tenga acceso a la API de carrito

## 📞 Soporte

Para soporte adicional:
- Documentación de Shopify: https://shopify.dev/themes
- Comunidad de Shopify: https://community.shopify.com
- Liquid Cheat Sheet: https://www.shopify.com/partners/shopify-cheat-sheet

## 📝 Licencia

Este tema es de uso libre para proyectos personales y comerciales.

## 🔄 Actualizaciones

**Versión 1.0.0** (Marzo 2026)
- Lanzamiento inicial
- Hero banner
- Productos destacados
- Features grid
- Testimonios
- Newsletter

---

Creado con ❤️ para Shopify
