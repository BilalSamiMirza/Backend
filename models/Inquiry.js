// const mongoose = require("mongoose");

// const inquirySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },

//   email: {
//     type: String,
//     required: true
//   },

//   service: {
//     type: String,
//     required: true
//   },

//   subject: {
//     type: String,
//     required: true
//   },

//   message: {
//     type: String,
//     required: true
//   },

//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model("Inquiry", inquirySchema);













// const mongoose = require("mongoose");

// const inquirySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   service: { type: String, required: true },       // matches frontend
//   description: { type: String, required: true }    // matches frontend
// }, { timestamps: true });

// module.exports = mongoose.model("Inquiry", inquirySchema);

const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Inquiry", InquirySchema);