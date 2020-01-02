var orm = require("../config/orm")

var burger = {

    SelectAll: function (cb) {
        orm.SelectAll("burgers", function (res) {
            cb(res)
        })
    },

    InsertOne: function (cb) {
        orm.InsertOne("burgers", cols, vals, function (res) {
            cb(res)
        })
    },

    UpdateOne: function (cb) {
        orm.UpdateOne(objColVals, condition, function (res) {
            cb(res)
        })
    }

}



module.exports = burger