import axios from "axios";


const countryApi = axios.create({
    baseURL: "https://restcountries.eu/rest/v2"
});

export default countryApi