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
            phone,
        } = req.query;
        console.log(phone)
        query(`select * from user where phone="${phone}"`).then(function (data) {
            // data: promise对象改成resolve状态时传回的参数
            if (data.length > 0) {
                return res.send(formatData({
                    code: 250
                }))
            }
            res.send(formatData())
        }, (err) => {
            res.send(formatData({
                data: err,
                code: 250
            }))
        })

    })

Router.route('/')
    .post((req, res) => {
        let id = Date.now();
        console.log(req.body)
        let names = '',
            values = '';
        for (let key in req.body) {
            names += key + ',';
            values += '"' + req.body[key] + '",'
        }
        console.log(names, values)
        // 去除多余逗号
        names = names.slice(0, -1)
        values = values.slice(0, -1)

        let sql = `insert into user(${names}) values(${values})`;
        console.log(sql)
        query(sql).then(data => {
            res.send(formatData({
                data
            }))
        }).catch(err => {
            res.send(formatData({
                data: err,
                code: 250
            }))
        })
    });
module.exports = Router;