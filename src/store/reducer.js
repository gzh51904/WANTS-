import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_GOODS_QTY, ADD_TO_JIESUAN } from './cartActions';

// 初始化state
let initState = {
    goodslist: [],
    jiesuanlist: []
}

// Reducer: 纯函数，接收state和action，返回一个新的state
let reducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                goodslist: [action.payload, ...state.goodslist]
            }
        case ADD_TO_JIESUAN:
            return {
                ...state,
                jiesuanlist: [action.payload, ...state.jiesuanlist]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                goodslist: state.goodslist.filter(item => item.id !== action.payload.id)
            }
        case CHANGE_GOODS_QTY:
            let goodslist = state.goodslist.map(item => {
                if (item.id === action.payload.id) {
                    item.qty = action.payload.qty
                }
                return item;
            })
            return {
                ...state,
                goodslist
            }
        default:
            return state;
    }
}

export default reducer;