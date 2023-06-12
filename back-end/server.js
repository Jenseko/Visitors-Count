import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
mongoose.connect(process.env.DB);

app.get('/visit', (req, res) => {

})

app.get('/visited', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server runs ${PORT} Miles a Day`);
})