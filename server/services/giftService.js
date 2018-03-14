let Code = require('../db/models/giftCodes');
let Gift = require('../db/models/gifts');

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

module.exports.getCodes = function(req, res) {
    Code.find(function(err, codes) {
        if(err) {
            console.log(err);
            res.status(500).send({"msg": "Internal Server Error"});
        }
        res.status(200).send({"giftCodes": codes});
    })
}

module.exports.getGifts = function(req, res) {
    Gift.find(function(err, gifts) {
        if(err) {
            console.log(err);
            res.status(500).send({"msg": "Internal Server Error"});
        }
        res.status(200).send({"gifts": gifts})
    })
}

module.exports.assignGift = function(req, res) {
    let gifts = new Gift();

    gifts.userId = req.body.uid;
    gifts.assignedGift = req.body.gift;

    gifts.save(function(err) {
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
            res.status(200).send({"msg":"Gift Assigned!"});
        }
    })
}
