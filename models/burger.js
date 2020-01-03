var orm = require("../config/orm.js")

var burger = {

    SelectAll: function (cb) {
        orm.SelectAll("burgers", function (res) {
            cb(res)
        })
    },

    InsertOne: function (cols, vals, cb) {
        orm.InsertOne("burgers", cols, vals, function (res) {
            cb(res)
        })
    },

    UpdateOne: function (objColVals, condition, cb) {
        orm.UpdateOne("burgers", objColVals, condition, function (res) {
            cb(res)
        })
    }

}



module.exports = burger