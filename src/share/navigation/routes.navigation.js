import Dashboard from "../dashboard";
import TodosContainer from "../../features/todos/containers/todos.container";
import FormTodo from "../../features/todos/components/formTodo.cmp";

export default Routes = {
	Dashboard: { screen: Dashboard },
	Todos: { screen: TodosContainer },
	Edit: { screen: FormTodo }, 
};