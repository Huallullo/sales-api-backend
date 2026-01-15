const { poolPromise } = require('../config/database');

// Obtener todos los clientes
const getClients = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Clients');
    res.json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo clientes' });
  }
};

// Crear cliente
const createClient = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: 'El nombre y el email son obligatorios'
      });
    }

    const pool = await poolPromise;

    await pool
      .request()
      .input('name', name)
      .input('email', email)
      .query(`
        INSERT INTO Clients (Name, Email)
        VALUES (@name, @email)
      `);

    res.status(201).json({
      message: 'Cliente creado correctamente'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear cliente' });
  }
};

// Actualizar cliente
const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: 'El nombre y el email son obligatorios'
      });
    }

    const pool = await poolPromise;

    const result = await pool
      .request()
      .input('id', id)
      .input('name', name)
      .input('email', email)
      .query(`
        UPDATE Clients
        SET Name = @name, Email = @email
        WHERE ClientId = @id
      `);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    res.json({ message: 'Cliente actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar cliente' });
  }
};

// Eliminar cliente
const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await poolPromise;

    const result = await pool
      .request()
      .input('id', id)
      .query(`
        DELETE FROM Clients
        WHERE ClientId = @id
      `);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    res.json({ message: 'Cliente eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar cliente' });
  }
};

module.exports = {
  getClients,
  createClient,
  updateClient,
  deleteClient
};
