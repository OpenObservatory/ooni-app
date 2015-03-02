'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.Types.ObjectId,
	errorHandler = require('./errors.server.controller'),
	Report = mongoose.model('Report'),
	Measurement = mongoose.model('Measurement'),
	_ = require('lodash');


exports.reportByID = function(req, res, next, id) {
  var query,
    limit = 20,
    skip = 0,
    sort = '_id';

  req.checkQuery('limit', 'Invalid limit value').optional().isInt();
  req.checkQuery('skip', 'Invalid skip value').optional().isInt();

	Report.findById(id).exec(function(err, report_header) {
    var report = {};
		if (err) return next(err);
		if (!report_header) return next(new Error('Failed to load Report ' + id));
    report.header = report_header;
    // query = Measurement.find({'report_id': report_header._id});
    // if (req.query.limit) {
    //   limit = parseInt(req.query.limit);
    // }
    // if (req.query.skip) {
    //   skip = parseInt(req.query.skip);
    // }
    // if (sort) {
    //   query.sort(sort);
    // }
    // if (limit !== 0) {
    //   query = query.limit(limit);
    // }
    // if (skip) {
    //   query = query.skip(skip);
    // }

    req.report = report;
    next();

    // query.exec(function(err, measurements) {
		// if (err) return next(err);
    //   if (!measurements) measurements = [];
    //   report.measurements = measurements;
    // });
	});
};

/**
 * Show the current Report
 */
exports.read = function(req, res) {
	res.jsonp(req.report);
};

/**
 * List of Reports
 */
exports.find = function(req, res) { 
  var query,
    select,
    limit = 20,
    skip = 0,
    sort = 'start_time';

  req.checkQuery('find', 'Invalid find query').optional().isJSON();
  req.checkQuery('select', 'Invalid select query').optional().isJSON();
  req.checkQuery('limit', 'Invalid limit value').optional().isInt();
  req.checkQuery('skip', 'Invalid skip value').optional().isInt();
  req.checkQuery('sort', 'Invalid sort field').optional().isIn(['start_time', 'probe_cc']);

  if (req.query.find) {
    var find_parameters = JSON.parse(req.query.find);
    query =  Report.find(find_parameters);
  } else {
    query = Report.find();
  }

  if (req.query.select) {
    select = JSON.parse(req.query.select); 
  }
  if (req.query.limit) {
    limit = parseInt(req.query.limit);
  }
  if (req.query.skip) {
    skip = parseInt(req.query.skip);
  }
  if (req.query.sort) {
    sort = req.query.sort; 
  }

  if (sort) {
    query.sort(sort);
  }
  if (limit !== 0) {
    query = query.limit(limit);
  }
  if (skip) {
    query = query.skip(skip);
  }
  if (select) {
    query.select(select);
  }

	query.exec(function(err, reports) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(reports);
		}
	});
};

/**
 * Report authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.report.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
