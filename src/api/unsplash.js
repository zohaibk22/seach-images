import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID kdifycNkYHWrAcyZnWLZ-V5TpShwiZvOrH_1pzLq_2o",
    }
})