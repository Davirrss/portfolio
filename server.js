const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = 3000; // Porta em que o servidor irá escutar

app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
});