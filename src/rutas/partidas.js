
const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('Estás en api/partidas')
})



module.exports = router