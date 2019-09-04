let express = require('express');
let router = express.Router();

const modelCompara = require('../models/compara');

// http://localhost:3000/compara/salarios

router.post('/salarios', (req, res) => {
    console.log(req.body);
    modelCompara.consult(req.body)
        .then((result) => {
            console.log(result);
            res.json(result);

        })
        .catch((err) => {
            res.json({ error: err });
        })
})


module.exports = router;