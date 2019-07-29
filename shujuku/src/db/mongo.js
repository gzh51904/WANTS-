// 引入mongodb模块
const mongodb = require("mongodb");
const {
    MongoClient,
    ObjectId
} = mongodb;

// 引入配置文件
let {
    mongourl,
    dbname
} = require("../config.json");

const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongourl, {
                useNewUrlParser: true
            },
            (err, client) => {
                if (err) {
                    return reject(err);
                }

                let db = client.db(dbname);
                resolve({
                    db,
                    client
                })
            })
    })
}

// 增加数据
exports.insert = (colName, data) => {
    return new Promise(async (resolve, reject) => {
        // await: 等待promise对象的返回结果
        // await必须放在async函数中
        let {
            db,
            client
        } = await connect();

        // 获取集合
        let col = db.collection(colName);

        // 把数据写入集合
        let res = col.insertOne(data);

        resolve(res);

        client.close();
    })
}

// 删除数据
exports.del = (colName, query) => {
    return new Promise(async (resolve, reject) => {

        let {
            db,
            client
        } = await connect();

        // 获取集合
        let col = db.collection(colName);

        // 把数据写入集合中
        let res = col.deleteMany(query);

        resolve(res);

        client.close();
    })
}

// 修改数据
exports.update = (colName, query, data) => {
    return new Promise(async (resolve, reject) => {

        let {
            db,
            client
        } = await connect();

        // 获取集合
        let col = db.collection(colName);

        // 把数据写入集合
        let res = col.updateOne(query, {
            $set: data
        })

        resolve(res);

        client.close();
    })
}

// 查询数据
exports.find = (colName, query, {
    limit,
    skip,
    sort
} = {}) => {
    return new Promise(async (resolve, reject) => {

        let {
            db,
            client
        } = await connect();

        // 获取集合
        let col = db.collection(colName);

        // 把数据写入集合
        let res = col.find(query);

        // 跳过数量
        if (skip) {
            res = res.skip(skip);
        }

        // 限制数量
        if (limit) {
            res = res.limit(limit);
        }

        if (sort) {
            res = res.sort(sort);
        }

        res = await res.toArray();

        resolve(res);

        client.close();
    })
}