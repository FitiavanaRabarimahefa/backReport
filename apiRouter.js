var express = require("express");
var UserRegister = require("./RegisterController/register");
var UserLogin = require('./LoginController/login');
var MensualReport=require('./Mensual_Report_BAAF_Controller/BAAF');
var SearchData= require ('./SearchController/search');
var GetJsonData=require('./GetjsonController/getJson');
var editJsonData=require('./ModificationJsonController/modif');
var deleteJsonData=require('./ModificationJsonController/modif');
var Save_Report_To_Mongo=require('./Save_Report_Mongo_Controller/Save_Report');
var send_email=require('./Send_Mail_Controller/send_Mail');
var getListRegister = require('./Get_Register_Controller/Get_Register');
var deleteInvitation = require('./Delete_invitation_controller/delete');
var getAllDataMongo = require('./Get_All_Data_Mongo_Controller/Get_All_Data');
var SaveMensualReport = require('./SimpleMensualReport_Controller/simple_mensual_report');
var deleteSimpleJson = require('./Delete_Simple_Report_Controller/deleteJson');
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
     apiRouter.route('/sendEmail').post(send_email.sendMail);
     apiRouter.route('/getRegister').get(getListRegister.getRegisterList);
     apiRouter.route('/deleteUser').post(deleteInvitation.deleteUser);
    apiRouter.route('/getAllData').get(getAllDataMongo.GetReportMongo);
    apiRouter.route('/saveMensualReport').post(SaveMensualReport.SaveMensualReport);
    apiRouter.route('/deleteData').post(deleteSimpleJson.deleteSimpleJson)


    return apiRouter;
 })();
