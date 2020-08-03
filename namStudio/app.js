var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const session= require('express-session')
const methodOverride = require('method-override')
let cors = require('cors')

app.use(function(req,res,next){
  let parts = req.url.split('/')

if (parts[1].startsWith('data')){
  return res.sendfile(path.resolve('data',parts[2],parts[3]))
}
next()
})
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
     secure: false,
     maxAge: 8640000
   }
}))
app.use(methodOverride('_method'))

// Requerir las rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let  productsRouter = require('./routes/products')
let dashboardRouter = require('./routes/dashboard')
let cartRouter = require('./routes/cart')
let apiProductsRouter = require('./routes/api/products')
let apiUsersRouter = require('./routes/api/users')
let apiCartRouter = require('./routes/api/cart')
const rememberMeMiddleware = require('./middlewares/rememberMeMiddleware')


// Servidor
app.listen(8000, 'localhost')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(rememberMeMiddleware)

const createCart = require('./middlewares/createCart')
app.use(createCart)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/collection', productsRouter);
app.use('/dashboard', dashboardRouter);
app.use('/cart', cartRouter);
app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRouter);
app.use('/api/cart', apiCartRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('index');
});

module.exports = app;
