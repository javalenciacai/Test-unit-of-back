const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Verificar si el usuario existe y las credenciales son válidas
  if (username === 'usuario' && password === 'contrasena') {
    // Generar un token JWT
    const token = jwt.sign({ username }, 'secreto');
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});


app.listen(port, () => {
  console.log(`API de autenticación en ejecución en http://localhost:${port}`);
});
