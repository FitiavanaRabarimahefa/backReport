var express = require("express");
var UserRegister = require("./RegisterController/register");
var UserLogin = require('./LoginController/login');

 exports.router=(function(){
    var apiRouter = express.Router();

     apiRouter.route('/users/register').post(UserRegister.registration);
     apiRouter.route('/users/login').post(UserLogin.login)

    return apiRouter;
 })();
