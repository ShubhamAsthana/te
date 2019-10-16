"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const { surveyModel } = require('../model/surveyModel');
/**
 * @swagger
 * /survey:
 *    post:
 *      tags:
 *          - Survey
 *      summary: This should create a new survey object
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              questionKey:
 *                type: string
 *              response:
 *                type: string
 *      responses:
 *        200:
 *          description: survey added sucessfully
 *        400:
 *          description: unable to save the  into database
 */
router.post('/', function (req, res) {
    surveyModel.insertMany(req.body).
        then((result) => {
        res.status(200).json({ 'Survey': 'Added successfully' });
    })
        .catch((err) => {
        res.status(400).send("unable to save the  into database");
    });
});
/**
 * @swagger
 * /survey:
 *    get:
 *      tags:
 *        - Survey-response
 *      description: Should return all survey resposes.
 *      responses:
 *       200:
 *         description: survey result
 */
router.get('/', (req, res) => {
    surveyModel.find((err, data) => {
        if (!err)
            res.send(data);
        else
            res.send('Data not found');
    });
});
router.get('/page', (req, res) => {
    var pageNo = parseInt(req.query.pageNo);
    var size = parseInt(req.query.size);
    var query = {};
    if (pageNo < 0 || pageNo === 0) {
        res = { "error": true, "message": "invalid page number, should start with 1" };
        return res.json(res);
    }
    // Find some documents
    surveyModel.countDocuments({}, function (err, totalCount) {
        if (err) {
            res = { "error": true, "message": "Error fetching data" };
        }
        surveyModel.find({}, {}, query, function (err, data) {
            // Mongo command to fetch all data from collection.
            if (err) {
                res = { "error": true, "message": "Error fetching data" };
            }
            else {
                var totalPages = Math.ceil(totalCount / size);
                res = { "error": false, "message": data, "pages": totalPages };
            }
            res.json(res);
        });
    });
});
module.exports = router;
