const router = require("express").Router();
const db = require("../../models");

//  /api/budget/user/add
/*
{
    "id":1,
    "savings":{
        "goal":100,
        "saved":10,
        "description": "mysavings"
    }
}
*/

router.route("/user/add").post(function(req, resp){
  db.UserMoney.create({
    userId:req.body.id,
    inc_exp: [],
    savings:req.body.savings
  }).then (dbModel => resp.json(dbModel))

})

// /api/budget/:id
router.route("/:id").get (function(req, resp){
  db.UserMoney
  .findOne({userId:req.params.id})
  .then(dbModel => resp.json(dbModel))
})

// /api/budget/:id/incexp
/*
{
    "amount":20,
    "description": "payday3"
}
*/
router.route("/:id/incexp").post(function(req, resp){
  db.UserMoney
  .findOneAndUpdate({userId:req.params.id},{$push: {inc_exp:req.body}},{returnNewDocument:true})
  .then(dbModel=>resp.json(dbModel))

})

module.exports = router;
