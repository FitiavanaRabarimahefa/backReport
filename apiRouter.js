var express = require("express");
var UserRegister = require("./RegisterController/register");
var UserLogin = require('./LoginController/login');
var MensualReport=require('./Mensual_Report_BAAF_Controller/BAAF');
var SearchData= require ('./SearchController/search');
var GetJsonData=require('./GetjsonController/getJson');
var editJsonData=require('./ModificationJsonController/modif');

 exports.router=(function(){
    var apiRouter = express.Router();

     apiRouter.route('/users/register').post(UserRegister.registration);
     apiRouter.route('/users/login').post(UserLogin.login);
     apiRouter.route('/mensualReport').post(MensualReport.mensualReport);
     apiRouter.route('/search').post(SearchData.search);
     apiRouter.route('/getJson').get(GetJsonData.getJson);
     apiRouter.route('/editJson').get(editJsonData.editJson);

    return apiRouter;
 })();
