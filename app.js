var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

// 사용할 파일들 지정
let loadingRouter = require('./routes/loading.js')
let userizing3Router = require('./routes/userizing3.js')
let loginRouter = require('./routes/login.js')
let postRouter = require('./routes/post.js')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))

//Jade 삭제하고 ejs 랜더링을 위해 추가된 코드
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//지정파일들 접근경로 설정
app.use('/', loadingRouter)
app.use('/u3', userizing3Router)
app.use('/l', loginRouter)

app.use('/p', postRouter)

// error handler

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
