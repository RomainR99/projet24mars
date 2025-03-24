import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/db/dbConnect.js'

import { requestTimer, date } from './src/middleware/middlewareExo.js'

import routerTest from './src/routes/router.js'
import routerTache from './src/routes/routerTaches.js'
import routerFilms from './src/routes/filmsRoutes.js'


dotenv.config()
connectDB()
const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(requestTimer, date)
app.use(routerTest)
app.use(routerTache)
app.use(routerFilms)



app.get('/*', (req, res) => res.status(404).send("Page Introuvable"))



app.listen(port, () =>
  console.log(`Le serveur est en écoute sur le port ${port}`)
)

let express = require('express');
let util = require('util');
let app = express();

app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    // Obtenir la date actuelle
    let currentDate = new Date();
    // Formater la date et l'heure en français
    let dateFormatted = currentDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    let timeFormatted = currentDate.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Europe/Paris' });
    // Combinaison de la date et de l'heure
    let dateTimeFormatted = 'Nous sommes le ' + dateFormatted + ' et il est : ' + timeFormatted;
    res.end(util.format('%s - %s\n', dateTimeFormatted, 'Bravo votre conteneur Express fonctionne'));
});

app.listen(3333);