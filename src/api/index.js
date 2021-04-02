import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "",
    timeout: 10000
});

// 获取banner
const getBanner = () => {
    axiosInstance.get('').then(response => {
        return response.data
    }).catch(error => {
        console.log("error", error);
    })
}

const axiosHttp = {
    getBanner
}
export default axiosHttp;