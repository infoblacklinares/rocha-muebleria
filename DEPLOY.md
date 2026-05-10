# 🚀 Deploy a GitHub + Vercel

Guía paso a paso para poner el sitio en línea con deploy automático.

**Resultado final:** una URL pública (`rocha-muebleria.vercel.app` o similar) que se actualiza sola cada vez que hagamos cambios.

---

## Requisitos previos

Antes de empezar, asegúrate de tener:

- ✅ **Node.js 18.17+** instalado → [nodejs.org](https://nodejs.org)
- ✅ **Git** instalado → [git-scm.com](https://git-scm.com)
- ✅ Cuenta de **GitHub** → [github.com](https://github.com) (gratis)
- ✅ Cuenta de **Vercel** → [vercel.com](https://vercel.com) (gratis, conviene crearla con tu mismo GitHub)

Para verificar que tienes todo, abre la terminal y corre:

```bash
node --version    # debe decir v18.17 o mayor
git --version     # debe mostrar una versión
```

---

## Paso 1 — Probar localmente (5 min)

Abre PowerShell o terminal **dentro de la carpeta `rocha-nextjs`**:

```bash
cd C:\Users\Administrador\Desktop\empresa\muebleriarocha\rocha-nextjs
npm install
```

Esto descarga las dependencias (puede tardar 1-3 min la primera vez).

Crea el archivo de variables locales:

```bash
copy .env.example .env.local
```

Edita `.env.local` y reemplaza el número de WhatsApp:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=56987654321
```

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Si todo carga bien, listo para subir.

---

## Paso 2 — Crear repositorio en GitHub (2 min)

1. Entra a [github.com/new](https://github.com/new)
2. **Repository name:** `rocha-muebleria` (o el nombre que quieras)
3. **Visibilidad:** Public o Private (cualquiera funciona)
4. **NO** marques "Add a README" ni "Add .gitignore" — los crearemos nosotros
5. Click **"Create repository"**

GitHub te mostrará una pantalla con comandos. **Cópialos pero no los ejecutes todavía** — los usaremos en el siguiente paso.

---

## Paso 3 — Subir el código a GitHub (3 min)

En la terminal, asegúrate de estar en `rocha-nextjs/`:

```bash
cd C:\Users\Administrador\Desktop\empresa\muebleriarocha\rocha-nextjs
```

Inicializa Git y haz el primer commit:

```bash
git init
git add .
git commit -m "feat: primera versión del sitio"
git branch -M main
```

Conecta el repo local con GitHub (reemplaza `TU-USUARIO` por tu usuario de GitHub):

```bash
git remote add origin https://github.com/TU-USUARIO/rocha-muebleria.git
git push -u origin main
```

GitHub te pedirá autenticarte. Si es la primera vez:
- Te abrirá una ventana del navegador
- Inicia sesión y autoriza
- Vuelve a la terminal — el push continuará solo

Recarga la página de GitHub: deberías ver todos los archivos.

---

## Paso 4 — Conectar a Vercel y deploy (2 min)

1. Entra a [vercel.com/new](https://vercel.com/new)
2. Si es la primera vez, **conecta tu cuenta de GitHub** (botón "Continue with GitHub")
3. En **"Import Git Repository"**, busca `rocha-muebleria` y dale **"Import"**
4. Vercel detectará automáticamente que es Next.js. Verifica:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (déjalo así)
   - **Build Command:** `next build` (auto)
   - **Output Directory:** `.next` (auto)
5. Abre **"Environment Variables"** y agrega:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `56987654321` (el número real)
   - `NEXT_PUBLIC_SITE_URL` = `https://rocha-muebleria.vercel.app` (la URL que te dará Vercel)
6. Click **"Deploy"**

En 1-2 minutos verás 🎉 — Vercel te dará una URL como `https://rocha-muebleria.vercel.app`. **Ese es tu sitio en línea.**

---

## Paso 5 — Deploy automático

A partir de aquí, **cada vez que hagamos cambios**:

```bash
git add .
git commit -m "describe el cambio"
git push
```

Vercel detecta el push y despliega solo en ~30 segundos.

También puedes editar archivos directamente en github.com y al guardar se despliega solo.

---

## Dominio propio (opcional, después)

Cuando compres el dominio `muebleriarocha.cl` (o el que sea):

1. En Vercel → tu proyecto → **Settings → Domains**
2. Agrega el dominio
3. Vercel te dirá qué registros DNS apuntar a Vercel
4. Lo configuras en donde compraste el dominio (NIC.cl, GoDaddy, etc.)
5. En 1-24h estará apuntando

---

## Comandos útiles para el día a día

```bash
# Ver qué cambió antes de commitear
git status
git diff

# Subir un cambio rápido
git add .
git commit -m "describe el cambio"
git push

# Bajar cambios si trabajas en otra máquina
git pull

# Probar localmente antes de subir
npm run dev

# Verificar que el build de producción no tenga errores
npm run build
```

---

## Problemas frecuentes

**❌ `git push` pide usuario/contraseña y rechaza el password**
GitHub ya no acepta contraseñas en CLI. Necesitas:
- Opción A (más fácil): instalar **GitHub Desktop** desde [desktop.github.com](https://desktop.github.com) y hacer el push desde ahí.
- Opción B: crear un **Personal Access Token** en GitHub → Settings → Developer settings → Tokens → Generate new token (classic) → marca `repo`. Usar ese token como contraseña.

**❌ Vercel build falla con "Module not found"**
Asegurarse de hacer `git push` después de `npm install`. Si modificaste `package.json`, el `package-lock.json` también debe estar commiteado.

**❌ El sitio sale pero el WhatsApp no funciona**
Falta agregar `NEXT_PUBLIC_WHATSAPP_NUMBER` en Vercel → Settings → Environment Variables → Redeploy.

**❌ Cambios no se ven en producción**
- ¿Hiciste `git push`?
- En Vercel → Deployments → ¿hay un deploy reciente? ¿Está en "Ready"?
- Hard reload del navegador (Ctrl+F5)

---

## Resumen visual del flujo

```
┌─────────────────┐   git push   ┌──────────┐   webhook   ┌────────┐
│  Tu computador  │ ───────────► │  GitHub  │ ──────────► │ Vercel │
│  (editas code)  │              │  (repo)  │             │ (live) │
└─────────────────┘              └──────────┘             └────────┘
                                                                │
                                                                ▼
                                                       muebleriarocha.cl
```

Cada vez que pushes, en menos de un minuto el sitio se actualiza solo.
