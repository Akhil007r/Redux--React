const redux = require('redux');
const reduxLogger = require('redux-logger')

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE'
const BUY_iceCream = "BUY_ICECREAM"

function buyCake(){
    return{
        type:BUY_CAKE,
        info:'Buy First Cake'
    }
}

function buyIcecream(){
    return{
        type:BUY_iceCream,
        info:"Bought Icecream"
    }
}
const initialIceCreamState={
    numofIceCream:20,
}
const initialCakeState ={
    numOfCake:10,
}

const cakeReducer =(state=initialCakeState , action)=>{
switch(action.type){
    case BUY_CAKE: 
           return{
            ...state,
            numOfCake:state.numOfCake - 1
        }
        default: return state
}
}

const iceCreamReduder =(state=initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_iceCream:return{
            ...state,
            numofIceCream:state.numofIceCream - 1
        }

        default :return state
        }
}
const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReduder
})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log("initial State", store.getState())
const unSubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
unSubscribe();