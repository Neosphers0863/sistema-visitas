# 🏢 Sistema Interno de Registro de Visitas

Este es un sistema interno desarrollado en **React** para el registro y control de visitas en una empresa. Permite a un administrador registrar ingresos, marcar salidas, filtrar visitas por fecha y visualizar los datos de forma organizada.

---

## 🚀 Tecnologías Utilizadas

- React JS (Vite)
- React Router DOM
- JSON-server
- LocalStorage
- SweetAlert2
- HTML Semántico y CSS personalizado

---

## ✨ Funcionalidades

### Vista pública
- Página informativa de bienvenida.
- Botón para ir al panel administrativo.

### Panel del administrador
- Registro de visitas con nombre, motivo, hora de entrada.
- Marcar hora de salida manualmente.
- Filtro de visitas por fecha.
- Persistencia de datos con JSON-server.
- Cierre de sesión simulado con LocalStorage.

---

📁 Estructura de Carpetas

src/

├── components/

│   └── VisitForm.jsx

├── pages/

│   ├── PublicPage.jsx

│   ├── AdminPage.jsx

│   └── LoginPage.jsx

├── styles/

│   └── App.css

├── App.jsx

└── main.jsx
```

---

⚙️ Instalación y Uso

1. Clona el repositorio:

git clone https://github.com/tu-usuario/sistema-visitas.git
cd sistema-visitas

2. Instala las dependencias:
npm install

3. Inicia el servidor JSON-server:
npx json-server --watch db.json --port 3001

4. Inicia el proyecto React:
npm run dev

5. Abre el navegador en `http://localhost:5173`

---

🔐 Simulación de Login

- Se simula el inicio de sesión almacenando un `token` en `localStorage`.
- Las rutas están protegidas y redirigen si el token no está presente.

---

📄 Ejemplo de db.json
{
  "visitas": [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "motivo": "Entrega",
      "horaEntrada": "09:30:00",
      "horaSalida": "",
      "fecha": "2025-05-06"
    }
  ]
}

---

✅ Buenas prácticas implementadas

- Props correctamente usados.
- Uso de `useState` para gestionar formularios.
- Eventos `onChange`, `onSubmit`, `onClick`.
- Métodos de arreglos como `map`, `filter`, `find`.
- Separación clara de responsabilidades.
- Diseño responsivo y accesible.

---

📌 Autor

Desarrollado por: Brayan Estiven Grajales Valencia 
Proyecto de práctica en React – 2025