import {combineReducers} from 'redux';


const reducers = [
        "products",
        "country"
]

export default combineReducers(
    reducers.reduce((initial,name)=>{
        initial[name] = require(`./${name}`).default
        return initial
    },{})
)