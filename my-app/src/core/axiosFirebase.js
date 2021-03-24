import axios from "axios";


const firebaseApi = axios.create({
    baseURL: "https://project-firebase-cloud-side-default-rtdb.firebaseio.com"
});


export default firebaseApi;