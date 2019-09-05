const db = require('../db');

const consult = ({ cargo, experiencia, tecnologia }) => {
    return new Promise((resolve, reject) => {
        let q = "select AVG(bruto) AS salario_medio from tabla_sueldos where cargo= ? and experiencia=? and tecnologia=?; select * from tabla_sueldos where cargo = ? and experiencia = ? and tecnologia = ?"
        /*select AVG(bruto) AS salario_medio from tabla_sueldos where cargo = "Front-end" and experiencia = 3 and tecnologia = "Javascript";
          select * from tabla_sueldos where cargo = "Front-end" and experiencia = 3 and tecnologia = "Javascript"*/
        db.get().query(q, [cargo, experiencia, tecnologia, cargo, experiencia, tecnologia], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
}

module.exports = {
    consult: consult
}