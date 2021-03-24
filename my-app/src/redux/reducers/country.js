const initialState = {
    country:null,
};

export default (state=initialState,{type,payload}) =>{
    switch (type) {
        case "COUNTRY:SET_DATA":
            return{
                country: payload

            };

        default:
            return state ;
    }

}