import {countryAndCityApi} from "../../utils/api";
import {openNotification} from '../../utils/helpers'
const actions ={

    setCountryData:data =>({
        type:'COUNTRY:SET_DATA',
        payload:data
    }),
    setCityData:data =>({
        type:'CITY:SET_DATA',
        payload:data
    }),



    fetchCountryData:()=>dispatch=>{
        countryAndCityApi.getCountry()
            .then(({ data }) => {
                dispatch(actions.setCountryData(data));
            }).catch(err=>{
            openNotification({
                             title: 'Error!',
                           text: err.message,
                          type: 'error',
                         })
        })
    },




}

export default actions