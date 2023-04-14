
import axios from "axios";

const BASE_URL = 'https://www.googleapis.com/customsearch/v1'

const params = {
    key: 'AIzaSyDMNCxd-5TUNl7attneZb6OiBP0ov-t1x8',
    cx: 'a1ebcfabc96294090',
}


export const fetchDataFromApi = async (payload) => {

    const {data} = await axios.get(BASE_URL , {
        params : {
            ...params, ...payload
        }
    })

    return data;

}