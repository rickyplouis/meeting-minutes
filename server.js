const express = require('express');
const session = require('express-session');
const next = require('next');
const mongoose = require('mongoose');
const passport = require('passport');
const port = parseInt(process.env.PORT, 10) || 3000
const flash = require('connect-flash');
const configDB = require('./config/database');
const bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'
const winston = require('winston');
const expressWinston = require('express-winston');
const app = next({ dev })
const handle = app.getRequestHandler()
require('./config/passport')(passport);

const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const roomRouter = require('./routes/roomRouter');

app.prepare()
.then(() => {
  const server = express();
  //Required for passport
  server.use(session({ secret: 'someSecretkey'}));
  server.use(passport.initialize());
  server.use(passport.session()); //persistent login sessions
  server.use(flash()); //use connect-flash for flash messages stored in session
  server.use( bodyParser.json() );
  server.use(bodyParser.urlencoded({ extended: false }));

  server.use(expressWinston.logger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true
      })
    ]
  }));

  server.use('/', authRouter);
  server.use('/api/user', userRouter);
  server.use('/api/room', roomRouter);

  const mongoURL = configDB.url;

  mongoose.connect(mongoURL);

  server.get('/a', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
