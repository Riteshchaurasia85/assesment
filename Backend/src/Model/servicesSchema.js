const { Schema, model, mongoose } = require('mongoose');

const subjectStatsSchema = new Schema({
  subjectId: String,
  subjectName: String,
  avgTime: Number,
  totalTime: Number,
  totalCorrect: Number,
  attendedTotal: Number,
  avgTimeUnique: Number,
  totalIncorrect: Number,
  totalQuestions: Number,
  totalTimeUnique: Number,
  totalCorrectUnique: Number,
  totalUniqueAttended: Number,
  totalIncorrectUnique: Number,
  coverage: Number,
  accuracy: Number,
  avgScore: Number,
  mastery: Number
}, { _id: false });

const overallStatsSchema = new Schema({
  grade: Number,
  avgTime: Number,
  totalTime: Number,
  totalCorrect: Number,
  attendedTotal: Number,
  avgTimeUnique: Number,
  totalIncorrect: Number,
  totalTimeUnique: Number,
  totalCorrectUnique: Number,
  totalUniqueAttended: Number,
  totalIncorrectUnique: Number,
  totalUniqueQuestions: Number,
  coverage: Number,
  accuracy: Number,
  avgScore: Number,
  mastery: Number
}, { _id: false });

const serviceSchema = new Schema({

  overall: {
    stats: overallStatsSchema
  },

  subjects: {
    grade: Number,
    stats: [subjectStatsSchema]
  },

  modules: {
    type: Object   
  },

  raw: {
    type: Object   // raw answer / AI response etc.
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Service = mongoose.model(
  "Service",
  serviceSchema,
  "Services"   
);

module.exports = Service;