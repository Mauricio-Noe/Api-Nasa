/*const cors = require('cors');

app.use(cors({
origin:'https://api-nasa-pied.vercel.app/',
methods:[' GET','POST', 'PUT', 'DELETE' ] ,
allowedHeaders:['Content-type', 'Authorization'],
}));

*/

const express = require('express');
const cors = require('cors');

const app = express();

const allowedOrigins = ['http://localhost:3000', 'https://api-nasa-pied.vercel.app/'];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Origen no permitido por CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rutas de tu servidor
app.get('/api', (req, res) => {
    res.json({ message: 'API funcionando correctamente con CORS' });
});

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
