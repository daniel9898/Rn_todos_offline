import { getConnection } from '../db';

export default todosConnection = {
	save(todo){
		const db = getConnection();
	    let query = "INSERT INTO todos (name, status) values (?, ?)";
	    let params = [todo.name, todo.status];
	   
	    return new Promise((resolve, reject) => {    	
	    	db.transaction((tx) => {
			    tx.executeSql(query, params, (tx, results) => {
			     	resolve(results);
			    });
			},
			error => reject(error));
        })
	},

	update(todo){
	    const db = getConnection();
	    let query = "UPDATE todos SET name=(?),status=(?) WHERE id=(?)";
	    let params = [todo.name, todo.status, todo.id];
	   
	    return new Promise((resolve, reject) => {    	
	    	db.transaction((tx) => {
			    tx.executeSql(query, params, (tx, results) => {
			     	resolve(results);
			    });
			},
			error => reject(error));
        })

	},

	getAll(){
	    const db = getConnection();
	    let query = "SELECT * FROM todos";
	
	    return new Promise((resolve, reject) => {
	    	db.transaction((tx) => {
			    tx.executeSql(query, [], (tx, results) => {
		            let rows = [];
			      	var len = results.rows.length;
			      	for (let i = 0; i < len; i++) {
				        let row = results.rows.item(i);
				        rows.push(row);
			     	}
			     	resolve(rows);
			    });
			},
			error => reject(error));
        })
	},

	getById(id){
	    const db = getConnection();
	    let query = "SELECT * FROM todos WHERE id= (?)";
	    let params = [id];
	
	    return new Promise((resolve, reject) => {
	    	db.transaction((tx) => {
			    tx.executeSql(query, params, (tx, results) => {
		            let rows = [];
			      	var len = results.rows.length;
			    
			      	for (let i = 0; i < len; i++) {
				        let row = results.rows.item(i);
				        rows.push(row);
			     	}
			     	resolve(rows);
			    }, 
			    error => reject(error));
			});
        })
	},

	delete(id){
		const db = getConnection();
	    let query = "DELETE FROM todos WHERE id= (?)";
	    let params = [id];
	   
	    return new Promise((resolve, reject) => {    	
	    	db.transaction((tx) => {
			    tx.executeSql(query, params, (tx, results) => {
			     	resolve(results);
			    });
			},
			error => reject(error));
        })

	},

	deleteAll(){
		let query = "DELETE FROM todos";
        executeSql(query);
	}

}


    
