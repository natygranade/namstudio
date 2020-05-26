var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const session= require('express-session')

app.use(function(req,res,next){
  let parts = req.url.split('/')

if (parts[1].startsWith('data')){
  return res.sendfile(path.resolve('data',parts[2],parts[3]))
}
next()
})

// Requerir las rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let  productsRouter = require('./routes/products')


// Servidor
app.listen(3000, 'localhost')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: "nuestro msj secreto"}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/collection', productsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
