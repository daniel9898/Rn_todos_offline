import { fromJS } from "immutable";

export default initialState = fromJS({ // permite que todo el arbol sea inmutable y poder usar en todas las propiedades las funciones que este provee
    todos : {
        list : [],
        error: null,
        loading : false
    }
})
