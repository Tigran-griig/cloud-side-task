import {axiosCountry} from "../../core";
export default {
    getCountry: () => axiosCountry.get('/'),
    getCity: name => axiosCountry.get("/name/" + name),

};