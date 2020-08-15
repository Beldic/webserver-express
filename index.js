
// INICIALIZACIÓN

const express = require('express');
const app2 = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;







// ESCUCHANDO PUERTO

app2.listen(port, () => {

    console.log(`Servidor escuchando en puerto: ${port}`);

    

    


});

//MIDLEWARES

app2.use( express.static(__dirname+'/public'));

// Express HBS engine

hbs.registerPartials(__dirname+'/views/parciales');


app2.set('view engine','hbs');

// helpers

hbs.registerHelper('getAnio',() =>{

    return new Date().getFullYear();


});









app2.get('/', (req, res) => {

res.render('home.hbs', {
nombre:'Jordi',
//anio : new Date().getFullYear()





})});

app2.get('/info.hbs', (req,res) =>{

res.render('info.hbs',


)});
