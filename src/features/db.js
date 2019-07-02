import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({name : "testDB"});

export const createTables = () => {
	db.transaction((tx) => {
        let query = "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status TEXT)";
        tx.executeSql(query,[],(tx, result)=>{
        	console.log('--> base de datos creada correctamente');
        })
    });
}

export const executeSql = (query, params= []) => {
	db.transaction((tx) => {
	    tx.executeSql(query, params, (tx, results) => {
	      console.log("Query completed");

	      var len = results.rows.length;
	      for (let i = 0; i < len; i++) {
	        let row = results.rows.item(i);
	        console.log(`${row.name} ---- ${row.id} --- ${row.status}`);
	      }

	    });
	})

}