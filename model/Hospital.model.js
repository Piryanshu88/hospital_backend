const mongoose = require("mongoose");

const hospitalSchema = mongoose.Schema({
  hospital_name: String,
  address: String,
  total_bed: Number,
  emergency_bed: Number,
  no_of_ambulence: Number,
  mobile: Number,
  zone: String,
});
const HospitalModel = mongoose.model("hospital", hospitalSchema);

module.exports = {
  HospitalModel,
};
