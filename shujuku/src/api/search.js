const express = require('express');

const Router = express.Router();
const {
    formatData
} = require('../utils');
const {
    mysql: query
} = require('../db');

Router.route('/')
    // 获取所有商品
    .get((req, res) => {
        console.log(req.query)
        let {input1}=req.query;;
       
        let sql=`select * from kecheng where lesson like '%${input1}%'`
        console.log(sql)
        query(sql).then(function (data) {
            res.send(formatData({
                data
            }))
        }, (err) => {
            res.send(formatData({
                data: err,
                code: 250
            }))
        })

    });
module.exports = Router;
