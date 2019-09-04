let express = require('express');
let router = express.Router();

const modelColabora = require('../models/colabora');


// http://localhost:3000/colabora/nuevo

router.post('/nuevo', (req, res) => {
    console.log(req.body);
    modelColabora.insert(req.body)
        .then((result) => {
            console.log(result);
            res.json(result);

        })
        .catch((err) => {
            res.json({ error: err });
        })
})

module.exports = router;
