const db = require('../db');

const consult = ({ cargo, experiencia, tecnologia }) => {
    return new Promise((resolve, reject) => {
        let q = 'select AVG(bruto) from tabla_sueldos where cargo= ? and experiencia=? and tecnologia=?;';
        db.get().query(q, [cargo, experiencia, tecnologia], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    })
}

module.exports = {
    consult: consult
}