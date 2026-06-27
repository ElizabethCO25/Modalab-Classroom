# ModaLAB Escuela - Aula Virtual

Aplicación web de aula virtual desarrollada con React, Vite y Firebase (Authentication, Firestore, Storage).

## Características

- **Autenticación**: Login con correo y contraseña mediante Firebase Authentication
- **Perfiles de usuario**:
  - **Alumno**: Ver cursos asignados, tareas, materiales y enviar entregas
  - **Administrador**: Crear usuarios, cursos, asignar tareas, subir contenido, actualizar preferencias
- **Base de datos**: Firestore con colecciones para usuarios, cursos, tareas y configuraciones
- **Almacenamiento**: Firebase Storage para archivos (PDF, imágenes, videos)

## Estructura del Proyecto

```
modalab-escuela/
├── src/
│   ├── main.jsx          # Punto de entrada de React
│   ├── App.jsx           # Componente principal con rutas
│   ├── firebase.js       # Configuración de Firebase
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Páginas principales
│   │   ├── Login.jsx     # Página de login
│   │   ├── AdminDashboard.jsx  # Panel de administrador
│   │   └── StudentDashboard.jsx # Panel de alumno
│   └── styles/           # Estilos CSS
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Configuración de Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilita Authentication (correo/contraseña)
3. Crea una base de datos Firestore
4. Habilita Storage para archivos
5. Copia las credenciales en `src/firebase.js`

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Colecciones de Firestore

- `users`: Información de usuarios (rol: admin/student)
- `courses`: Cursos disponibles
- `enrollments`: Relación alumno-curso
- `assignments`: Tareas asignadas
- `submissions`: Entregas de alumnos
- `materials`: Materiales de curso
- `settings`: Configuración de la escuela (logo, nombre, etc.)

## Reglas de Seguridad

Las reglas de seguridad se definen en `firestore.rules` y `storage.rules`.

## Licencia

MIT
