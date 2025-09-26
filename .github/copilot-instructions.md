# Copilot Instructions – Finanzas Seguras S.A.C.

## Contexto de la Empresa

Finanzas Seguras S.A.C. es una empresa ficticia peruana fundada en 2018 y ubicada en Lima. Se dedica a brindar asesoría financiera y educación en finanzas personales. Atiende a más de 350 clientes activos, en su mayoría jóvenes profesionales y familias de clase media. Actualmente, depende de hojas de cálculo dispersas, lo cual genera duplicidad de datos, errores manuales y reportes poco personalizados.

## Objetivo General del Proyecto

Desarrollar una **plataforma digital inteligente** que permita a la empresa:

1. Centralizar la información financiera de sus clientes en la nube.
2. Automatizar la generación de reportes confiables y en tiempo real.
3. Personalizar recomendaciones financieras utilizando Inteligencia Artificial.

## Problemas Identificados

1. **Dispersión de información**: datos repartidos en múltiples hojas de cálculo, sin acceso en tiempo real.
2. **Falta de personalización**: los reportes entregados a clientes contienen recomendaciones generales, sin reflejar hábitos individuales.

## Soluciones propuestas

1. Implementar una base de datos en la nube con **Firebase Firestore** + **Cloud Functions** para centralizar registros y automatizar reportes.
2. Integrar **Gemini IA** para analizar patrones de consumo y generar recomendaciones financieras personalizadas.

## Alcance del MVP (fase actual)

El MVP debe sentar la base del sistema, incluyendo:

- **Autenticación de usuarios** (clientes y asesores) con Firebase Auth.
- **CRUD de transacciones** (ingresos/gastos) almacenados en Firestore.
- **Dashboard inicial** con visualización de transacciones y gráfico de balance.
- **Reglas básicas de seguridad** en Firestore (cada usuario solo accede a sus datos).
- Infraestructura lista para escalar: React + TypeScript, Tailwind, Firebase Emulator Suite.

## Tecnologías

- **Frontend**: React.js + TypeScript + Tailwind CSS.
- **Backend/Servicios**: Firebase Authentication, Firestore, Cloud Functions, Hosting.
- **Visualización**: Recharts o Chart.js.
- **Estado**: React Query o react-firebase-hooks.

## Buenas prácticas a seguir

- Arquitectura por capas (UI → hooks → servicios → Firestore).
- Uso de TypeScript en todo el proyecto.
- Configuración de eslint + prettier + husky para mantener código limpio.
- Pensar siempre en escalabilidad futura (IA, BigQuery, almacenamiento en Cloud Storage).

## Roadmap del Proyecto

1. **MVP (actual)**: autenticación, CRUD transacciones, dashboard con gráfico básico.
2. **Automatización**: Cloud Functions para reportes y notificaciones.
3. **Personalización**: Integración con Gemini IA para generar recomendaciones financieras.
4. **Escalabilidad**: BigQuery para análisis avanzado y Cloud Storage para comprobantes.
