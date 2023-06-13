import express from 'express';
import fs from 'fs-jetpack';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// readFile
fs.file('./count.txt');

// Erstellen einer base URL, 
let { pathname } = new URL('./count.txt', import.meta.url);
// stelle sicher, dass die Datei existiert, wenn nicht dann erstelle diese
let prevCount = fs.read(pathname); // read() gibt immer einen String zurück

console.log(pathname);
console.log({ prevCount: Number(prevCount) });

// Wandle String in eine Zahl um, wenn kein String bereits besteht, nehme Wert 0
let counter = Number(prevCount) || 0;

// Edge Cases - sichergehen, dass wenn Programm von jemand anders gestartet wird, 
// muss man sichergehen, dass ein individueller Link mit einem absoluten Pfad erstellt wird

app.use(cors());

app.get('/visit', (req, res) => {
    counter++;
    res.send();
    fs.write(pathname, `${counter}`);
})

app.get('/visited', (req, res) => {
    res.send(`Site was visited by ${counter} User/s!`)
});

app.listen(PORT, () => {
    console.log(`Server runs ${PORT} Miles a Day`);
})