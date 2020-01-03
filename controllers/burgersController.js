var express = require("express")

var router = express.Router()

//import burger model to use its database functions
var burger = require("../models/burger.js")

//create all the routes with logic
router.get("/", function (req, res) {
    burger.SelectAll(function (data) {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject)
        res.render("index", hbsObject)
    })
})

router.post("/", function (req, res) {
    burger.InsertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function (result) {
        //Send back the ID
        console.log(result)
        res.json({ id: result.insertId })
    })
})

router.put("/:id", function(req, res){
    var condition = "id = " + req.params.id

    console.log("condition", condition)

    burger.UpdateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0){
                //if zero, ID must not exist
                return res.status(404).end()
            }
            res.status(200).end()
        }

    )
})

// Export routes for server.js to use.
module.exports = router
