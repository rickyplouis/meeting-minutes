const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const bodyParser = require('body-parser')
const winston = require('winston');
const expressWinston = require('express-winston');

const userRouter = require('./routes/userRouter');
const roomRouter = require('./routes/roomRouter');
const roomHandler = require('./routes/roomHandler');
const configDB = require('./config/database');

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 3000
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();
const mongoURL = configDB.url;

app.use(flash()); //use connect-flash for flash messages stored in session
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));

mongoose.connect(mongoURL);

const messages = [];

io.on('connection', socket => {

});

nextApp.prepare().then(() => {

  app.use('/api/user', userRouter);
  app.use('/api/room', roomRouter);
  app.use('/room', roomHandler);

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  });

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  });
})
