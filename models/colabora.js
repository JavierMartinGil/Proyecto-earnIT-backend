const db = require('../db');

const insert = ({ cargo, experiencia, tecnologia, sector, bruto }) => {
    return new Promise((resolve, reject) => {
        let q = 'insert into tabla_sueldos (cargo, experiencia, tecnologia, sector, bruto) values (?, ?, ?, ?, ?)';
        db.get().query(q, [cargo, experiencia, tecnologia, sector, bruto], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}

module.exports = {
    insert: insert
}