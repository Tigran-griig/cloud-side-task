const initialState = {
    products:[],
};

export default (state=initialState,{type,payload}) =>{
    switch (type) {
        case "PRODUCTS:SET_DATA":
            const payloadData = Object.keys(payload).map(key => {
                return {
                    ...payload[key],
                    id: key
                }
            })
            return{
              ...state,
                products: payloadData

            };
        case "PRODUCTS:SET_DATA-ADD":
            return{
                ...state,
                products: [
                    ...state.products,
                    payload
                ]

            };
        default:
            return state ;
    }

}