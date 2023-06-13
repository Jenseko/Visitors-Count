import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

let counter = 0;

app.get('/visit', (req, res) => {
    counter++;
    res.send();
})

app.get('/visited', (req, res) => {
    res.send(`Site was visited by ${counter} User/s!`)
});

app.listen(PORT, () => {
    console.log(`Server runs ${PORT} Miles a Day`);
})