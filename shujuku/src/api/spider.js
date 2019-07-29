const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const express = require('express');

const Router = express.Router();

Router.get('/', (req, res) => {
    // 爬取数据
    request('http://shop.jiuxian.com/brand-382/activity-3376.htm?area=6', (err, response, body) => {
        const $ = cheerio.load(body);

        let goodslist = [];

        $('.shopComBox li').each((idx, ele) => {
            let $ele = $(ele);

            let name = $ele.find('.sCom-name').text();
            let price = $ele.find('.sCom-price em').text();
            let imgurl = $ele.find('.sComPic img').attr('src');//prop

            

            // 获取图片名
            let filename = path.basename(imgurl);

            goodslist.push({
                name,
                price,
                imgurl:'uploads/'+filename
            });

            // 把图片下载到本地
            request(imgurl) // 返回一个文件流stream
            .pipe(fs.createWriteStream(`uploads/${filename}`))
        });

        res.send(goodslist)
    })

})


module.exports = Router;
