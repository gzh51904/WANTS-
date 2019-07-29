const express = require('express');

const Router = express.Router();
const {
    formatData
} = require('../utils');
const {
    mysql: query
} = require('../db');


Router.route('/')
    .get((req, res) => {
        let {
            username,
            password
        } = req.query;
      
        query(`select * from admin where admin='${username}' and password='${password}'`).then(function (data) {
            // data: promise对象改成resolve状态时传回的参数
            res.send(formatData({
                data
            }))
        }, (err) => {
            res.send(formatData({
                data: err,
                code: 250
            }))
        })

    })
module.exports = Router;