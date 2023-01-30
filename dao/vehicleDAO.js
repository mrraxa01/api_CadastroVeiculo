const connDB = require('../infra/connection');
const {ulid} = require('ulid');

class vehicleDAO{

    constructor(){}

    create(data, callback){
        const {license, manufacturer, model, owner} = data;
        const sql = `INSERT INTO vehicles (id, license, manufacturer, model, owner)
            VALUES('${ulid()}','${license}','${manufacturer}','${model}','${owner}')`;
        connDB.run(sql,callback);

    }

    edit(id, data, callback){
        let requestData = Object.entries(data);
        let fieldsToEdit = [];
        for(let i=0; i < requestData.length; i++){
            fieldsToEdit.push(`${requestData[i][0]} = '${requestData[i][1]}'`);
        }
            const sql = `UPDATE vehicles SET ${fieldsToEdit.join(",")} WHERE id = '${id}'`;

            connDB.run(sql,callback);
    }

    findAll(callback){

        const sql = 'SELECT * FROM vehicles';
        connDB.all(sql,callback);

    }

    findById(id, callback){
        
        const sql = `SELECT * FROM vehicles WHERE id='${id}'`;
        connDB.get(sql, callback);
    }

    findByName(name, callback){
      
        const sql = `SELECT * FROM vehicles WHERE model LIKE '${name}%'`
        
        connDB.all(sql, callback);

    }

    update(id, data, callback){

    }

    delete(id, callback){
        const sql = `DELETE FROM vehicles WHERE id='${id}'`;
        connDB.run(sql, callback);

    }

} 
module.exports = new vehicleDAO();