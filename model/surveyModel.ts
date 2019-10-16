export{}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Surveyschema
const surveyModel = mongoose.model('survey', new Schema({
  questionKey: {

    type: String,
    required: true

  },
  title: {

    type: String,
    required: true

  },
  response: {
    type: String,
    required:true
  }
},
  {
    collection: 'survey'
  }));
module.exports = {surveyModel}
