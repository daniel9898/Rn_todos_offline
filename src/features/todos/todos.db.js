import { executeSql } from '../db';

export default todoDb = {
	save(todo){
	    let query = "INSERT INTO todos (name, status) values (?, ?)";
	    executeSql(query, [todo.name, todo.status]);
	    //this.get();
	},

	update(){

	},

	get(){
		let query = "SELECT * FROM todos";
		executeSql(query);
	},


	getAll(){

	},

	delete(){

	},

	deleteAll(){
		let query = "DELETE FROM todos";
        executeSql(query);
	}

}


    
