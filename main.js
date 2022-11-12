
const express = require('express'); 
const { engine } = require('express-handlebars');
const bodyparser = require('body-parser'); 
const path = require('path'); 
const session = require('express-session'); 
const flash = require('connect-flash');

const ex = express();

global.router = express.Router();

/* ---- */

ex.use(session({ secret: 'anjKHthloujFEVmecmO', resave: true, saveUninitialized: true }));
ex.use(flash());

ex.engine('handlebars', engine()); ex.set('view engine', 'handlebars');

ex.use(bodyparser.urlencoded({ extended: false }));
ex.use(bodyparser.json());

ex.use(express.static(path.join(__dirname, 'assets')));

/* ---- */

ex.use('/', require('./routes/main.js')); ex.use('/', require('./routes/game/game.js'));

/* ---- */

ex.listen(3012, console.log('\n * Server running...'));