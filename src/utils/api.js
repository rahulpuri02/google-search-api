
import axios from "axios";

const BASE_URL = 'https://www.googleapis.com/customsearch/v1'

const params = {
    key: 'AIzaSyBrYp6EF9rPw0VGTPi2HC7XZG5LrrjgETI',
    cx: '043580678eba94e6d',
}


export const fetchDataFromApi = async (payload) => {

    const {data} = await axios.get(BASE_URL, {
        params: {...params, ...payload }
    })

    return data;
}