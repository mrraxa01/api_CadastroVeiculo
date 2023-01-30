const connDB = require('../infra/connection');
const {ulid} = require('ulid');

class userDAO{
    constructor(){

    }

    create (data, callback){
        const{name, email, password} = data;

        const sql = `INSERT INTO users (id, name, email, password) 
        VALUES ('${ulid()}', '${name}', '${email}', '${password}')`;

        connDB.run(sql, callback);
            
    }

    findAll(callback){
        

      const sql = 'SELECT * FROM users';
      connDB.all(sql, callback);
       
    }

    edit(id, data, callback){
        let requestData = Object.entries(data);
        let fieldsToEdit = [];
        for(let i=0; i < requestData.length; i++){
            fieldsToEdit.push(`${requestData[i][0]} = '${requestData[i][1]}'`);
        }
            const sql = `UPDATE users SET ${fieldsToEdit.join(",")} WHERE id = '${id}'`;

            connDB.run(sql,callback);
    }

    delete(id, callback){
        const sql = `DELETE FROM users WHERE id='${id}'`;
        connDB.run(sql,callback);
    }

    
    
}
module.exports = new userDAO();