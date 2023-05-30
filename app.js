var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//firebase 연결
const admin = require("firebase-admin");
const { initializeApp } = require("firebase-admin/app");
const serviceAccount = require("./routes/security/config.json").firebase_admin;
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://webservice-97784.appspot.com",
});

//firebase storage

<<<<<<< HEAD
=======

>>>>>>> fe6911418f2112a00bd5a0c79f905ed2f8b3829b
// 사용할 파일들 지정
let loadingRouter = require('./routes/loading.js')
let tutorialRouter = require('./routes/tutorial.js')
let userizing3Router = require('./routes/userizing3.js')
let userizing4Router = require('./routes/userizing4.js')
let loginRouter = require('./routes/login')
let welcomeRouter = require('./routes/welcome')
// let postRouter = require('./routes/post.js')
let onbording1Router = require('./routes/onboarding1.js')
let messageRouter = require('./routes/message.js')
let message1Router = require('./routes/message1.js')
let message2Router = require('./routes/message2.js')
let customizeRouter = require('./routes/customize.js')


//기타 기능
<<<<<<< HEAD
let archive1Router = require("./routes/archive1.js");

=======
// let archive1Router = require('./routes/archive1.js')
>>>>>>> fe6911418f2112a00bd5a0c79f905ed2f8b3829b

var app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"));

//Jade 삭제하고 ejs 랜더링을 위해 추가된 코드
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//지정파일들 접근경로 설정
app.use("/", loadingRouter);
app.use("/t", tutorialRouter);
app.use("/u3", userizing3Router);
app.use("/u4", userizing4Router);
app.use("/test", testRouter);

app.use("/login", loginRouter);
app.use("/welcome", welcomeRouter);
app.use("/p", postRouter);

app.use("/onboarding1", onbording1Router);

// 기타 기능 연습
app.use("/ar1", archive1Router);
app.use("/message", messageRouter);
app.use("/message1", message1Router);
app.use("/message2", message2Router);

app.use('/customize', customizeRouter)

// error handler

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
