import axios from "axios";

const instanse = axios.create({
    baseURL: "https://avadakedavra-4a43a.firebaseio.com/"
});

export default instanse;