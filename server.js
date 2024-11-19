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

// Dominios permitidos para desarrollo y producción
const allowedOrigins = [
    'http://localhost:3000',           // Para desarrollo local
    'http://192.168.x.x:3000',         // Cambia esto por la IP de tu máquina local
    'https://api-nasa-pied.vercel.app' // Para producción en Vercel
];

// Middleware CORS
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.some(o => origin.startsWith(o))) {
            callback(null, true); // Permite la solicitud
        } else {
            callback(new Error('Origen no permitido por CORS')); // Rechaza la solicitud
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

// Rutas de tu servidor
app.get('/api', (req, res) => {
    res.json({ message: 'API funcionando correctamente con CORS' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000; // Permite usar un puerto dinámico en producción
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
