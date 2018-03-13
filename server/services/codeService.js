let Code = require('../db/models/giftCodes');

module.exports.saveCode = function(req, res) {
    let codes = new Code();

    codes.userId = req.body.uid;
    codes.giftCode = req.body.giftCode;

    codes.save(function(err) {
        if(err) {
            if(err.name === 'BulkWriteError' && err.code === 11000)
            {
                return res.status(409).send({"msg": "Existing"})
            }
            else {
                console.log(err.message);
                return res.status(500).send({"msg": "Internal Server Error"})
            }
        } else {
            res.status(200).send({"msg":"Code Saved!"});
        }
    });
}
