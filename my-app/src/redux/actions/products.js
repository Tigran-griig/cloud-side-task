import { firebaseApi} from "../../utils/api";
import {openNotification} from "../../utils/helpers";

import store from "../store";
const actions ={

    setProductsData:data =>({
        type:'PRODUCTS:SET_DATA',
        payload:data
    }),

    setProductAddData:data =>({
        type:'PRODUCTS:SET_DATA-ADD',
        payload:data
    }),
    fetchProductsData:()=>dispatch=>{
        firebaseApi.getData()
            .then(({ data }) => {
                dispatch(actions.setProductsData(data));
                console.log(data)
            }).catch(err=>{
            openNotification({
                title: 'Error!',
                text: err.message,
                type: 'error',
            })
        })
    },
    addProducts:(data)=>dispatch=>{
        firebaseApi.postData(data).then(item=>{
           dispatch(actions.setProductAddData({
               id:item.name,
               ...data
           }))
        })
    },
    deleteItemDatabase:(id)=>dispatch=>{
        firebaseApi.deleteData(id)
            .then(() => {
                openNotification({
                    title: 'Ok!',
                    text: "Item Deleted",
                    type: 'success',
                })
                firebaseApi.getData()
                    .then(({ data }) => {
                        dispatch(actions.setProductsData(data));
                        console.log(data)
                    })
            }).catch(err=>{
            openNotification({
                title: 'Error!',
                text: err.message,
                type: 'error',
            })
        })
    },
    updateItemDatabase:(id,note)=>dispatch=>{
        firebaseApi.updateData(id,note)
            .then((data) => {
                console.log(data)
                openNotification({
                    title: 'Ok!',
                    text: "Item Edited",
                    type: 'success',
                })
                firebaseApi.getData()
                    .then(({ data }) => {
                        dispatch(actions.setProductsData(data));
                        console.log(data)
                    })
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