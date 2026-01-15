const express = require('express');
const app = express();

const clientsRoutes = require('./routes/clients.routes');

app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ message: 'API de Ventas activa 🚀' });
});

// Rutas clientes
app.use('/clients', clientsRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});