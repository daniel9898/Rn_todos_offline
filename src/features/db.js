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

export const getConnection = () => {
	return db;
}

