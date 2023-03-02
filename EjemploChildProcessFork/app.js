import express from "express";
import { fork } from "child_process";

const app = express();

let contador = 0;

app.get('/', (req, res) => {
    res.send(`Has visitado esta pagina ${++contador} veces`);
});

app.get('/calcularperoforkeado', (req, res) => {
    const childProcess = fork('./calculoPesado.js');
    childProcess.send('Ejecutate por favor!');
    childProcess.on('message', valor => {
        res.send(`El valor de la suma pesada es ${valor}`)
    });
});

app.listen(8080, () => console.log('Listening on 8080'));