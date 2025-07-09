# 🎓 KarAI - Plataforma Educativa con Inteligencia Artificial

![KarAI Logo](https://img.shields.io/badge/KarAI-IA%20Educativa-green?style=for-the-badge&logo=book-open&logoColor=white)

**KarAI** es una plataforma educativa moderna que utiliza inteligencia artificial para transformar materiales de estudio en flashcards, quizzes y resúmenes personalizados. Diseñada para estudiantes, profesores y autodidactas que buscan una forma más inteligente de aprender.

![Screenshot](https://via.placeholder.com/800x400/f8f9fa/1a1a1e?text=KarAI+-+Dashboard)

## ✨ Características Principales

### 🧠 **Inteligencia Artificial Integrada**

- Generación automática de flashcards desde PDFs y documentos
- Creación de quizzes adaptativos con retroalimentación inteligente
- Resúmenes automáticos con etiquetas y categorización

### 📚 **Gestión de Materiales**

- **Subir Material**: Soporte para PDF, DOC, TXT, MP3, WAV
- **Mis Notas**: Organización con etiquetas, emojis y soporte LaTeX
- **Flashcards**: Sistema de repetición espaciada con autoevaluación
- **Quizzes**: Exámenes con corrección automática y análisis de errores

### 📊 **Seguimiento de Progreso**

- Dashboard personalizado con métricas de rendimiento
- Racha de estudio y objetivos semanales
- Análisis de errores comunes y fortalezas
- Estadísticas detalladas por materia

### 🎨 **Diseño Moderno**

- Paleta de colores elegante inspirada en aplicaciones profesionales
- Interfaz minimalista con excelente UX/UI
- Totalmente responsive (móvil, tablet, desktop)
- Microinteracciones suaves y animaciones cuidadas

## 🛠 Tecnologías Utilizadas

### **Frontend**

- **React 18** - Biblioteca principal de UI
- **TypeScript** - Tipado estático para mejor desarrollo
- **Vite** - Build tool ultrarrápido
- **React Router 6** - Enrutamiento SPA
- **TailwindCSS 3** - Framework de estilos utility-first
- **Radix UI** - Componentes accesibles y primitivos
- **Lucide React** - Iconografía moderna
- **Framer Motion** - Animaciones fluidas

### **Backend**

- **Express.js** - Servidor web minimalista
- **Node.js** - Runtime de JavaScript
- **Zod** - Validación de esquemas

### **Herramientas de Desarrollo**

- **Vitest** - Framework de testing
- **ESLint + Prettier** - Linting y formateo
- **Tailwind Merge** - Optimización de clases CSS

## 🚀 Instalación y Configuración

### **Prerrequisitos**

- Node.js 18+
- npm, yarn o pnpm
- Git

### **Clonar el Repositorio**

```bash
git clone https://github.com/tu-usuario/karai.git
cd karai
```

### **Instalar Dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

### **Variables de Entorno** (Opcional)

Crea un archivo `.env` en la raíz del proyecto:

```env
PORT=8080
NODE_ENV=development
```

## 💻 Ejecutar en Cursor

### **Método 1: Desarrollo Local**

1. **Abrir en Cursor**:

   ```bash
   cursor .
   ```

2. **Instalar dependencias** (si no lo has hecho):

   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo**:

   ```bash
   npm run dev
   ```

4. **Abrir en navegador**: `http://localhost:8080`

### **Método 2: Usar Scripts de Package.json**

```bash
# Desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Ejecutar versión de producción
npm run start

# Ejecutar tests
npm test

# Verificar tipos de TypeScript
npm run typecheck

# Formatear código
npm run format.fix
```

### **Estructura de Desarrollo en Cursor**

```
📁 Proyecto KarAI/
├── ���� client/           # Frontend React
│   ├── 📁 components/   # Componentes reutilizables
│   ├── 📁 pages/       # Páginas de la aplicación
│   ├── 📁 hooks/       # Custom React hooks
│   └── 📁 lib/         # Utilidades y helpers
├── 📁 server/          # Backend Express
├── 📁 shared/          # Tipos compartidos
└── 📄 package.json     # Dependencias y scripts
```

## 🗂 Estructura del Proyecto

```
karai/
├── client/                     # 🎨 Frontend React SPA
│   ├── components/
│   │   ├── ui/                # 🧩 Componentes UI (Radix)
│   │   └── AuthModal.tsx      # 🔐 Modal de autenticación
│   ├── pages/
│   │   ├── Index.tsx          # 🏠 Página principal
│   │   ├── Login.tsx          # 🔑 Inicio de sesión
│   │   ├── Dashboard.tsx      # 📊 Panel de usuario
│   │   ├── UploadMaterial.tsx # 📤 Subir archivos
│   │   ├── Notes.tsx          # 📝 Gestión de notas
│   │   ├── Flashcards.tsx     # 🃏 Sistema de flashcards
│   │   ├── Quizzes.tsx        # 🧪 Exámenes y quizzes
│   │   └── Progress.tsx       # 📈 Seguimiento de progreso
│   ├── hooks/                 # 🪝 Custom hooks
│   ├── lib/                   # 🛠 Utilidades
│   ├── App.tsx               # 🚀 Configuración de rutas
│   └── global.css            # 🎨 Estilos globales y tema
├── server/                    # ⚙️ Backend Express
│   ├── routes/               # 🛣 Rutas de API
│   └── index.ts              # 🖥 Servidor principal
├── shared/                    # 🤝 Tipos compartidos
└── 📄 Archivos de configuración
```

## 🌐 Rutas Disponibles

### **Páginas Públicas**

- `/` - Página principal de KarAI
- `/login` - Inicio de sesión y registro

### **Páginas Protegidas** (requieren autenticación)

- `/dashboard` - Panel principal del usuario
- `/upload` - Subir material de estudio
- `/notes` - Gestión de notas inteligentes
- `/flashcards` - Sistema de flashcards
- `/quizzes` - Exámenes y evaluaciones
- `/progress` - Seguimiento de progreso

### **API Endpoints**

- `GET /api/ping` - Health check
- `GET /api/demo` - Endpoint de demostración

## 🔑 Credenciales Demo

Para probar la aplicación sin registrarte, puedes usar estas credenciales:

```
Email: demo@karai.com
Contraseña: demo123
```

## 🎯 Flujo de Usuario

1. **Página Principal** → Usuario descubre KarAI
2. **"Comenzar Gratis"** → Acceso directo al Dashboard
3. **Explorar funciones** → Al intentar usar Flashcards/Notes/Quizzes aparece modal de login
4. **Autenticación** → Login modal rápido o página completa
5. **Dashboard** → Centro de control del usuario
6. **Funciones principales** → Upload, Notes, Flashcards, Quizzes, Progress

## 🔧 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (Full-stack)
npm run dev

# Build del cliente
npm run build:client

# Build del servidor
npm run build:server

# Build completo
npm run build

# Servidor de producción
npm run start

# Tests
npm test

# Verificación de tipos
npm run typecheck

# Formateo de código
npm run format.fix
```

## 🎨 Personalización del Tema

Los colores y estilos se pueden personalizar editando:

- **`client/global.css`** - Variables CSS principales
- **`tailwind.config.ts`** - Configuración de TailwindCSS

### **Paleta de Colores Actual**

```css
--primary: #101214 (Gris oscuro elegante) --secondary: #248f59 (Verde esmeralda)
  --background: #ffffff (Blanco) --muted: #f7f8f9 (Gris muy claro);
```

## 🚀 Despliegue

### **Build de Producción**

```bash
npm run build
npm run start
```

### **Docker** (Incluido)

```bash
docker build -t karai .
docker run -p 8080:8080 karai
```

### **Platforms Soportadas**

- ✅ Vercel
- ✅ Netlify
- ✅ Railway
- ✅ Docker
- ✅ VPS tradicional

## 🧪 Testing

```bash
# Ejecutar todos los tests
npm test

# Tests en modo watch
npm run test:watch

# Coverage de tests
npm run test:coverage
```

## 📦 Build para Distribución

El proyecto incluye configuración para generar ejecutables:

```bash
# Generar ejecutables para múltiples plataformas
npm run build:binary
```

Genera binarios para:

- 🪟 Windows
- 🍎 macOS
- 🐧 Linux

## 🤝 Contribución

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abre** un Pull Request

### **Estándares de Código**

- Usar TypeScript estricto
- Seguir convenciones de ESLint/Prettier
- Escribir tests para nuevas funcionalidades
- Documentar cambios importantes

## 📝 Notas de Desarrollo

### **Arquitectura**

- **Frontend**: SPA con React Router 6
- **Backend**: API REST con Express
- **Estado**: React hooks (sin Redux por simplicidad)
- **Estilos**: TailwindCSS + Radix UI
- **Build**: Vite para desarrollo ultrarrápido

### **Decisiones de Diseño**

- Paleta minimalista inspirada en herramientas profesionales
- Navegación intuitiva sin curva de aprendizaje
- Autenticación opcional hasta usar funciones específicas
- Diseño mobile-first totalmente responsive

## 🐛 Resolución de Problemas

### **Puerto en uso**

```bash
# Cambiar puerto en vite.config.ts o usar:
npm run dev -- --port 3000
```

### **Problemas de dependencias**

```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### **Errores de TypeScript**

```bash
# Verificar tipos
npm run typecheck
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 💡 Ideas para el Futuro

- 🤖 Integración con ChatGPT/Claude para generación de contenido
- 🎙️ Transcripción automática de audios
- 📊 Dashboard de profesores para seguimiento de estudiantes
- 🌍 Soporte multiidioma
- 📱 Aplicación móvil nativa
- 🔄 Sincronización en la nube
- 🎯 Gamificación con logros y recompensas

---

**¿Tienes preguntas?** Abre un [issue](https://github.com/tu-usuario/karai/issues) o contacta al equipo de desarrollo.

**⭐ ¡No olvides dar una estrella al repo si te gusta el proyecto!**
