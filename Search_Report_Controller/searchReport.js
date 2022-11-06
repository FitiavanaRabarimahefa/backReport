const faitModel = require("../models/reportActivityModel");
const mensualReportModel = require("../models/mensualReportModel");
const crgpModel = require("../models/crgpModel");
const formationModel = require("../models/formationModel");

const searchReport = async (req, res) => {
    const { region, mois,indice, reportName } = req.body;
    
    switch (reportName) {
        case "Rapport d'activité mensuel":
            try {
                const result = await faitModel.find({ "nom_rapport": reportName, "region": region, "mois": mois, "indice": indice });
                if (result.length!=0) return res.json({ 'result': result });
                else return res.json({ 'error': 'resultat de recherchre introuvables' });
            } catch (error) {
                return res.json({'error':error.message})
             }
            break;
        
        
        case "Réalisations du Bureau des Affaires Administratives et Financières":
            try {
                const result = await mensualReportModel.find({ "nom_rapport": reportName, "region": region, "mois": mois, "indice": indice });
                if (result.length!=0) return res.json({ 'result': result });
                else return res.json({ 'error': 'resultat de recherchre introuvables' });
            } catch (error) {
                return res.json({'error':error.message})
             }
            break;
        
        
        case "Réalisations de la Division Patrimoine de l’Etat":
            try {
                const result = await mensualReportModel.find({ "nom_rapport": reportName, "region": region, "mois": mois, "indice": indice });
                if (result.length!=0) return res.json({ 'result': result });
                else return res.json({ 'error': 'resultat de recherchre introuvables' });
            } catch (error) {
                return res.json({ 'error': error.message });
             }
            break;
        
        
        case "Réalisations de la Division Exécution Budgétaire et Remboursement des Frais Médicaux":

            try {
                const result = await mensualReportModel.find({ "nom_rapport": reportName, "region": region, "mois": mois, "indice": indice });
                if (result.length!=0) return res.json({ 'result': result });
                else return res.json({ 'error': 'resultat de recherchre introuvables' });
            } catch (error) {
                return res.json({ 'error': error.message });
             }
            break;
        
        
        case "Réalisations du Centre Informatique Régional":

            try {
                const result = await mensualReportModel.find({ "nom_rapport": reportName, "region": region, "mois": mois, "indice": indice });
                if (result.length!=0) return res.json({ 'result': result });
                else return res.json({ 'error': 'resultat de recherchre introuvables' });
            } catch (error) {
                return res.json({ 'error': error.message });
             }
            break;
        
        
        case "Réalisations de la Division Chargée des Finances Locales et Tutelle des EPN":

            try {
                const result = await mensualReportModel.find({ "nom_rapport": reportName, "region": region, "mois": mois, "indice": indice });
                if (result.length!=0) return res.json({ 'result': result });
                else return res.json({ 'error': 'resultat de recherchre introuvables' });
            } catch (error) {
                return res.json({ 'error': error.message });
             }
            break;
        
        case "CRGP":

            try {
                const result = await crgpModel.find({ "nom_rapport": reportName, "region": region, "mois": mois,"indice":indice });
                if (result.length!=0) return res.json({ 'result': result });
                else return res.json({ 'error': 'resultat de recherchre introuvables' });
            } catch (error) {
                return res.json({ 'error': error.message });
             }
           
            break;
        
        case "formation":

            try {
                const result = await formationModel.find({ "nom_rapport": reportName, "region": region,"indice":indice });
                if (result.length!=0) return res.json({ 'result': result });
                else return res.json({ 'error': 'resultat de recherchre introuvables' });
            } catch (error) {
                return res.json({ 'error': error.message });
             }
            break;
    }
    
}
module.exports={searchReport}