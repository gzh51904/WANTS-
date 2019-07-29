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
            phone
        } = req.query;
        console.log(phone);
        query(`select * from username where phone="${phone}"`).then(function (data) {
            // data: promise对象改成resolve状态时传回的参数

            if (data.length > 0) {
                res.send(formatData({
                    data,
                    code: 1000
                }))
            } else if (data.length == 0) {
                res.send(formatData({
                    code: 250
                }))
            }
            console.log("jianche:", data);
        })

    })
    .post((req, res) => {
        let id = Date.now();
        console.log(req.body)
        let phone = '',
            values = '';
        for (let key in req.body) {
            phone += key + ',';
            values += '"' + req.body[key] + '",'
        }
        console.log(phone, values)
        // 去除多余逗号
        phone = phone.slice(0, -1)
        values = values.slice(0, -1)

        let sql = `insert into username(${phone}) values(${values})`;
        console.log(sql)
        query(sql).then(data => {
            res.send(formatData({
                data
            }))
            console.log("qq:", data);

        })
    });

module.exports = Router;