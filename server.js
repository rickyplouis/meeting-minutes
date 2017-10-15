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
const configDB = require('./config/database');

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 3000
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
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
  socket.on('message', (data) => {
    messages.push(data)
    socket.broadcast.emit('message', data)
  })
})

nextApp.prepare().then(() => {

  app.use('/api/user', userRouter);
  app.use('/api/room', roomRouter);

  app.get('/a', (req, res) => {
    return app.render(req, res, '/b', req.query)
  });

  app.get('/b', (req, res) => {
    return app.render(req, res, '/a', req.query)
  });

  app.get('*', (req, res) => {
    return handle(req, res)
  });

  app.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  });
})
