let SurveyData = require('../db/models/surveyData');

module.exports.saveData = function(req, res) {
    let surveyData = new SurveyData();
    
    surveyData.userId = req.body.uid;
    surveyData.surveyData = req.body.survey;
    
    surveyData.save(function(err) {
        if(err) {
            if(err.name === 'BulkWriteError' && err.code === 11000)
            {
                return res.status(409).send({"msg": "Existing"})
            }
            else {
                console.log(err.message);
                return res.status(500).send({"msg": "Internal Server Error"})
            }
        }
        else {
            return res.status(200).send({"msg": "Success"});
        }
    });
}

module.exports.getData = function(req, res) {
    SurveyData.find(function(err, surveys) {
        if(err) {
            console.log(err);
            res.status(500).send({"msg": "Internal Server Error"});
        }
        res.status(200).send({"surveys": surveys})
    });
}
