var express = require("express");
var UserRegister = require("./RegisterController/register");
var UserLogin = require('./LoginController/login');
var MensualReport=require('./Mensual_Report_BAAF_Controller/BAAF');
var SearchData= require ('./SearchController/search');
var GetJsonData=require('./GetjsonController/getJson');
var editJsonData=require('./ModificationJsonController/modif');
var deleteJsonData=require('./ModificationJsonController/modif');
var Save_Report_To_Mongo=require('./Save_Report_Mongo_Controller/Save_Report');

 exports.router=(function(){
    var apiRouter = express.Router();

     apiRouter.route('/users/register').post(UserRegister.registration);
     apiRouter.route('/users/login').post(UserLogin.login);
     apiRouter.route('/mensualReport').post(MensualReport.mensualReport);
     apiRouter.route('/search').post(SearchData.search);
     apiRouter.route('/getJson').get(GetJsonData.getJson);
     apiRouter.route('/editJson').post(editJsonData.editJson);
     apiRouter.route('/deleteJson').post(deleteJsonData.deleteJson);
     apiRouter.route('/saveReport').post(Save_Report_To_Mongo.Save_Report);

    return apiRouter;
 })();
