# 🔍 Validación de Firebase y gh-pages - Modalab Escuela

## ✅ Estado de la Validación

### 1. Configuración de Firebase

**Archivos verificados:**
- ✅ `src/firebase.js` - Configuración correcta usando variables de entorno
- ✅ `.env.example` - Plantilla disponible con todas las variables necesarias
- ⚠️ `.env` - **DEBES CREARLO** copiando `.env.example` y agregando tus credenciales reales

**Variables requeridas en `.env`:**
```env
VITE_FIREBASE_API_KEY=tu_api_key_aqui
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_proyecto_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

### 2. Servicios de Firestore

**Servicios implementados:**
- ✅ `userService.js` - CRUD completo de usuarios
- ✅ `courseService.js` - Gestión de cursos
- ✅ `assignmentService.js` - Gestión de tareas
- ✅ `submissionService.js` - Gestión de entregas
- ✅ `calendarService.js` - Calendario académico
- ✅ `messageService.js` - Mensajería
- ✅ `profileService.js` - Perfiles de usuario
- ✅ `storageService.js` - Manejo de archivos en Storage

### 3. Reglas de Seguridad

**Archivos de reglas:**
- ✅ `firestore.rules` - Reglas de seguridad para Firestore (roles admin/student)
- ✅ `storage.rules` - Reglas de seguridad para Storage (validación de tipos de archivo)

### 4. Build para gh-pages

**Estado del build:**
- ✅ `vite.config.js` - Configurado con `base: '/Modalab-Classroom/'`
- ✅ `package.json` - Scripts `predeploy` y `deploy` configurados
- ✅ `dist/` - Directorio generado exitosamente
- ✅ `main` y `gh-pages` - Ramas sincronizadas

## 📋 Pasos para Validar la Conexión

### Paso 1: Crear archivo .env

```bash
cp .env.example .env
```

Luego edita `.env` con tus credenciales reales de Firebase Console.

### Paso 2: Ejecutar script de validación

```bash
node test-firebase-connection.js
```

Este script verificará:
- ✅ Variables de entorno configuradas
- ✅ Inicialización de Firebase App
- ✅ Conexión a Firestore
- ✅ Servicios de Auth y Storage

### Paso 3: Desplegar a gh-pages

```bash
npm run deploy
```

Esto ejecutará:
1. `npm run build` - Compila la aplicación
2. `gh-pages -d dist` - Sube el build a la rama gh-pages

## 🔧 Consideraciones Importantes para gh-pages

### Variables de Entorno en Producción

⚠️ **IMPORTANTE**: Las variables de entorno NO se incluyen en el build por defecto. Para que funcionen en gh-pages:

**Opción A: Hardcodear configuración (solo para desarrollo)**
En `src/firebase.js`, reemplaza temporalmente:
```javascript
const firebaseConfig = {
  apiKey: "tu_api_key_real",
  authDomain: "tu_proyecto.firebaseapp.com",
  // ... resto de credenciales
}
```

**Opción B: Usar variables públicas en vite.config.js**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/Modalab-Classroom/',
  define: {
    'import.meta.env.VITE_FIREBASE_API_KEY': JSON.stringify(process.env.VITE_FIREBASE_API_KEY),
    // ... otras variables
  }
})
```

**Opción C: Crear archivo de configuración público**
Crea `src/firebase-config.js` con las credenciales (son públicas de todos modos) e impórtalo.

### Reglas de Seguridad en Producción

Asegúrate de haber subido las reglas de seguridad a Firebase Console:

```bash
# Si tienes Firebase CLI instalado
firebase deploy --only firestore:rules
firebase deploy --only storage:rules
```

O súbelas manualmente desde Firebase Console > Firestore > Rules

## ✅ Checklist Final

- [ ] Crear archivo `.env` con credenciales reales
- [ ] Ejecutar `node test-firebase-connection.js` para validar conexión
- [ ] Verificar que las reglas de seguridad estén aplicadas en Firebase Console
- [ ] Hacer build: `npm run build`
- [ ] Verificar que `dist/index.html` tenga la ruta base correcta
- [ ] Desplegar: `npm run deploy`
- [ ] Probar la aplicación en: `https://ElizabethCO25.github.io/Modalab-Classroom/`

## 🐛 Solución de Problemas Comunes

### Error: "Firebase: No Firebase App '[DEFAULT]' has been created"
- Solución: Verifica que `.env` existe y tiene las variables correctas

### Error: "PERMISSION_DENIED" en Firestore
- Solución: Revisa las reglas de seguridad en Firebase Console

### La app no carga en gh-pages
- Solución: Verifica que `vite.config.js` tenga `base: '/Modalab-Classroom/'`

### Error 404 en gh-pages
- Solución: Asegúrate de que la rama `gh-pages` esté actualizada con `npm run deploy`

## 📞 Soporte

Si necesitas ayuda adicional:
1. Revisa la consola del navegador para errores específicos
2. Verifica Firebase Console > Project Settings > General > Your apps
3. Consulta la documentación oficial de Firebase: https://firebase.google.com/docs
