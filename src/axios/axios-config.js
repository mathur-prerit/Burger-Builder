import axios from 'axios'

const instance=axios.create({
    baseURL:"https://burger-app-f7322.firebaseio.com/",
});

export default instance