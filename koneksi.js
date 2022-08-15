var mysql = require ('mysql')

const connn = mysql.createConnection({
    host : 'localhost',
    user : 'aldi',
    password : 'aldi',
    database : 'rest_db'
})

conn.connect((e)=>{
    if(e) throw e;
    console.log (`terkonekis dengan database ${database}`);
})

module.exports = conn;