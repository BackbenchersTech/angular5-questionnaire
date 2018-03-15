var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

// Gift Codes Schema
var giftCodeSchema = new Schema({
	userId: {
		type: ObjectId,
		required: true,
		unique: true
	},
	giftCode: {
		type: String,
		required: true
	}
});

var Questions = module.exports = mongoose.model('giftCode', giftCodeSchema);
