const express = require("express");

const router = express.Router();

router.get('/accounts',(req,res)=>{
    res.json('Hello')
})

module.exports = router;