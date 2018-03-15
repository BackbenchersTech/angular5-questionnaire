var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

// Gifts Schema
var giftSchema = new Schema({
	userId: {
		type: ObjectId,
		required: true,
		unique: true
	},
	assignedGift: {
		type: String,
		required: true
	}
});

var Questions = module.exports = mongoose.model('gift', giftSchema);
