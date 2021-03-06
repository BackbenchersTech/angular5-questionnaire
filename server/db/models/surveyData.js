var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

// Survey Data Schema
var surveyDataSchema = new Schema({
	userId: {
		type: ObjectId,
		required: true,
		unique: true
	},
	surveyData: {
		type: Object,
		required: true
	}
});

var Questions = module.exports = mongoose.model('surveyData', surveyDataSchema);
