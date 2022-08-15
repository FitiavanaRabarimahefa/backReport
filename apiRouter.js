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
var modificationSimpleJson = require('./Modif_Simple_Report_Controller/modificationJson');
var saveReportActivityMongo = require('./Save_Report_Activity_Mongo_Controller/save-Report-Activity-Mongo');
var getAllFaitData = require('./Get_Fait_Marquant_Mongo_Controller/get_fait');
var CRGPReportJson = require('./CRGP_Controller/CRGP');
var CRGPMongo = require('./SaveCRGPMongo_controller/saveCRGP');
var getCRGPMongo = require('./Get_CRGP_Mongo_Controller/getDataCrgp');
var formationToJson = require('./Formation_Controller/formation_report');
var sendMailAdmnin = require('./Send_Mail_Controller/send_Mail');
var deleteCRGPJson = require('./Delete_CRGP_Json_Controller/delete_CRGP');
var saveFormationMongo = require('./Save_Formation_Mongo_Controller/save_Mongo_Formation');
var deleteFormation = require('./delete_formation_controller/delete_formation');

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
    apiRouter.route('/deleteData').post(deleteSimpleJson.deleteSimpleJson);
    apiRouter.route('/editMensualReport').post(modificationSimpleJson.editJson);
    apiRouter.route('/saveMongoReportActivity').post(saveReportActivityMongo.Save_Report_Activity);
    apiRouter.route('/getFait').get(getAllFaitData.getFaitData);
    apiRouter.route('/CRGPReport').post(CRGPReportJson.CRGPReport);
    apiRouter.route('/CRGPMongo').post(CRGPMongo.saveCRGP);
    apiRouter.route('/getCRGPData').get(getCRGPMongo.getCRGPMongo);
    apiRouter.route('/formationJson').post(formationToJson.formationReport);
    apiRouter.route('/sendAdminMail').post(sendMailAdmnin.sendAdminMail);
    apiRouter.route('/deleteCRGP').post(deleteCRGPJson.deleteCRGPJson);
    apiRouter.route('/saveMongoFormation').post(saveFormationMongo.saveFormation);
    apiRouter.route('/deleteFormation').post(deleteFormation.deleteFormation)

    return apiRouter;
 })();
