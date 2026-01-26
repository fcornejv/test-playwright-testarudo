# 🚀 QA Automation - Testertestarudo

[![Playwright Tests](https://github.com/fcornejv/test-playwright-testarudo/actions/workflows/playwright.yml/badge.svg)](https://github.com/fcornejv/test-playwright-testarudo/actions)

Este proyecto contiene la suite de pruebas automatizadas **E2E (End-to-End)** para la plataforma **Testertestarudo**, desarrollada con **Playwright** y **TypeScript**.

---

## 📋 Criterios de Aceptación del Pipeline (CI/CD)

- [x] **Ejecución Automática:**  
  Los tests se disparan automáticamente en cada `push` o `pull_request` a las ramas `main` y `master`.

- [x] **Visibilidad de Resultados:**  
  Los reportes HTML y artefactos son generados y almacenados tras cada ejecución en GitHub Actions.

- [x] **Notificación de Fallos:**  
  El estado del pipeline es visible mediante el **Status Badge** superior y notificaciones de GitHub.

- [x] **Reporte para Informes:**  
  Generación automática del archivo `results.xml` (JUnit) y resumen con fecha para reportes en Excel.

---

## 🛠️ Stack Tecnológico

- **Framework:** Playwright
- **Lenguaje:** TypeScript
- **CI/CD:** GitHub Actions
- **Reportes:** HTML Report, JUnit (Excel) & Traces

---

## ⚙️ Instalación y Configuración Local

Asegúrate de tener instalado Node.js.

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/fcornejv/test-playwright-testarudo.git
cd test-playwright-testarudo
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Instalar navegadores de Playwright

```bash
npx playwright install
```

---

## 🚀 Ejecución de Pruebas

### Comandos principales

| Acción | Comando |
|------|--------|
| Ejecutar todos los tests (Headless) | npx playwright test |
| Ejecutar con Interfaz Gráfica (UI) | npx playwright test --ui |
| Ver reporte de la última ejecución | npx playwright show-report |

---

## 📊 Reportes y Evidencia

Cuando el pipeline finaliza en **GitHub Actions**:

1. Ve a la pestaña **Actions** del repositorio.
2. Selecciona la ejecución más reciente del workflow.
3. En el log del paso **"Generar Resumen Rápido"**, encontrarás la línea con la fecha lista para tu informe.
4. En la sección **Artifacts**, descarga `reporte-completo-qa` para obtener el archivo `results.xml`.

---

## 🔧 QA Automation Engineer

**Frank Cornejo**

---

