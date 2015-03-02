'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
  ObjectId = mongoose.Schema.Types.ObjectId;
  

/**
 * Report Schema
 */
var ReportSchema = new Schema({
  backend_version: {type: String},
  input_hashes: {type: String},
  //options: {type: String},
  probe_asn: {type: String},
  probe_cc: {type: String},
  probe_city: {type: String},
  probe_ip: {type: String},
  report_file: {type: String},
  software_name: {type: String},
  software_version: {type: String},
  start_time: {type: Number},
  test_name: {type: String},
  test_version: {type: String},
  measurements: {type: Array}
  //measurements: [{type: ObjectId, ref: 'Measurement'}]
});

var MeasurementSchema = new Schema({
  input: {type: String},
  report_id: {type: ObjectId},
});

mongoose.model('Report', ReportSchema);
mongoose.model('Measurement', MeasurementSchema);
